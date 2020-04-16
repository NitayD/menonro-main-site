import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import HexagonContainer from '../FirstScreen/HexagonMain'

import contacts from './contacts.json'

export default class ContactsGrid extends Component {
    render() {
        return (
            <Container>
                <Row noGutters>
                    {
                        contacts.map( (el, index) => (
                            <ContactLink href={el.href} imgSrc={el.imgSrc} key={`contacts-loop-${index}`}/>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}


const ContactLink = ({ href, imgSrc }) => {
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <a href={href} target="_blank">
                <HexagonContainer vAlign="center" animated hover>
                    <img src={imgSrc}/>
                </HexagonContainer>
            </a>
            <style jsx>{`
                img {
                    width: 75px;
                }
                div {
                    margin-top: 30px;
                    &:nth-child(even) {
                        margin-top: 60px;
                        transform: translateY(50%);
                    }
                }
            `}</style>
        </div>
    );
}

