import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

class App extends Component {
  constructor(args) {
    super(args);
    this.barData = {
      labels: ["Before Course", "After Course"],
      datasets: [
        {
          label: "% Knowledge",
          data: [40, 90],
          backgroundColor: [
            "rgba(211, 216, 0)",
            "rgba(116, 192, 153)" // Mint
          ],
          borderWidth: 0
        }
      ]
    };

    this.doughtnutL = {
      labels: ["Workers", "Supervisors", "Managers"],
      datasets: [
        {
          label: "% Workers",
          data: [40, 25, 10],
          backgroundColor: [
            "rgba(116, 192, 153)", // Mint
            "rgba(255, 102, 102)",
            "rgba(0, 60, 65)" // dark blue
          ],
          borderColor: [
            "rgba(116, 192, 153)",
            "rgba(54, 162, 235, 1)",
            "rgba(0, 60, 65)"
          ],
          borderWidth: 0
        }
      ]
    };

    this.doughnutR = {
      labels: ["Enrolled in this course", "Not enrolled"],
      datasets: [
        {
          label: "% Enrolled",
          data: [60, 40],
          backgroundColor: [
            "rgba(116, 192, 153)", // Mint
            "rgba(0, 60, 65)" // dark blue
          ],
          borderColor: [
            "rgba(116, 192, 153)", // Mint
            "rgba(0, 60, 65)" // dark blue
          ],
          borderWidth: 1
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header />

        <div className="wrapper">
          <div className="bar">
            <p>
              <strong>Result: Knowledge before and after course</strong>
            </p>
            <Bar
              data={this.barData}
              width={500}
              height={500}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [{ ticks: { beginAtZero: true, max: 100 } }]
                }
              }}
            />
          </div>

          <br />
          <br />
          <br />
          <div className="doughnut-1">
            <p>
              <strong>User demographics: Role</strong>
            </p>
            <Doughnut
              data={this.doughtnutL}
              width={500}
              height={500}
              options={{
                legend: {
                  position: "bottom",
                  fullWidth: true
                }
              }}
            />
            {/*
              <p> Workers: {this.doughtnutL.datasets[0].data[0]} </p>
              <p> Supervirsors: {this.doughtnutL.datasets[0].data[1]} </p>
              <p> Managers: {this.doughtnutL.datasets[0].data[2]} </p>
            */}
          </div>

          <div className="doughnut-2">
            <p><strong>Employees enrolled vs not enrolled</strong></p>
            <Doughnut
              data={this.doughnutR}
              width={500}
              height={500}
              options={{
                legend: {
                  position: "bottom",
                  fullWidth: true
                }
              }}
            />
            
            {/*
              <p>Enrolled in this course: {this.doughnutR.datasets[0].data[0]}</p>
              <p> Not enrolled: {this.doughnutR.datasets[0].data[1]} </p>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
