import { Bar, ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line'
import React, { Component, Fragment } from 'react';
import responsiveBarData from '../data/responsiveBarData';
import responsiveLineData from '../data/responsiveLineData';
import { line } from 'd3-shape';


const MyResponsiveBar = () => (
    <ResponsiveBar
        data={responsiveBarData}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 2,
                itemsSpacing: 10,
                itemWidth: 85,
                itemHeight: 25,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 38,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const MyResponsiveLine = () => (
    <ResponsiveLine
        data={responsiveLineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const barColor = "#0095ff";
const lineColor = "rgba(200, 30, 15, 1)";

// `v` is used for bars
// `v1` is used for line
// `v2` is used for area
const data = [
    { x: "0", v: 3.3, v1: 2.0 },
    { x: "1", v: 3.5, v1: 3.1 },
    { x: "2", v: 3.8, v1: 2.3 },
    { x: "3", v: 4.1, v1: 3.1 },
    { x: "4", v: 4.4, v1: 4.0 },
    { x: "5", v: 4.7, v1: 3.9 },
    { x: "6", v: 4.9, v1: 2.9 },
    { x: "7", v: 5.2, v1: 3.3 }
];

const Line = ({ bars, xScale, yScale }) => {
    const lineGenerator = line()
        .x(bar => xScale(bar.data.index) + bar.width / 2)
        .y(bar => yScale(bar.data.data.v1));

    return (
        <Fragment>
            <path
                d={lineGenerator(bars)}
                fill="none"
                stroke={lineColor}
                style={{ pointerEvents: "none" }}
            />
            {bars.map(bar => (
                <circle
                    key={bar.key}
                    cx={xScale(bar.data.index) + bar.width / 2}
                    cy={yScale(bar.data.data.v1)}
                    r={4}
                    fill="white"
                    stroke={lineColor}
                    style={{ pointerEvents: "none" }}
                />
            ))}
        </Fragment>
    );
};

const BarWithLine = () => (

    <ResponsiveBar
        width={500}
        height={400}
        data={data}
        keys={["v"]}
        maxValue={6}
        padding={0.6}
        margin={{
            top: 10,
            right: 10,
            bottom: 36,
            left: 36
        }}
        indexBy="x"
        enableLabel={false}
        colors={[barColor]}
        borderRadius={2}
        axisLeft={{
            tickValues: 7
        }}
        layers={["grid", "axes", "bars", Line, "markers", "legends"]}
    />
);




const charts = [
    { id: 1, name: 'Bar' },
    { id: 2, name: 'Line' },
    { id: 3, name: 'Bar w/ line' }
]


class Main extends Component {

    constructor() {
        super();

        this.state = { 'chartId': '' }
        this.charts = charts;
    }

    handleChange = (e) => {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {

        return(
            <Fragment>
                <div className="selectContainer">
                    <label>Select a Nivo chart</label>
                    <div className="pure-control-group">
                        <select value={this.state.chartId} name="chartId" id="chartId" onChange={this.handleChange}>
                            <option value="">[None]</option>
                            {
                                this.charts.map(chart => {
                                    return <option key={chart.id} value={chart.id}>{chart.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="chartContainer">
                    <NivoChart type={this.state.chartId}></NivoChart>
                </div>
            </Fragment>
        )
    }

}


class NivoChart extends Component {
    render() {
        if (this.props.type === "1") {
            return (
                <MyResponsiveBar></MyResponsiveBar>
            );
        }

        if (this.props.type === "2") {
            return (
                <MyResponsiveLine></MyResponsiveLine>
            );
        }

        if (this.props.type === "3") {
            return (
                <BarWithLine></BarWithLine>
            );
        }

        return (<Fragment></Fragment>);
    }
}

export default Main;