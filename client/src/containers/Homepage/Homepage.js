import React, { Component } from 'react'
import './Homepage.css'

var testData = {
    data:[
        {id: 0, time: "2022-04", content: "2ndPlace Each object is a record of a person (with a first name and a last name)."},
        {id: 1, time: "2022-04", content: "2ndPlace Each object is a record of a person (with a first name and a last name)."},
        {id: 2, time: "2022-04", content: "2ndPlace Each object is a record of a person (with a first name and a last name)."},
        {id: 3, time: "2022-04", content: "2ndPlace Each object is a record of a person (with a first name and a last name)."},
    ]
}

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    More News
                </div>

                <table className='News'>
                    {
                        testData.data.map(
                            (news, index) => {
                                return <tr>
                                            <td className='Date'>{news.time}</td>
                                            <td className="Data">{news.content}</td>
                                        </tr>
                            }
                        )
                    }
                </table>


            </div>
        );
    }
}

export default Homepage