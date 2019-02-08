import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
class App extends Component {
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('quotes');
    this.unsubscribe = null;
    this.state = {
      quote: ''
    };  
  }

  onCollectionUpdate = (querySnapshot) => {
    const numberOfQuote = querySnapshot.docs.length;
    const randomIndex = Math.floor(Math.random() * numberOfQuote);
    console.log(numberOfQuote);
    console.log(randomIndex);

    // get random quote
    const quote = querySnapshot.docs[randomIndex].data();

    this.setState({
      quote
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.quote.vi_value}
          </p>
          <p className="App-link">
            {this.state.quote.author}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
