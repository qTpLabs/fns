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
      quotes: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const quotes = [];
    querySnapshot.forEach((doc) => {
      const { vi_value, author } = doc.data();
      quotes.push({
        vi_value,
        author,
      });
    });
    this.setState({
      quotes
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="App">
        {this.state.quotes.map(quote =>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {quote.vi_value}
          </p>
          <p className="App-link">
            {quote.author}
          </p>
        </header>
        )}
      </div>
    );
  }
}

export default App;
