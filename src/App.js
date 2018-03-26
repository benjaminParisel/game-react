import React, {Component} from 'react';
import './App.css';
import data from './data';
import Panel from './components/panel/Panel';
import Select from './components/searchBar/select';
import Pyramide from './components/pyramide/Pyramide';
import Modal from 'react-modal';
import ReactCountdownClock from 'react-countdown-clock';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

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

        this.callFriend = this.callFriend.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleAnswerGiven = this.handleAnswerGiven.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.fiftyFifty = this.fiftyFifty.bind(this);
        this.callPublic = this.callPublic.bind(this);
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

    callFriend() {
        this.setState({
            callFriend: true,
            modalIsOpen: true
        });
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    callPublic(){
        this.setState({public: true});
    }


render() {
        return (
            <div>
                <header className="header clearfix">
                    <nav>
                        <ul className="nav nav-pills pull-right">
                            <li id="call"><a className="btn btn-lg btn-default" href="#"
                                             role="button"
                                             disabled={this.state.callFriend}
                                             onClick={this.callFriend}>Appel à un ami</a></li>

                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}>
                                <ReactCountdownClock seconds={60}
                                                      color="#337ab7"
                                                      alpha={0.9}
                                                      size={300}
                                />
                            </Modal>
                            <li id="public"><a className="btn btn-lg btn-default" href="#"
                                               role="button"
                                               disabled={this.state.public}
                                               onClick={this.callPublic}>
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
                                callFriend={this.state.callFriend}
                            ></Panel>
                            :
                            <div className='jumbotron'>
                                <p>Bienvenue dans GVDH</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
