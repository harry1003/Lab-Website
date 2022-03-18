import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Main from './containers/Main'

function App() {
    return (
		<BrowserRouter>
			<div className="App">
				<Main/>
			</div>
		</BrowserRouter>
    );
}

export default App;
