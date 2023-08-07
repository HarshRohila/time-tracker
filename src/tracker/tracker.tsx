import { useCallback } from "preact/hooks"
import { Tracker as TrackerModel } from "./tracker-service"
import "./tracker.scss"
import { ActionBtn } from "../ui/action-btn/action-btn"

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

  return (
    <div className="tracker">
      <span>{tracker.name}</span>
      <span>{tracker.timeInSecs.toString()}</span>
      {!isActive && (
        <button className="primary" onClick={handleStart}>
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
