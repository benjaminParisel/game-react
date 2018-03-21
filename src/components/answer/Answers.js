import React, {Component} from 'react';
import AnswerItem from './AnswerItem';
import './answer.css';

export default class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {display: this.defaultDisplay()};
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleVerifyAnswer = this.handleVerifyAnswer.bind(this);
        this.hideAnswer = this.hideAnswer.bind(this);

    }

    defaultDisplay() {
        return ['', '', '', ''];
    }

    handleAnswerSelected(index) {
        const value = this.defaultDisplay();
        value[index] =  this.state.display[index] + ' selected';
        this.setState({display: value});
    }

    handleVerifyAnswer(index) {
        const value = this.state.display;
        let boolean = false;
        if (this.props.answers[index].isTrue) {
            boolean = true;
            // Bonne réponse
            value[index] = 'success';
        } else {
            // Mauvaise réponse
            const trustly = this.props.answers.findIndex(element => element.isTrue);
            value[trustly] = 'success';
            value[index] = 'error';
        }

        this.setState({display: value});
        this.props.updateSession(boolean);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.answers !== this.props.answers) {
            this.setState({display: this.defaultDisplay()});
        } else if (nextProps.fiftyFifty !== this.props.fiftyFifty) {
            this.hideAnswer();
        }
    }

    hideAnswer() {
        const answers = this.props.answers;

        // Load array falsy answers
        const wrongAnswers = [];
        answers.forEach(function (answer, index) {
            if (!answer.isTrue) {
                wrongAnswers.push({id: index});
            }
        });

        const tmp = wrongAnswers;
        tmp.splice(sample(wrongAnswers), 1);

        const newDisplay = this.state.display;
        tmp.forEach(element => {
            newDisplay[element.id] = newDisplay[element.id] + ' hideWrong';
        });
        this.setState({display: newDisplay});
    }

    render() {
        const answers = [];
        this.props.answers.forEach((answer, index) => {
            answers.push(
                <AnswerItem
                    key={index}
                    id={index}
                    answer={answer}
                    display={this.state.display[index]}
                    handleSelected={this.handleAnswerSelected}
                    getRightAnswer={this.handleVerifyAnswer}
                    session={this.props.session}>
                </AnswerItem>
            );
        });
        return (
            <div className="row answers">
                {answers}
            </div>
        );
    }
}

function sample(arrays) {
    console.log('arrays', arrays);
    return arrays[Math.floor(Math.random() * arrays.length)].id
}