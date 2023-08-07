import { useCallback } from "preact/hooks"
import { Tracker as TrackerModel } from "./tracker-service"
import "./tracker.scss"

interface TrackerProps {
  tracker: TrackerModel
  onStartTracker?: (tracker: TrackerModel) => void
  onPauseTracker?: (tracker: TrackerModel) => void
  isActive: boolean
}

export function Tracker({
  tracker,
  onStartTracker,
  isActive,
  onPauseTracker,
}: TrackerProps) {
  const handlePause = useCallback(() => {
    onPauseTracker?.(tracker)
  }, [tracker, onPauseTracker])

  const handleStart = useCallback(() => {
    onStartTracker?.(tracker)
  }, [tracker, onStartTracker])

  return (
    <div className="tracker">
      <span>{tracker.name}</span>
      <span>{tracker.timeInSecs.toString()}</span>
      {!isActive && <button onClick={handleStart}>Start</button>}
      {isActive && <button onClick={handlePause}>Pause</button>}
    </div>
  )
}
