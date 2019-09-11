import React, { Component, Fragment } from 'react'
import Chart from 'chart.js';


class CustomChart extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {

        const barChartData = {
            labels: ["Jun-19", "Jul-19", "Ago-19", "Sep-19", "Oct-19", "Nov-19"],
            datasets: [
                
                {
                    data: [
                        329.59, 330, null, null, null, null
                    ],
                    type: 'line',
                    label: 'Flat PX FOB',
                    fill: false,
                    yAxisID: 'us-per-ton',
                    backgroundColor: "#3b3b3b",
                    borderColor: "#16a458",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    lineTension: 0.3,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#16a458",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#16a458",
                    pointHoverBorderColor: "#16a458",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10
                }, {
                    data: [
                        329.95, 331.20, 335, null, null, null
                    ],
                    type: 'line',
                    label: 'Reference FOB',
                    fill: false,
                    yAxisID: 'us-per-ton',
                    backgroundColor: "#3b3b3b",
                    borderColor: "#ffb14e",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    lineTension: .3,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#ffb14e",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#ffb14e",
                    pointHoverBorderColor: "#ffb14e",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10
                },
                {
                    data: [
                        331.46, 331.46, 335, 337, 340, 345
                    ],
                    type: 'line',
                    label: 'Market FOB',
                    fill: false,
                    yAxisID: 'us-per-ton',
                    backgroundColor: "#3b3b3b",
                    borderColor: "#f30502",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    lineTension: .3,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#f30502",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#f30502",
                    pointHoverBorderColor: "#f30502",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10
                },
                {
                    label: 'Requirement Vol.',
                    backgroundColor: "#3073b7",
                    yAxisID: "metric-tons",
                    stack: 'Stack 0',
                    data: [
                        4100, 4100, 4100, 4100, 4100, 4100
                    ]
                }, {
                    label: 'Premiums Vol.',
                    backgroundColor: "#ffd966",
                    yAxisID: "metric-tons",
                    stack: 'Stack 1',
                    data: [
                        4100, 4100, 4100, 0, 0, 0
                    ]
                }, {
                    label: 'Flat PX Vol.',
                    backgroundColor: "#fccca6",
                    yAxisID: "metric-tons",
                    stack: 'Stack 3',
                    data: [
                        2200, 2200, 0, 0, 0, 0
                    ]
                },
                {
                    label: 'Future Hedges Vol.',
                    backgroundColor: "#a5d38a",
                    yAxisID: "metric-tons",
                    stack: 'Stack 3',
                    data: [
                        0, 3200, 4000, 968, 1026, 998
                    ]
                },
                {
                    label: 'CRM Deltas Vol.',
                    backgroundColor: "#c18666",
                    yAxisID: "metric-tons",
                    stack: 'Stack 3',
                    data: [
                        0, 4050, 0, 0, 2600, 0
                    ]
                }
            ]
        }

        this.myChart = new Chart(this.chartRef.current, {
            type: 'bar',
            data: barChartData,
            options: {
                backgroundColor: '#3b3b3b',
                title: {
                    display: true,
                    text: "Monthly Coverage",
                    fontSize: 20,
                    position: 'top',
                    fontColor: '#FFF'
                },
                tooltips: {
                    mode: 'point'
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            fontColor: '#FFF'
                        }
                    }],
                    yAxes: [{
                        title: 'teste',
                        id: "metric-tons",
                        type: 'linear',
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'METRIC TONS',
                            fontColor: '#FFF'
                        },
                        ticks: {
                            fontColor: '#FFF'
                        }
                    },
                    {
                        id: "us-per-ton",
                        type: 'linear',
                        position: 'right',
                        gridLines: {
                            drawOnChartArea: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'US$ PER TON',
                            fontColor: '#FFF'
                        },
                        ticks: {
                            fontColor: '#FFF'
                        }
                    }]
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontSize: 15,
                        fontFamily: 'arial',
                        fontColor: '#FFF'
                    }
                }
                
            }
        });
    }

    render() {
        return (
            <Fragment>
                <canvas ref={this.chartRef}></canvas>
                <button onClick={this.expandChart}>Expand</button>
            </Fragment>
            
        );
    }
}

class ChartJs extends Component {
    render() {
        return (<CustomChart></CustomChart>);
    }
}

export default ChartJs;
