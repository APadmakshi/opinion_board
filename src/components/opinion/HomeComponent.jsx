import React, {Component} from 'react'

import {Link } from 'react-router-dom'

class HomeComponent extends Component {
    render() {

        return (
        	<>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.params.name}. You can add your opinions here.
                </div>
            </>
        )        
    }
}

export default HomeComponent