import { useCallback, useEffect, useState } from "preact/hooks"
import { Tracker } from "../tracker/tracker"
import "./Home.scss"
import { Tracker as TrackerModel } from "../tracker/tracker-service"
import { Factory } from "../utils/factory"
import { events, features, state$, utils } from "./facade"
import { Subject, takeUntil } from "rxjs"

const SAVE_AFTER_IN_SECS = 10

const trackerService = Factory.getTrackerService()

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>([])
  const [timer, setTimer] = useState<number | undefined>(undefined)
  const [activeTracker, setActiveTracker] = useState<TrackerModel | undefined>(undefined)

  useEffect(() => {
    const destroy$ = new Subject<void>()

    state$.pipe(takeUntil(destroy$)).subscribe((s) => {
      setTrackers(s.trackers)
      setTimer(s.timer)
      setActiveTracker(s.activeTracker)
    })

    features.addTracker$.pipe(takeUntil(destroy$)).subscribe()
    features.deleteTracker$.pipe(takeUntil(destroy$)).subscribe()
    features.startTracker$.pipe(takeUntil(destroy$)).subscribe()

    return () => {
      destroy$.next()
      destroy$.complete()
    }
  }, [])

  useEffect(() => {
    let saveInterval = setInterval(() => {
      trackerService.save(trackers)
    }, SAVE_AFTER_IN_SECS * 1000)

    return () => {
      clearInterval(saveInterval)
    }
  }, [])

  const makeTrackerActive = (newTracker: TrackerModel | undefined, oldTracker: TrackerModel | undefined) => {
    const findAndReplace = (tracker: TrackerModel) => {
      const index = trackers.findIndex((t) => t.name === tracker.name)
      trackers.splice(index, 1, tracker)
      utils.setTrackers([...trackers])
    }

    oldTracker && findAndReplace(oldTracker)

    utils.setActiveTracker(newTracker)
  }

  const destroyTimer = () => {
    clearInterval(timer)
    utils.setTimer(undefined)
  }

  const onPauseTracker = useCallback(
    (pausedTracker: TrackerModel | undefined) => {
      destroyTimer()
      makeTrackerActive(undefined, pausedTracker)
    },
    [timer]
  )

  const onStartTracker = useCallback((tracker: TrackerModel) => {
    events.startTracker$.next(tracker)
  }, [])

  const onDeleteTracker = useCallback((tracker: TrackerModel) => {
    events.deleteTrackerClick$.next(tracker)
  }, [])

  return (
    <>
      <ul className="tracker-list">
        {trackers.map((t) => (
          <li key={t.name}>
            {
              <Tracker
                onStartTracker={onStartTracker}
                onPauseTracker={onPauseTracker}
                onDeleteTracker={onDeleteTracker}
                isActive={t.name === activeTracker?.name}
                tracker={t.name === activeTracker?.name ? activeTracker : t}
              />
            }
          </li>
        ))}
      </ul>
      <button data-test="add-tracker" onClick={() => events.addTrackerClick$.next()} class="add-tracker">
        Add
      </button>
    </>
  )
}
