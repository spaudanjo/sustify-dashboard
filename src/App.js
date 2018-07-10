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
        data: [40, 90],
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

    this.doughnutRight = {
      labels: ["Workers", "Supervisors", "Managers"],
      datasets: [{
        label: '% Workers',
        data: [40, 25, 10],
        backgroundColor: [
          'rgba(116, 192, 153)', // Mint
          'rgba(255, 102, 102)',
          'rgba(0, 60, 65)' // dark blue
        ],
        borderColor: [
          'rgba(116, 192, 153)',
          'rgba(54, 162, 235, 1)',
          'rgba(0, 60, 65)'
        ],
        borderWidth: 0
      }]
    }

    this.doughnutLeft = {
      labels: ["Enrolled in this course", "Not enrolled"],
      datasets: [{
        label: '% Enrolled',
        data: [60, 40],
        backgroundColor: [
          'rgba(116, 192, 153)', // Mint
          'rgba(0, 60, 65)' // dark blue
        ],
        borderColor: [
          'rgba(116, 192, 153)', // Mint
          'rgba(0, 60, 65)' // dark blue
        ],
        borderWidth: 1
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>View all cards</p>
        </header>

        <p><strong>
          Result: Knowledge before and after course
        </strong></p>
        <p>
        <Bar
          data={this.barData}
          width={500}
          height={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              "yAxes": [{"ticks": { "beginAtZero": true, "max": 100}}]
            }
          }}
        />
        </p>

        <br />
        <br />
        <br />
        <div className="wrapper">
          <p className="doughnut-1">
          <p><strong>User demographics: Role</strong></p>
            <Doughnut
              data={this.doughnutRight}
              width={500}
              height={500}
            />
          </p>

          <p className="doughnut-2">
          <p><strong>Employees enrolled vs not enrolled</strong></p>
            <Doughnut
              data={this.doughnutLeft} 
              width={500}
              height={500}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
