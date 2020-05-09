import React from 'react';
import logo from './logo.svg';
import bear from './bear.png'
import './App.css';
import  CheckBox  from './CheckBox.js';

class Card extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.state = {
      currentCard: 0,
      cardData: [
        {
          index: 0,
          title: "First, you pick the oats",
          text: "Oats",
          options: [ 
            {
              value: "Regular Oats",
              isChecked: false
            },
            {
              value:"Quick Oats",
              isChecked: false
            },
            {
              value:"Steel Cut Oats",
              isChecked: false
            }      
          ]
        },
        {
          index: 1,
          title: "Second, you pick the flour",
          text: "Flour",
          options: [ 
            {
              value: "Almond Flour",
              isChecked: false
            },
            {
              value:"Whole Wheat Flour",
              isChecked: false
            },
            {
              value:"Pastry Flour",
              isChecked: false
            }      
          ]
        }
      ],
      lastCard: false
    }

  }

  createRecipe() {

    const ingredients = this.state.cardData.map((card) => {
      // console.log(card);
      return (
        card.options.map((option) => {
          if (option.isChecked) {
            return <li class="list-group-item" key={option.value}>{option.value}</li>
          }
        }
        )
      )
    })
    return (
      <ul class="list-group list-group flush">{ingredients}</ul>
       
          
              
    )
  }

  handleNextClick(props) {

    if (this.state.currentCard ==  this.state.cardData.length-1) {
      console.log("done!");
      this.setState({lastCard: true});
    } else {

      //update the card index to display the next card. 
      this.setState({
        currentCard: this.state.currentCard + 1
      })
    }
  }

  handleCheck = (event) => {
    let cardData = this.state.cardData;
    let currentCardData = cardData[this.state.currentCard];
    let currentCardDataOptions = currentCardData.options;

    //Check which value was selected or unselected
    currentCardDataOptions.forEach(option => {
      if(option.value == event.target.value) {
        option.isChecked = event.target.checked;
      }
    })

    //update the state of cardData with the new isSelected
    this.setState({
      cardData: cardData
    });
    console.log(this.state.cardData);
  }

  render() {
    const currentCardData = this.state.cardData[this.state.currentCard];
    const currentCardDataOptions = currentCardData.options;
    if (this.state.lastCard) {
      return (
      <div class="row justify-content-center">
        <div class="col-sm-6"> 
          <div class="card text-center survey-card">
              <div class="card-header">
                THE END you did it
              </div>
              <this.createRecipe />
          </div>
        </div>
      </div>
      )
    }
    return (
      <div>
      <div class="row justify-content-center">
        <div class="col-sm-6"> 
          <div class="card text-center survey-card">
              <div class="card-title">
                {currentCardData.title}
              </div>
              <div class="card-body"> 
              {
                  currentCardDataOptions.map((option) => {
                      return (<CheckBox handleCheck={this.handleCheck} {...option} />)
                  })
                }
              </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
      <NextButton onClick={this.handleNextClick}/>
      </div>
      </div>
    )
  }

}


function NextButton(props) {
  return (
    <button type="button" class="btn btn-outline-primary" onClick={props.onClick}>Next</button>
  )
}




function App() {

  return (

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-title">
          BearBaking Cookie Guide
        </div>
      </div>
      <div class="row justify-content-center"><img class="logo" src={bear}/></div>

      <Card />
    </div>
  );
  
}

export default App;
