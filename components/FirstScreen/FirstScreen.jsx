import React, { useState } from 'react'
import Name from './Name'
import Link from 'next/link'
import HexadonMain from './HexagonMain'

const FirstScreen = () => {
  const [leftTop, leftTopSet] = useState()
  const [leftBottom, leftBottomSet] = useState()
  const [rightTop, rightTopSet] = useState()
  const [rightBottom, rightBottomSet] = useState()
  
  const [center, centerSet] = useState()

  let startIndex = 20
  let startTimer = 600
  const animate = (element) => {
    if (!element) return false
    const coords = element.getBoundingClientRect()
    const width = window.document.body.clientWidth
    const height = window.document.body.clientHeight
    element.style.opacity = 0
    element.style.transitionDuration = 0
    element.style.transform = `translate(${width / 2 - coords.x - coords.width / 2}px, ${height / 2 - coords.y  - coords.height / 2}px)`
    element.style.zIndex = ++startIndex
    setTimeout(() => {
      element.style.opacity = 100
      element.style.transitionDuration = `${0.3}s`
      element.style.transform = `translate(0px, 0px)`
    }, startTimer)
    startTimer += 100
  }
  animate(leftTop)
  animate(rightTop)
  animate(leftBottom)
  animate(rightBottom)
  animate(center)

  return (
    <>
      <section className="first_screen">
        <div className="first_screen__overlay" />
        <div className="first_screen__inner">
          <div className="container">

            <div className="row h0">
              <div className="col-12 col-md-3">
                <Link href="about">
                  <a>
                    <HexadonMain vAlign="center" setRef={leftTopSet} animated>
                      Обо мне
                    </HexadonMain>
                  </a>
                </Link>
              </div>
              <div className="col-12 col-md-3 offset-md-6">
                <Link href="cases">
                  <a>
                    <HexadonMain vAlign="center" setRef={leftBottomSet} animated>
                      Кейсы
                    </HexadonMain>
                  </a>
                </Link>
              </div>
            </div>

            <div className="row overlay">
              <div className="col-12 col-md-8 offset-md-2">
                <HexadonMain
                  size="large"
                  vAlign="center"
                  imageUrl="/static/me/main.jpg"
                  hover={false}
                  setRef={centerSet}>
                  <Name type="h1"/>
                </HexadonMain>
              </div>
            </div>
          
            <div className="row h0">
              <div className="col-12 col-md-3 toTop">
                <Link href="philosophy">
                  <a>
                    <HexadonMain vAlign="center" setRef={rightTopSet} animated>
                      Философия
                    </HexadonMain>
                  </a>
                </Link>
              </div>
              <div className="col-12 col-md-3 offset-md-6 toTop">
                <Link href="contacts">
                  <a>
                    <HexadonMain vAlign="center" setRef={rightBottomSet} animated>
                      Контакты
                    </HexadonMain>
                  </a>
                </Link>
              </div>
            </div>

          </div>
            
        </div>
      </section>
      <style jsx>{`
        .first_screen {
          // background: #000 url('/static/bgs/menonro-bg.jpg') no-repeat 50% 50%;
          //background-color: #212121;
          //background-size: cover;
          position: relative;
          min-height: 100vh;
          color: #fff;
          &__overlay {
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(33,33,33,.3);
          }
          &__inner {
            position: relative;
            min-height: 100vh;
            padding-top: 5vh;
            padding-bottom: 5vh;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .h0 { height: 0; position: relative; z-index: 20; }
        .overlay { position: relative; z-index: 19; }
        .toDown { transform: translateY(100%); }
        .toTop { transform: translateY(-100%); }
      `}</style>
    </>
  )
}

export default FirstScreen