import React, { Component } from 'react'

import Header from './Header/Header'
import Body from './Body/Body'
import Bottom from './Bottom/Bottom'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            authorize: false
        };
    }

    render() {
        return(
            <div className='Main'>
                <Header/>
                <Body/>
                {/* <Bottom/> */}
            </div>
        );
    }
}

export default Main