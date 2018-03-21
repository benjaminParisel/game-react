import React, {Component} from 'react';
import './App.css';
import data from './data';
import Panel from './components/panel/Panel';
import Select from './components/searchBar/select';
import Pyramide from './components/pyramide/Pyramide';


class App extends Component {
    constructor(props) {
        super(props);
        const sessionTmp = [];
        data.forEach((element, index) => {
            sessionTmp[index] = '-';
        });

        this.state = {
            indexSelected: '-',
            session: sessionTmp,
            fiftyFifty: false
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleAnswerGiven = this.handleAnswerGiven.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.fiftyFifty = this.fiftyFifty.bind(this);
    }

    handleSelectChange(indexSelected) {
        this.setState({
            indexSelected: indexSelected ? indexSelected.value : null,
        });
    }

    handleAnswerGiven(value) {
        // I need to find why this setState doesn't work.
        const sessionClone = this.state.session;
        sessionClone[this.state.indexSelected]= value;
        this.setState({
            session: sessionClone
        });
    }

    handleNextQuestion() {
        this.setState((prevState) => ({
            indexSelected: prevState.indexSelected + 1
        }));
    }

    fiftyFifty(){
        this.setState({
            fiftyFifty: true
        });
    }

    render() {
        return (
            <div>
                <header className="header clearfix">
                    <nav>
                        <ul className="nav nav-pills pull-right">
                            <li id="call"><a className="btn btn-lg btn-default" href="#"
                                             role="button">Appel à un ami</a></li>
                            <li id="public"><a className="btn btn-lg btn-default" href="#"
                                               role="button">
                                Public</a></li>
                            <button className="btn btn-lg btn-default"
                                    onClick={this.fiftyFifty}
                                    disabled={this.state.fiftyFifty}>
                                50/50
                            </button>
                        </ul>
                        <Select options={data} onSelectChange={this.handleSelectChange} session={this.state.session}/>
                    </nav>
                </header>
                <div className="panel">
                    <div className='pyramide'>
                        <Pyramide profits={this.state.session} activeQuestion={this.state.indexSelected} data={data[this.state.indexSelected]}></Pyramide>
                    </div>
                    <div className="container home">
                        {Number.isInteger(this.state.indexSelected) ?
                            <Panel
                                data={data[this.state.indexSelected]}
                                onAnswerGiven={this.handleAnswerGiven}
                                onNextQuestion={this.handleNextQuestion}
                                activeQuestion={this.state.indexSelected}
                                fiftyFifty={this.state.fiftyFifty}
                            ></Panel>
                            :
                            <div className='jumbotron'>
                                <p>Welcome into QPUC</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
