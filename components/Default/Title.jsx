import React from 'react'

const Title = ({ text, type, subtitle = false }) => {
    switch (type) {
        case 'section':
            if (!subtitle) return <>
                <h2 className='title text-center'>{text}</h2>
                <style jsx>{`
                    .title {
                        font-size: calc(1.75rem + 12px);
                    }
                    @media screen and (max-width: 768px) {
                        .title {
                            font-size: calc(1.25rem + 10px);
                        }
                    }
                `}</style>
            </>
            else return <>
                <h3 className='subtitle text-center'>{text}</h3>
                <style jsx>{`
                    .subtitle {
                        font-size: calc(1.25rem + 8px);
                    }
                    @media screen and (max-width: 768px) {
                        .subtitle {
                            font-size: calc(0.75rem + 6px);
                        }
                    }
                `}</style>
            </>
        default: return <></>
    }
}

export default Title