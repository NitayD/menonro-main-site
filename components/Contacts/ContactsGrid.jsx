import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import HexagonContainer from '../FirstScreen/HexagonMain'

import contacts from './contacts.json'

export default class ContactsGrid extends Component {
    render() {
        const rows =  Array.from(new Array(Math.ceil(contacts.length / 4)))
        return (
            <Container>
                {
                    rows.map((item, loopCount) => (
                        <div className="row" key={`contacts-loop-${loopCount}`}>
                            {
                                contacts.filter((el, index) => index === index * (loopCount + 1)).map( (el, index) => (
                                    <ContactLink href={el.href} imgSrc={el.imgSrc} key={`contacts-loop-${loopCount}-${index}`}/>
                                ))
                            }
                        </div>
                    ))
                }
                <style jsx>{`
                    .row {
                        &:nth-child(even) {
                            top: 30px;
                            position: relative;
                        }
                    }
                `}</style>
            </Container>
        )
    }
}


const ContactLink = ({ href, imgSrc }) => {
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <a href={href} target="_blank">
                <HexagonContainer vAlign="center" animated>
                    <img src={imgSrc}/>
                </HexagonContainer>
            </a>
            <style jsx>{`
                img {
                    width: 80px;
                }
                div {
                    &:nth-child(even) {
                        transform: translateY(50%);
                    }
                }
            `}</style>
        </div>
    );
}

