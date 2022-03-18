import React, { Component } from 'react'

import './Body.css'

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Body">
                <div className="Links">
                    put links here
                </div>

                <div className="Content">
                    put content here
                </div>
            </div>
        );
    }
}

export default Body