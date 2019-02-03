import React, { Component } from 'react';
import paperImage from './assets/paper.png';
import rockImage from './assets/rock.png';
import scissorImage from './assets/scissor.png';
import PlayerChoice from './PlayerChoice';
import './App.css';

function getRandomChoice() {
    let computerChoice;
    let random = Math.random() * 100;
    random = Math.round(random);

    if (random <= 33) {
        computerChoice = 'rock';
    } else if (random <= 67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    return computerChoice;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerScore: 0,
            computerScore: 0
        };

        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleClickChoice = this.handleClickChoice.bind(this);
    }

    handleClickReset() {
        this.setState({playerScore: 0, computerScore: 0 });
    }

    handleClickChoice(playerChoice) {
        {/* const {playerChoice} = this.state; // const playerChoice = this.state.playerChoice; */}
        const computerChoice = getRandomChoice();
        console.log(computerChoice);

        if (playerChoice === computerChoice){
            alert('tie');
        } else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'rock' && computerChoice === 'scissor') ||
            (playerChoice === 'scissor' && computerChoice === 'paper'))
        {
            alert('player wins the round');
            this.setState({playerScore: this.state.playerScore + 1}); // No ++
        } else {
            alert('computer wins the round');
            this.setState({computerScore: this.state.computerScore + 1});
        }

        console.log(this.state); {/* setState isn't async */}
    }

    componentDidUpdate(){
        const { playerScore, computerScore } = this.state;

        if (playerScore >= 5) {
            alert('Player wins the game');
        } else if (computerScore >= 5) {
            alert('Computer wins the game');
        }

    }


    render() {
        return (
         <div className="App">
            <h1> Rock Paper Scissors </h1>
            <div>
                Player Score: {this.state.playerScore}
                <br /> <br />
                Computer Score: {this.state.computerScore}
            </div>
        <br />

        {/*Created another component due to similar behavior shared across rock, paper and scissors */}

        <PlayerChoice
        name="paper"
        image={paperImage}
        onClick={this.handleClickChoice}
        />

        <PlayerChoice
        name="rock"
        image={rockImage}
        onClick={this.handleClickChoice}
        />

        <PlayerChoice
        name="scissor"
        image={scissorImage}
        onClick={this.handleClickChoice}
        />

        <br /><br />


        <button onClick={this.handleClickReset}> Reset </button>

     </div>
    );
    }
}

export default App;
