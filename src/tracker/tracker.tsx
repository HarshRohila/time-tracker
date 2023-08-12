import { useCallback } from "preact/hooks"
import { Tracker as TrackerModel } from "./tracker-service"
import "./tracker.scss"
import { ActionBtn } from "../ui/action-btn/action-btn"
import { secondsToHHMMSS } from "../utils/time-formatter"

interface TrackerProps {
  tracker: TrackerModel
  onStartTracker?: (tracker: TrackerModel) => void
  onPauseTracker?: (tracker: TrackerModel) => void
  onDeleteTracker?: (tracker: TrackerModel) => void
  isActive: boolean
}

export function Tracker({ tracker, onStartTracker, isActive, onPauseTracker, onDeleteTracker }: TrackerProps) {
  const handlePause = useCallback(() => {
    onPauseTracker?.(tracker)
  }, [tracker, onPauseTracker])

  const handleStart = useCallback(() => {
    onStartTracker?.(tracker)
  }, [tracker, onStartTracker])

  const handleDelete = useCallback(() => {
    onDeleteTracker?.(tracker)
  }, [tracker, onDeleteTracker])

  const time = secondsToHHMMSS(tracker.timeInSecs)

  return (
    <div className="tracker" data-test="tracker">
      <span>{tracker.name}</span>
      <span data-test="tracker-time">{time}</span>
      {!isActive && (
        <button data-test="start-tracker" className="primary" onClick={handleStart}>
          Start
        </button>
      )}
      {isActive && (
        <button className="primary" onClick={handlePause}>
          Pause
        </button>
      )}
      <div className="actions">
        <ActionBtn iconName="trash" onBtnClick={handleDelete} title="Delete" />
      </div>
    </div>
  )
}
