import React from 'react'
import {useStyle} from './hooks'
const Bar = ({i, w, h, scale}) => {
    const {useBarStyle} = useStyle(scale, w, h)
    return <div style = {useBarStyle(i)}>
    </div>
}
const BiBarSeparatorPresentational = ({onClick, w, h, scale}) => {
    console.log(scale)
    return <div onClick = {onClick}>
        {[0, 1].map(i => <Bar key = {`bibar_${i}`} i = {i} w = {w} h = {h} scale = {scale}/>)}
    </div>
}

export default BiBarSeparatorPresentational
