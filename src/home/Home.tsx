import { useEffect, useState } from "preact/hooks"
import { Tracker } from "../tracker/tracker"
import "./Home.scss"
import { Tracker as TrackerModel } from "../tracker/tracker-service"
import { events, features, state$ } from "./facade"
import { Subject } from "rxjs"
import { untilDestroy } from "../utils/subscribeTill"

const SAVE_AFTER_IN_SECS = 10

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>([])
  const [activeTracker, setActiveTracker] = useState<TrackerModel | undefined>(undefined)

  useEffect(() => {
    const destroy$ = new Subject<void>()
    const { subscribe, stream } = untilDestroy(destroy$)

    stream(state$).subscribe((s) => {
      setTrackers(s.trackers)
      setActiveTracker(s.activeTracker)
    })

    subscribe(features.addTracker$)
    subscribe(features.deleteTracker$)
    subscribe(features.startTracker$)
    subscribe(features.pauseTracker$)
    subscribe(features.editTracker$)
    subscribe(features.resetAllTrackers$)
    subscribe(features.deleteAllTrackers$)
    subscribe(features.autoSave$)

    return () => {
      destroy$.next()
      destroy$.complete()
    }
  }, [])

  useEffect(() => {
    let saveInterval = setInterval(() => {
      events.autoSave$.next()
    }, SAVE_AFTER_IN_SECS * 1000)

    return () => {
      clearInterval(saveInterval)
    }
  }, [])

  return (
    <>
      <ul className="tracker-list">
        {trackers.map((t) => (
          <li key={t.name}>
            {
              <Tracker
                onStartTracker={(t) => events.startTracker$.next(t)}
                onPauseTracker={(t) => events.pauseTracker$.next(t)}
                onDeleteTracker={(t) => events.deleteTrackerClick$.next(t)}
                isActive={t.name === activeTracker?.name}
                tracker={t.name === activeTracker?.name ? activeTracker : t}
              />
            }
          </li>
        ))}
      </ul>
      <div className="action-container">
        <button data-test="add-tracker" onClick={() => events.addTrackerClick$.next()} class="add-tracker">
          Add
        </button>
        <button data-test="reset-all-timers" onClick={() => events.resetAllTrackers$.next()} class="add-tracker">
          Reset all Timers
        </button>
        <button data-test="delete-all-timers" onClick={() => events.deleteAllTrackers$.next()} class="add-tracker">
          Delete all Timers
        </button>
      </div>
    </>
  )
}
