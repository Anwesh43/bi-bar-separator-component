import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(delay, () => {
                    currScale += scGap
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                })
            }
        }
    }
}