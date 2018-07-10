import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

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
    };

    this.attendanceData = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      datasets: [{
        label: "Attendance %",
        backgroundColor: "rgba(21, 147, 105, 0.8)",
        fill: true,
        data: [100, 80, 75, 80, 75, 40, 85, 90, 92, 95, 90],
        lineTension: 0
      },
      {
        label: "Threashold",
        borderColor: "rgba(255, 102, 102, 0.8)",
        data: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
        radius: 0,
        fill: false,
        lineTension: 0
      }]
    };
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
        <section class="dashboard-chart">
        <h2 class="dashboard-chart-title">Result: Knowledge before and after course</h2>
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
        </section>
        <section class="dashboard-chart">
        <h2 class="dashboard-chart-title">Overall Attendance</h2>
        <p>
        <Line
          data={this.attendanceData}
          width={500}
          height={500}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              "yAxes": [{"ticks": { "beginAtZero": true, "max": 100}}],
              "xAxes": [{scaleLabel:{display:true,labelString:'Week'}}]
            }
          }}
        />
        </p>
        </section>
      </div>
    );
  }
}

export default App;
