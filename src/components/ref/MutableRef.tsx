import { useState, useRef, useEffect } from 'react'
import Button from '@mui/material/Button';

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current)
            window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} -
            <Button variant="outlined" onClick={() => stopTimer()}>Stop Timer</Button>
        </div>
    )
}