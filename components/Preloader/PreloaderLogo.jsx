import React from 'react'

const PreloaderLogo = () => {
    return (
        <>
        <svg width="660px" height="150px" viewBox="0 0 178.25 25.94">
            <g>
                <path id="MenonroLoading" className="fil0 str0" d="M24.86 25.57c-5.42,-1.13 -2.98,-10.38 -1.9,-18 -7.53,10.33 -11,19.27 -16.19,0.26l-2.18 10.76c0,2.66 0.4,5.71 -2.63,5.33 -3.28,-0.42 -0.6,-7.63 -0.01,-9.81l2.78 -10.23c0.95,-1.68 3.59,-0.73 4.33,0.21 1.09,1.4 0.97,5.28 4.51,10.8l10.67 -14.1c0.86,-1.19 2.71,0.39 2.82,1.29 0.06,0.53 -2.27,11.74 -1.84,18.87 0.21,3.53 6.23,1.83 6.61,-0.62 0.42,-2.72 1.4,-5.49 1.68,-10.07 0.17,-2.65 -0.38,-8.01 3.87,-7.28 9.39,1.63 15.42,-3.18 15.42,0.48 0,3.36 -11.69,2.88 -15.4,3.05l-0.37 5.16c1.82,0.2 7.29,-0.03 8.98,-0.69 3.34,-1.31 4,2.4 1.33,3.05 -3.14,0.75 -8.56,0.39 -10.77,0.98l-1.07 5.8c2.84,0 10.49,-0.77 13.14,-1.56 3.52,-1.06 5.23,4.47 6.43,2.66 1.71,-2.55 2.59,-13.36 2.59,-16.29 0,-2.43 3.16,-3.31 4.03,-0.5 1.56,5.04 4.71,10 8.06,14.13 0.83,-3.41 2.62,-13.01 2.62,-16.22 0,-3.37 4.66,-3.91 3.91,0.48 -1.29,6.63 -2.09,8.63 -3.01,15.75 -0.21,1.65 6.59,2.42 6.11,0.08 -1.43,-6.88 5.71,-16.9 12.53,-16.9 11.73,0 11.98,11.4 3.24,19.07 2.23,0.11 8.38,1 10.04,-2.09 0.82,-2.97 2.44,-10.87 2.44,-13.8 0,-2.43 3.16,-3.31 4.03,-0.5 1.56,5.04 4.71,10 8.06,14.13 0.83,-3.41 2.61,-13.01 2.61,-16.22 0,-3.37 4.66,-3.91 3.91,0.48 -1.44,7.41 -2,8.55 -3.1,16.5 -0.31,2.09 8.33,3.64 8.95,-0.67 0.51,-3.51 1.61,-6.74 1.02,-12.24 -3.32,0.9 -3.17,-1.65 -1.22,-2.6 11.75,-5.72 26.91,2.93 12.01,11.09 0.54,0.37 10.21,7.32 12.74,5.56 -3.37,-6.76 4.46,-18.71 11.91,-18.71 5.2,0 9.34,2.31 9.34,8.08 0,5.61 -6.64,13.42 -12.62,14.45 -1.9,-0.37 -0.7,-3.42 1.42,-3.88 5.81,-2.03 12.33,-15.71 1.86,-15.71 -5.43,0 -12.81,13.29 -6.76,16.25 1.34,0.54 3.2,3.25 0.5,3.6 -15.63,1.4 -18.27,-6.91 -22.02,-8.07 -4.71,0.15 -3.18,-3.12 -1.17,-3.19 1.69,-0.06 11.77,-4.48 5.23,-7.65 -2.28,-1.1 -5.59,-0.72 -8.05,-0.15 2.23,5.15 -2.51,12.65 0.24,17.23 -1.42,2.2 -8.71,0.96 -15.63,1.36 -1.93,0.11 -2.64,-1.85 -3.85,-3.76l-6.85 -10.57 -2.01 13.46c-0.77,1.77 -17.1,0.66 -19.54,1.08 -2.56,-0.13 -1.12,-3.18 -0.08,-3.28 6.83,-1.33 14.34,-16.31 3.35,-16.31 -5.43,0 -12.81,13.29 -6.76,16.25 2.3,1.49 0.27,2.98 -2.15,2.88 -18,-2.77 -8.62,7.92 -22.78,-14.08l-2.01 13.46c-1.19,4.15 -8.42,-1.51 -8.78,-1.45l-24.57 3.13z"/>
            </g>
        </svg>
        <style jsx>{`
            .str0 {stroke:black;stroke-width:0.74;stroke-miterlimit:22.9256}
            .fil0 {fill:white;fill-rule:nonzero}
            #MenonroLoading {
                stroke-dasharray: 950;
                stroke-dashoffset: 950;
                stroke: rgba(255,255,255,1);
                fill: rgba(0,0,0,0);
                animation: loading 2s ease-in forwards;
                animation-iteration-count: infinite;
                transform: scale(.99);
                transform-origin: center center;
            }
            @keyframes loading {
                25% {
                    transform: scale(1);
                }
                50% {
                    fill: rgba(255,255,255,1);
                    stroke-dashoffset: 0;
                    stroke: rgba(0,0,0,0);
                    transform: scale(.99);
                }
                75% {
                    transform: scale(1);
                }
            }
            @media screen and (max-width: 768px) {
                svg {
                    width: 440px
                }
            }
            @media screen and (max-width: 520px) {
                svg {
                    width: 220px
                }
            }
        `}
        </style>
        </>
    )
}

export default PreloaderLogo