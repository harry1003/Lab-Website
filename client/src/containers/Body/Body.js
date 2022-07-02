import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from '../Homepage/Homepage'
import './Body.css'

import introduction  from "../../resource/EDA_lab.pdf"

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Body">
                <nav class="Links">
                    <li className='Link'><Link to="/" className='Word'>Homepage</Link></li>
                    <li className='Link'><a href={introduction} className='Word'>Lab Introduction</a></li>
                    <li className='Link'><a href="http://cc.ee.ntu.edu.tw/~ywchang/" className='Word'>Advisor</a></li>
                    <li className='Link'><Link to="/Members" className='Word'>Members</Link></li>
                    <li className='Link'><a href="http://cc.ee.ntu.edu.tw/~ywchang/projects.html" className='Word'>Projects</a></li>
                    <li className='Link'><a href="http://cc.ee.ntu.edu.tw/~ywchang/publications.html" className='Word'>Publications</a></li>
                    <li className='Link'><a href="http://eda.ee.ntu.edu.tw/research.htm" className='Word'>Download</a></li>
                    <li className='Link'><Link to="/Books" className='Word'>Books</Link></li>
                    <li className='Link'><Link to="/Honors" className='Word'>Honors</Link></li>
                    <li className='Link'><Link to="/Photos" className='Word'>Photos</Link></li>
                    <li className='Link'><Link to="/Links" className='Word'>Links</Link></li>
                    <li className='Link'><Link to="/Login" className='Word'>Members Only</Link></li>
                </nav>

                <div className="Content">
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Body