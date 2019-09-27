import React, { Component } from 'react'
import PreloaderLogo from './PreloaderLogo'

class Preloader extends Component {
    
    render() {
        return (
            <>
                <div className="preloader">
                    <div className="preloader__inside">
                        <PreloaderLogo/>
                    </div>
                </div>
                <style jsx>{`
                    .preloader {
                        z-index: 9999;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0,0,0,.8) url('/static/bgs/main-min.jpg') no-repeat 50% 50%;
                        background-size: cover;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .preloader:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        background-color: rgba(0,0,0,.9);
                    }
                    .preloader__inside {
                        position: relative;
                        z-index: 10000;
                    }
                `}</style>
            </>
        )
    }
}

export default Preloader