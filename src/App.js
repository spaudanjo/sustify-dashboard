import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

class App extends Component {

  constructor(args) {
    super(args);
    this.chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    this.barData = {
      labels: ["Before Course", "After Course"],
      datasets: [{
        label: '% Knowledge',
        data: [19, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Doughnut data={this.chartData} />
        </p>

        <br />
        <br />
        <br />
        <p><strong>
          Result: Knowledge before and after course
        </strong></p>
        <p>
        <Bar
          data={this.barData}
          width={500}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
        </p>
      </div>
    );
  }
}

export default App;
