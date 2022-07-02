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
                <div className='MoreNews'>
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
                
                <div className='Big'>聯絡方式</div>
                <div className='Normal'>
                    地址：10617 台北市大安區羅斯福路四段一號國立台灣大學電子所博理館 406 室<br/>
                    電話：+886-2-3366-3700 - 6406 , +886-2-2363-5251 - 6406 <br/>
                    傳真：+886-2-2368-1679 (請註明 博理館406室 EDA實驗室)
                </div>
                <div className='Big'>Contact</div>
                <div className='Normal'>
                    Company: Electronic Design Automation Lab, National Taiwan University<br/>
                    Address: BL406, No. 1, Sec. 4, Roosevelt Road, Taipei 10617, Taiwan (R.O.C.)<br/>
                    Phone: +886-2-3366-3700 - 6406, +886-2-2363-5251 - 6406 <br/>
                    Fax: +886-2-2368-1679 (Please note EDA Lab, BL406)
                </div>
            </div>
        );
    }
}

export default Homepage