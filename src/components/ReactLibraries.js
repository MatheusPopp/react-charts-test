import React, {Component,Fragment} from 'react';
import ChartJs from './js/ChartJs';



class Main extends Component {

    constructor() {
        super();

        this.state = { 'chartId': '' }
        this.charts = [{name: 'Nivo Rocks', id:1}, {name: 'Dev Express', id: 2}, {name: 'Rechart', id: 3}, {name: 'React Google Charts', id: 4}];
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
                    <label>Select a JS Library</label>
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
                    <ReactLibraries type={this.state.chartId}></ReactLibraries>
                </div>
            </Fragment>
        )
    }

}

class ReactLibraries extends Component {
    render () {  
        if (this.props.type === "1") {
            return (
                <NivoChart></NivoChart>
            );
        }

        if (this.props.type === "2") {
            return (
                <DevExpress></DevExpress>
            );
        }

        if (this.props.type === "3") {
            return (
                <Rechart></Rechart>
            );
        }

        if(this.props.type === "4") {
            return (
                <ReactGoogleCharts></ReactGoogleCharts>
            );
        }

        return (<Fragment></Fragment>);
        
        
    }
}

export default Main;