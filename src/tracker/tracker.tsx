import { useCallback, useState } from "preact/hooks"
import { Tracker as TrackerModel } from "./tracker-service"
import "./tracker.scss"

interface TrackerProps {
  tracker: TrackerModel
}

export function Tracker({ tracker }: TrackerProps) {
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState<number | undefined>(undefined)

  const handleStart = useCallback(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    setTimer(timer)
  }, [])

  const handlePause = useCallback(() => {
    clearInterval(timer)
    setTimer(undefined)
  }, [timer])

  return (
    <div className="tracker">
      <span>{tracker.name}</span>
      <span>{seconds}</span>
      {!timer && <button onClick={handleStart}>Start</button>}
      {!!timer && <button onClick={handlePause}>Pause</button>}
    </div>
  )
}
