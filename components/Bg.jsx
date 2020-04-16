import React, { Component } from 'react'

export default class Background extends Component {
  constructor() {
    super()
    this.state = {
      root: false
    }
  }
  componentDidMount() {
    this.setState({root: document.getElementById('bg')}, () => new Promise((res, rej) => {
      try {
        this.generateGrid()
        res()
      } catch (e) {
        rej(e)
      }
      
    }).then(()=>console.log('good')).catch((e)=>console.log(e)))
  }
  generateGrid() {
    const root = this.state.root
    const cv = root.getContext("2d");
    let w = root.width = window.innerWidth
    let h = root.height = window.innerHeight
    const hexadons = {}
    function polygon(x,y,ns,s) {
      this.shape = new Path2D();
      this.shape.moveTo(x+s*Math.cos(0), y+s*Math.sin(0));  
      for (let i=1;i<=ns;i++) {
        this.shape.lineTo(x+s*Math.cos(i*2*Math.PI/ns),y+s*Math.sin(i*2*Math.PI/ns));
      }
      return this.shape;
    }

    const draw = (timestamp) => {
      cv.clearRect(0, 0, w, h);
      cv.lineWidth = 1;
      const grid = {
        mesh: [],
        shapeSize: 60,
        shapeSides: 6,
        shapeApothem: 60*Math.cos(Math.PI/6),
        shapeSideLength: 60*Math.sin(Math.PI/6)
      };
      let mc = 0;
      for (let c=0;c<w/(grid.shapeSize+grid.shapeSideLength);c++) {
        for (let d = 0; d < (h+grid.shapeSize)/(grid.shapeSize*2); d++) {
          let ty = (d*grid.shapeSize*2)+((c % 2)*(grid.shapeSize));
          let tx = c*(grid.shapeSize + grid.shapeApothem );    
          grid.mesh.push( new polygon(tx,ty,6,grid.shapeSize) );
          if (!hexadons[`${c}-${d}`]) {
            const curnt = hexadons[`${c}-${d}`] = {
              time: Math.round(this.rRInt(3, 7) * 1000),
              duraction: true
            }
            curnt.currentValue = Math.abs(curnt.progress / (curnt.time / 50))
            curnt.start = Math.abs(timestamp - this.rRInt(curnt.time / 4, curnt.time / 3))
            curnt.progress = timestamp - curnt.start
          } else {
            const curnt = hexadons[`${c}-${d}`]
            curnt.start = curnt.start || timestamp
            curnt.progress = timestamp - (curnt.start || timestamp) 
            if (curnt.progress >= curnt.time || curnt.progress <= 0 - curnt.time) {
              curnt.duraction = !curnt.duraction
              curnt.start = 0
            }
            curnt.currentValue = curnt.duraction
              ? Math.abs((curnt.progress > curnt.time ? 0 : curnt.progress) / (curnt.time / 50))
              : 50 - ((curnt.progress > curnt.time ? 0 : curnt.progress) / (curnt.time / 50))
          }
          const curvl = hexadons[`${c}-${d}`].currentValue
          cv.fillStyle = `rgba( ${curvl}, ${curvl}, ${curvl}, 1 )`;
          // cv.strokeStyle = `rgba( ${255 - curvl}, ${255 - curvl}, ${255 - curvl}, 1 )`;
          cv.fill( grid.mesh[mc] );
          // cv.stroke( grid.mesh[mc] );
          mc++;
        }
      }
      window.requestAnimationFrame(draw)
    }
    const reset = function(){
      w = root.width = window.innerWidth;
      h = root.height = window.innerHeight;
      draw();
    }
    window.requestAnimationFrame(draw)
    window.addEventListener("resize",reset);

  }

  rRInt(min, max) {
    return (Math.random() * (max - min + 1)) + min;
  }

  

  render() {
    return (
      <canvas id="bg">
        <style jsx>{`
          canvas {
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            &:after {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background: rgba(0,0,0,.5);
              z-index: 2;
            }
          }
        `}</style>
      </canvas>
    )
  }
}