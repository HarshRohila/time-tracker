import { useCallback, useEffect, useState } from "preact/hooks"
import { Tracker } from "../tracker/tracker"
import "./Home.scss"
import { Tracker as TrackerModel } from "../tracker/tracker-service"
import { Factory } from "../utils/factory"

const SAVE_AFTER_IN_SECS = 10

const trackerService = Factory.getTrackerService()

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>(trackerService.load())

  const [timer, setTimer] = useState<number | undefined>(undefined)

  const [activeTracker, setActiveTracker] = useState<TrackerModel | undefined>(undefined)

  useEffect(() => {
    let saveInterval = setInterval(() => {
      trackerService.save(trackers)
    }, SAVE_AFTER_IN_SECS * 1000)

    return () => {
      clearInterval(saveInterval)
    }
  }, [])

  const handleAddTracker = useCallback(() => {
    const tracker = trackerService.add()
    setTrackers((t) => {
      const newTrackers = [...t, tracker]
      trackerService.save(newTrackers)
      return newTrackers
    })
  }, [])

  const makeTrackerActive = (newTracker: TrackerModel | undefined, oldTracker: TrackerModel | undefined) => {
    const findAndReplace = (tracker: TrackerModel) => {
      const index = trackers.findIndex((t) => t.name === tracker.name)
      trackers.splice(index, 1, tracker)
      setTrackers([...trackers])
    }

    oldTracker && findAndReplace(oldTracker)

    setActiveTracker(newTracker)
  }

  const destroyTimer = () => {
    clearInterval(timer)
    setTimer(undefined)
  }

  const createTimer = () => {
    const timer = setInterval(() => {
      setActiveTracker((tracker) => {
        if (!tracker) return tracker

        return { ...tracker, timeInSecs: tracker.timeInSecs + 1 }
      })
    }, 1000)

    setTimer(timer)
  }

  const onPauseTracker = useCallback(
    (pausedTracker: TrackerModel | undefined) => {
      destroyTimer()
      makeTrackerActive(undefined, pausedTracker)
    },
    [timer]
  )

  const onStartTracker = useCallback(
    (tracker: TrackerModel) => {
      destroyTimer()
      makeTrackerActive(tracker, activeTracker)
      createTimer()
    },
    [timer, activeTracker]
  )

  return (
    <>
      <ul className="tracker-list">
        {trackers.map((t) => (
          <li key={t.name}>
            {
              <Tracker
                onStartTracker={onStartTracker}
                onPauseTracker={onPauseTracker}
                isActive={t.name === activeTracker?.name}
                tracker={t.name === activeTracker?.name ? activeTracker : t}
              />
            }
          </li>
        ))}
      </ul>
      <button onClick={handleAddTracker} class="add-tracker">
        Add
      </button>
    </>
  )
}
