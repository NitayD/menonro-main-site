import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutData from './about.json'

export default class AboutGrid extends Component {
    render() {
        return (
            <Container>
                <ul>
                    {
                        aboutData.map(data => (
                            <AboutItem {...data} />
                        ))
                    }
                </ul>
                <style jsx>{`
                    ul {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                `}</style>
            </Container>
        )
    }
}


const AboutItem = ({ data, title, text }) => {
    return (
        <li>
            <small className="time">{data}</small>
            <h4 className="title">{title}</h4>
            <p className="text">{text}</p>
            <style jsx>
                {`
                    li {
                        display: block;
                        position: relative;
                        width: 50%;
                        padding: 15px 30px;
                        transition: transform .3s ease-out;
                        &:first-child:before {
                            height: 100%;
                            top: calc(20px + .5rem);
                            height: calc(100% - 20px);
                        }
                        &:last-child:before {
                            border-bottom-left-radius: 15px 20px;
                            border-bottom-right-radius: 15px 20px;
                        }
                        &:nth-child(even) {
                            margin-left: auto;
                            &:after, &:before {
                                right: auto;
                                left: 0;
                                transform: translateX(-50%);
                            }
                        }
                        &:nth-child(odd) {
                            text-align: right;
                        }
                        &:after, &:before {
                            content: '';
                            position: absolute;
                            left: auto;
                            right: 0;
                            transform: translateX(50%);
                        }
                        &:after {
                            width: 20px;
                            border-radius: 50%;
                            border: 5px solid #c3c3c3;
                            height: 20px;
                            top: calc(15px + 0.55rem);
                            background-color: #212121;
                            z-index: 12;
                            transition: background-color .3s ease-out,
                                border-width .3s ease-out;
                        }
                        &:before {
                            width: 5px;
                            height: 100%;
                            top: 0;
                            background-color: #c3c3c3;
                            z-index: 11;
                        }
                        &:hover:after {
                            background-color: #cecece;
                            border-width: 2px;
                        }
                        &:hover:nth-child(odd) > * {
                            transform: translateX(-15px);
                        }
                        &:hover:nth-child(even) > * {
                            transform: translateX(15px);
                        }
                        > * {
                            display: block;
                            transition: transform .3s ease-out;
                        }
                    }
                    .time {
                        font-size: 1.5rem;
                    }
                    .title {
                        font-size: 1.75rem;
                    }
                    .text {
                        font-size: 1.15rem;
                        font-family: sans-serif;
                    }
                `}
            </style>
        </li>
    );
}

