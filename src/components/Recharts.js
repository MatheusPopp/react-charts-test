import React, { PureComponent, Fragment } from 'react';
import {
    ComposedChart, Area, Label, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Jun-19', reqVol: 4100, premVol: 4100, flatVol: 2200, futHed: 0 , crmDeltas: 0, flatPx: 329.59, refFOB: 329.95, mktFOB: 331.46
    },
    {
        name: 'Jul-19', reqVol: 4100, premVol: 4100, flatVol: 2200, futHed: 3200 , crmDeltas: 4050, flatPx: 329.59, refFOB: 329.95, mktFOB: 331.46
    },
    {
        name: 'Ago-19', reqVol: 4100, premVol: 4100, flatVol: 0, futHed: 4000 , crmDeltas: 0, flatPx: null, refFOB: 335, mktFOB: 335
    },
    {
        name: 'Sep-19', reqVol: 4100, premVol: 0, flatVol: 0, futHed: 968 , crmDeltas: 0, flatPx: null, refFOB: null, mktFOB: 337
    },
    {
        name: 'Oct-19', reqVol: 4100, premVol: 0, flatVol: 0, futHed: 1026 , crmDeltas: 2600, flatPx: null, refFOB: null, mktFOB: 340
    },
    {
        name: 'Nov-19', reqVol: 4100, premVol: 0, flatVol: 0, futHed: 998 , crmDeltas: 0, flatPx: null, refFOB: null, mktFOB: 345
    }
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

    render() {
        return (
            <Fragment>
                <ComposedChart width={1000} height={500} data={data} stroke={'#22222'}>
                    <XAxis name="Months" dataKey="name">
                        <Label value="MONTHS" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis yAxisId={0} orientation="left" stroke="#8884d8">
                        <Label angle={90} position='left' style={{ textAnchor: 'middle' }}>
                            Vertical Label!
                        </Label>
                    </YAxis>
                    <YAxis yAxisId={1} orientation="right"  domain={[320, 345]} ticks={[320, 325, 330, 335, 340, 345]} stroke="#82ca9d">
                        <Label angle={90} position='right' style={{ textAnchor: 'middle' }}>
                            Vertical Label!
                        </Label>                        
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#2222" />
                    <Bar dataKey="reqVol" barSize={20} fill="#3073b7" />
                    <Bar dataKey="premVol" barSize={20} fill="#fccca6" />
                    <Bar dataKey="flatVol" barSize={20} fill="#a5d38a" />
                    <Bar dataKey="futHed" barSize={20} fill="#c18666" />
                    <Bar dataKey="crmDeltas" barSize={20} fill="#16a458" />

                    <Line yAxisId={1} type="monotone" dataKey="flatPx" stroke="#ffb14e" />
                    <Line yAxisId={1} type="monotone" dataKey="refFOB" stroke="#f30502" />
                    <Line yAxisId={1} type="monotone" dataKey="mktFOB" stroke="#413ea0" />




                </ComposedChart>
            </Fragment>

        );
    }
}
