import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                console.log("coming here")
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {w, h}
}

export const useStyle = (scale, w, h) => {
    const sf = sinify(scale)
    const barSize = Math.min(w, h) / 6
    const position = 'absolute'
    const fixedH = h / 2
    const fixedW = w / 2
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const maxH = (h / 2 - barSize / 2)
    const y = maxH * (1 - sf1)
    const background = '#4CAF50'
    const maxW = w / 2 - barSize
    return {
        useBarStyle(i) {
            const si = 2 * i - 1
            const x = fixedW + barSize * (i - 1) + maxW * si * sf2
            const left = `${x}px`
            const top = `${y}px`
            const width = `${barSize}px`
            const height = `${barSize}px`
            return {position, left, top, width, height, background}
        }
    }
}
