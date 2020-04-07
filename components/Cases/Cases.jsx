import React, { Component, Fragment } from 'react'

import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Hexadone from '../FirstScreen/HexagonMain'

import ContentTitle from '../Typographic/ContentTitle'
import BackBtn from '../Typographic/BackBtn'
import MenuBtn from '../Typographic/MenuBtn'

import cases from './cases.json'

class Cases extends Component {
  state = { cases }

  render() {
    const gridedCasesThree = this.state.cases.filter( (caseItem, index) => (index % 5) < 3)
    const gridedCasesTwo = this.state.cases.filter( (caseItem, index) => (index % 5) > 2)
    const iteribleArr = Array.apply(null, Array(Math.ceil(gridedCasesThree.length / 3))).map(()=>{})
    return (
      <>
        <Container>
          <Row className="justify-content-center">
            <Col sm="auto">
              <div className="mt-5 mb-3">
                <BackBtn/>
              </div>
            </Col>
            <Col sm="auto">
              <ContentTitle>Выполненные проекты</ContentTitle>
            </Col>
            <Col sm="auto">
              <div className="mt-5 mb-3">
                <MenuBtn/>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          {
            iteribleArr.map((item,ind) => 
              <Fragment key={`cases-row-${ind}`}>
                <Row className="justify-content-center mt-4">
                  { !!gridedCasesThree[((ind + 1) * 3) - 3] && <Case data={gridedCasesThree[((ind + 1) * 3) - 3]}/> }
                  { !!gridedCasesThree[((ind + 1) * 3) - 2] ? <Case data={gridedCasesThree[((ind + 1) * 3) - 2]}/> : <Col lg={4}/> }
                  { !!gridedCasesThree[((ind + 1) * 3) - 1] ? <Case data={gridedCasesThree[((ind + 1) * 3) - 1]}/> : <Col lg={4}/> }
                </Row>
                { !!gridedCasesTwo[((ind + 1) * 2) - 2] && <Row className="justify-content-center mt-4">
                  { !!gridedCasesTwo[((ind + 1) * 2) - 2] && <Case data={gridedCasesTwo[((ind + 1) * 2) - 2]}/> }
                  { !!gridedCasesTwo[((ind + 1) * 2) - 1] ? <Case data={gridedCasesTwo[((ind + 1) * 2) - 1]}/> : <Col lg={4}/> }
                </Row> }
              </Fragment>
            )
          }
        </Container>
        <style jsx>{`
          span {
            text-align: center;
            display: block;
            width: 100%;
          }
        `}</style>
      </>
    )
  }
}

function Case ({ data }) {

  return (
    <Col lg={4}>
      <Link href={data.slug}><a>
        <Hexadone imageUrl={data.imageUrl} hover>
          <h3>{ data.name }</h3>
          <p>{ data.shortDescription }</p>
        </Hexadone>
      </a></Link>
      <style jsx>{`
        h3 {

        } 
        p {
          padding-top: 15px;
          font-size: calc(1rem + 3px);
        } 
      `}</style>
    </Col>
  )
}

export default Cases
