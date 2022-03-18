import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Header">
                <div className="Pics">
                    put pics here
                </div>

                <div className="LabName">
                    國立台灣大學 電子設計自動化實驗室
                </div>
            </div>
        );
    }
}

export default Header