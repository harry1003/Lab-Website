import React, { Component } from 'react'
import Slider from 'react-slick'
import './Header.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import pics here
import img1 from "../../resource/Header/IMG_1.JPG"
import img2 from "../../resource/Header/IMG_2.JPG"

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <div className="Header">
                <Slider {...settings} className="Pics">
                        <div>
                            <img src={img1} className="Pic"/>
                        </div>
                        <div>
                            <img src={img2} className="Pic"/>
                        </div>
                </Slider>
                <div className="LabName">
                    國立台灣大學 電子設計自動化實驗室
                </div>
            </div>
        );
    }
}

export default Header