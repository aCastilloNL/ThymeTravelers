import HomePage from "../home/HomePage"
import PageOne from "../pageOne/PageOne"
import React, { Component } from 'react';

class Landing extends Component {
    state = {isLandingOpen : true}

    closeLanding = () => this.setState({isLandingOpen : false})

    render() {
        return (
            <main>
                {this.state.isLandingOpen ? <HomePage action={this.closeLanding}/> : <PageOne/>}
            </main>
        );
    }
}

export default Landing;
