import React, {Component,Fragment} from 'react';
import ChartJs from './js/ChartJs';



class Main extends Component {

    constructor() {
        super();

        this.state = { 'chartId': '' }
        this.charts = [{name: 'ChartJS', id:1}];
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
                    <JavascriptLibraries type={this.state.chartId}></JavascriptLibraries>
                </div>
            </Fragment>
        )
    }

}

class JavascriptLibraries extends Component {
    render () {  
        if (this.props.type === "1") {
            return (
                <ChartJs></ChartJs>
            );
        }

        if (this.props.type === "2") {
            return (
                <Fragment></Fragment>
            );
        }

        if (this.props.type === "3") {
            return (
                <Fragment></Fragment>
            );
        }

        return (<Fragment></Fragment>);
        
        
    }
}

export default Main;