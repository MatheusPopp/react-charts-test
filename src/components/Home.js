import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import '../css/bootstrap.css'

class Home extends Component {

    goToJsLibraries = () => {
        this.props.history.push('/js');
    }

    goToReactLibraries = () => {
        this.props.history.push('/react');
    }

    render() {
        return (
            <Container>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Chart Test</h1>
                        <p>
                            <button onClick={this.goToReactLibraries}  className="btn btn-primary my-2">React Libraries</button>
                            <button onClick={this.goToJsLibraries}  className="btn btn-secondary my-2">Javascript Libraries</button>
                        </p>
                    </div>
                </section>
            </Container>

        )
    }
}


export default Home;