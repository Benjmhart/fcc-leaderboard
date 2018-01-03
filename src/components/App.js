import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import BoardControl from './BoardControl';
import BoardItem from './BoardItem';
import getCampers from '../getCampers';
import '../styles/App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  constructor() {
    super();
    this.getCampersByLast30 = this.getCampersByLast30.bind(this);
    this.getCampersByAllTime = this.getCampersByAllTime.bind(this);
    this.populateBoardItems = this.populateBoardItems.bind(this);
    this.switchType = this.switchType.bind(this);
    this.state = {
      sortType: 'last30',
      campersLast30: [],
      campersAllTime: []
    }
  }
  getCampersByAllTime() {
    console.log('trying to get campers by all time')
    //api call
    getCampers('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(val => this.setState(prevState => {prevState.campersAllTime = val}));
  }
  getCampersByLast30() {
    console.log('trying to get campers by last 30')
    //api call
    getCampers('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(val => this.setState(prevState => {prevState.campersLast30 = val}));
    //populate state
  }
  populateBoardItems(type) {
    if (typeof type !== 'string') {console.log('populateboarditems: failed to pass a string')}
    //map the state to the board item component
  }

  switchType() {
    //change the type
  }

  componentWillMount() {
    //populate state by calling both getcampers functions.
    this.getCampersByAllTime();
    this.getCampersByLast30();
  }    
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">freeCodeCamp<i className="fa fa-free-code-camp"></i> Camper Leaderboard</h1>
        </header>
        <div className="board">
          <BoardHeader />
          <BoardControl />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          {/** call to populateBoardItems */}
        </div>
      </div>
    );
  }
}

export default App;
