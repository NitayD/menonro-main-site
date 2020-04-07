import React from 'react'

import Router from 'next/router'


import Btn from './Btn'
import Icon from './Icon'

export default function BackBtn() {
    return (
        <Btn direction="left" onClick={Router.back}>
            <Icon url="/static/images/icons/left.png" size="m"/>
        </Btn>
    )
}
