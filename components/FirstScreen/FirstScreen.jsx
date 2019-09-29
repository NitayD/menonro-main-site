import React from 'react'
import Name from './Name'

const FirstScreen = () => {
  return (
    <>
      <div className="first_screen">
        <div className="first_screen__overlay" />
        <div className="first_screen__inner">
          <Name type="h1"/>
        </div>
      </div>
      <style jsx>{`
        .first_screen {
          background: #000 url('/static/bgs/menonro-bg.jpg') no-repeat 50% 50%;
          background-size: cover;
          position: relative;
          height: 100vh;
          color: #fff;
        }
        .first_screen__overlay {
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,.3);
        }
        .first_screen__inner {
          position: relative;
          height: 100%;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default FirstScreen