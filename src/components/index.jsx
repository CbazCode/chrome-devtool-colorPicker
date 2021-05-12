import React, { useState } from 'react'
import ColorPicker from './ColorPicker/ColorPicker';

function Main() {
    const [color, setColor] = useState({color:'#e1eb54'})

    const onChangeColor = (clr) => {
        console.log('hola')
        setColor({color: clr.hex})
    }
    return (
        <ColorPicker
          color={color}
          onChangeColor={(color)=> {onChangeColor(color)}}
        />
      )
}

export default Main
