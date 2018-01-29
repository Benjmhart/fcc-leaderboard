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
      sortType: 'recent',
      alltime:[],
      recent:[]
    }
  }
  getCampersByAllTime() {
    //api call
    getCampers('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(val => this.setState({ alltime: val }));
  }
  getCampersByLast30() {
    //api call
    getCampers('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(val => this.setState({ recent: val }));
    //populate state
  }
  populateBoardItems() {
    const relevantData = this.state[this.state.sortType];
    let items= <p> no data</p>;
    if (relevantData){
      items = relevantData.map((prop, i) => {
      prop.i = i;
      return(<BoardItem prop={prop} key={i}/>)})
    }
    return items;
  }

  switchType() {
    //change the type
    const type = (this.state.sortType==='alltime') ? 'recent' : 'alltime';
    this.setState({ sortType: type })
  }

  componentDidMount() {
    //populate state by calling both getcampers functions.
    this.getCampersByAllTime();
    this.getCampersByLast30();
  }    
  
  render() {
    

    console.log('rendering')

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">freeCodeCamp<i className="fa fa-free-code-camp"></i> Camper Leaderboard</h1>
        </header>
        <div className="board">
          <BoardHeader />
          <BoardControl sortType={this.state.sortType} switchType={this.switchType}/>
          {this.populateBoardItems()}
        </div>
      </div>
    );
  }
}

export default App;
