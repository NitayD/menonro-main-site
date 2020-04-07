import React from 'react'

import Btn from './Btn'
import Icon from './Icon'

import MenuContext, { MenuContextProvider } from '../../contexts/MenuContext'

export default function MenuBtn() {
    return (
        <MenuContextProvider>
            <MenuContext.Consumer>
                {
                    ({ isOpen, toggleIsOpen }) => (
                        <Btn direction="right" onClick={toggleIsOpen}>
                            <Icon url={`/static/images/icons/${isOpen ? 'close' : 'menu'}.png`} size="m"/>
                        </Btn>
                    )
                }
            </MenuContext.Consumer>
        </MenuContextProvider>
    )
}
