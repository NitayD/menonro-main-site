import React from 'react'
import Preloader from '../Preloader/Preloader'
import Background from '../Bg'



const fav = process.browser ? window.document.getElementById('fav') : false
let currentStep = 1
const maxSteps = 20
let startDate = Date.now()
function changeFav(path) {
  if (!fav) return
  fav.setAttribute('href', `${path}_${currentStep}.png?${startDate + 500}`)
  currentStep++
  if (currentStep > maxSteps) currentStep = 1
  startDate += 500
  setTimeout((timestamp) => changeFav(path, timestamp), 500)
}

const Layout = ({ children }) => {
  changeFav('/static/images/favicons/fav')
  return (
    <>
      {/* <Preloader /> */}
      <Background/>
      <main>
        {children}
      </main>
      <style jsx>{`
        main {
          position: relative;
          z-index: 10;
        }
      `}</style>
    </>
)
}

export default Layout
