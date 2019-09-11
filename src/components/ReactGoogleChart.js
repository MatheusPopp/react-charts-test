import React, { Component, Fragment } from 'react';
import { Chart } from 'react-google-charts';



class Main extends Component {
    render() {
        return (
            <Fragment>
            <Chart
                width={'100%'}
                height={'500px'}
                chartType="ComboChart"
                colors='#FFF'
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Month',
                        'Requirement Vol.',
                        'Premiums Vol.',
                        'Flat PX Vol.',
                        'Future Hedges Vol.',
                        'CRM Deltas Vo.',
                        'Flat PX FOB',
                        'Reference FOB',
                        'Market FOB'
                    ],
                    ['Jun-19', 4100, 4100, 2200, 0, 0, 329.59, 329.95, 331.46],
                    ['Jul-19', 4100, 4100, 2200, 3200, 4050, 330, 331.20, 331.46],
                    ['Ago-19', 4100, 4100, 0, 4000, 0, null, 335, 335],
                    ['Sep-19', 4100, 0, 0, 968, 0, null, null, 337],
                    ['Oct-19', 4100, 0, 0, 1026, 2600, null, null, 340],
                    ['Nov-19', 4100, 0, 0, 998, 0, null, null, 345]
                ]}
                options={{
                    colors: ['#3073b7', '#ffd966', '#fccca6', '#a5d38a', '#c18666', '#16a458', '#ffb14e', '#f30502'],
                    title: 'Monthly Coverage',
                    fill: '#FFF',
                    backgroundColor: '#3b3b3b',
                    legendTextStyle: { color: '#FFF' },
                    legend: {
                        position: 'bottom',
                        textStyle: { fontSize: 11, color: '#FFF' },
                        size: '1px'
                    },

                    vAxes: {
                        0: { title: 'METRIC TONS'},
                        1: { title: 'US$ PER TON'}
                       
                    },
                    titleTextStyle: { color: 'white' },
                    hAxis: { textStyle: { color: '#FFF' } },
                    seriesType: 'bars',
                    series: {
                        6: {
                            type: 'line',
                            targetAxisIndex: 1
                        },
                        7: {
                            type: 'line',
                            targetAxisIndex: 1
                        },
                        8: {
                            type: 'line',
                            targetAxisIndex: 1
                        }
                    }

                }}
                rootProps={{ 'data-testid': '1' }}/>
                </Fragment>
            
        );
    }
}

export default Main;
