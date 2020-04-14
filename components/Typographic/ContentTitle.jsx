import React, { PureComponent } from 'react'

export default class ContentTitle extends PureComponent {
  render() {
    return (
      <>
        <h2 className="mt-5 mb-3">{this.props.children}</h2>
        <style jsx>{`
          h2 {
            position: relative;
            display: inline-flex;
            height: 80px;
            line-height: 80px;
            font-size: 40px;
            background-color: white;
            color: black;
            font-weight: 700;
            padding: 0 15px;
            @media screen and (max-width: 991px) {
              font-size: 26px;
            }
            @media screen and (max-width: 767px) {
              font-size: 20px;
            }
            @media screen and (max-width: 487px) {
              font-size: 18px;
              padding: 0px;
            }
            &:after, &:before {
              content: '';
              width: 0; 
              height: 0;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
            &:after {
              border-top: 40px solid transparent;
              border-bottom: 40px solid transparent;
              border-right: 26px solid white;
              right: 100%;
            }
            &:before {
              border-top: 40px solid transparent;
              border-bottom: 40px solid transparent;
              border-left: 26px solid white;
              left: 100%;
            }
          }  
        `}</style>
      </>
    )
  }
}
