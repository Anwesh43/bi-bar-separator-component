import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BiBarSeparatorPresentational from './BiBarSeparatorPresentational'

const BiBarSeparatorComponent = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02 / 2, 20)
    return <BiBarSeparatorPresentational scale = {scale} onClick = {start} w = {w} h = {h}>
    </BiBarSeparatorPresentational>
}

export default BiBarSeparatorComponent
