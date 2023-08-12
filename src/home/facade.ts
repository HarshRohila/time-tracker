import { BehaviorSubject, Subject, map, tap } from "rxjs"
import { Factory } from "../utils/factory"
import { Tracker } from "../tracker/tracker-service"

const trackerService = Factory.getTrackerService()

let timer: number | undefined
interface State {
  trackers: Tracker[]
  activeTracker: Tracker | undefined
}

const state$ = new BehaviorSubject<State>({
  trackers: trackerService.load(),
  activeTracker: undefined,
})

const events = {
  addTrackerClick$: new Subject<void>(),
  deleteTrackerClick$: new Subject<Tracker>(),
  editTracker$: new Subject<Tracker>(),
  startTracker$: new Subject<Tracker>(),
  pauseTracker$: new Subject<Tracker | undefined>(),
  resetAllTrackers$: new Subject<void>(),
}

type GetState<T> = (old: T) => T

const utils = {
  setTrackers(trackers: Tracker[] | GetState<Tracker[]>) {
    let newTrackers: Tracker[]
    if (typeof trackers === "function") {
      newTrackers = trackers(state$.value.trackers)
    } else {
      newTrackers = trackers
    }

    state$.next({ ...state$.value, trackers: newTrackers })
    trackerService.save(newTrackers)
  },
  setTimer(t: number | undefined) {
    timer = t
  },
  setActiveTracker(tracker: State["activeTracker"] | GetState<State["activeTracker"]>) {
    let newActiveTracker: State["activeTracker"]
    if (typeof tracker === "function") {
      newActiveTracker = tracker(state$.value.activeTracker)
    } else {
      newActiveTracker = tracker
    }

    state$.next({ ...state$.value, activeTracker: newActiveTracker })
  },
}

const destroyTimer = () => {
  clearInterval(timer)
  utils.setTimer(undefined)
}

const makeTrackerActive = (newTracker: Tracker | undefined, oldTracker: Tracker | undefined) => {
  const findAndReplace = (tracker: Tracker) => {
    const { trackers } = state$.value
    const index = trackers.findIndex((t) => t.name === tracker.name)
    trackers.splice(index, 1, tracker)
    utils.setTrackers([...trackers])
  }

  oldTracker && findAndReplace(oldTracker)

  utils.setActiveTracker(newTracker)
}

const createTimer = () => {
  const timer = setInterval(() => {
    utils.setActiveTracker((tracker) => {
      if (!tracker) return tracker

      return { ...tracker, timeInSecs: tracker.timeInSecs + 1 }
    })
  }, 1000)

  utils.setTimer(timer)
}

const features = {
  addTracker$: events.addTrackerClick$.pipe(
    map(trackerService.add),
    map((tracker) => [...state$.value.trackers, tracker]),
    tap((trackers) => {
      utils.setTrackers(trackers)
    })
  ),
  deleteTracker$: events.deleteTrackerClick$.pipe(
    map((toBeDeletedTracker) => {
      const response = confirm(`Are you sure you want to delete tracker - ${toBeDeletedTracker.name} ?`)
      const filterOutTracker = (tracker: Tracker) => state$.value.trackers.filter((t) => t.name !== tracker.name)
      return response ? filterOutTracker(toBeDeletedTracker) : state$.value.trackers
    }),
    tap((trackers) => {
      utils.setTrackers(trackers)
    })
  ),
  startTracker$: events.startTracker$.pipe(
    tap((trackerToBeStarted) => {
      destroyTimer()
      makeTrackerActive(trackerToBeStarted, state$.value.activeTracker)
      createTimer()
    })
  ),
  pauseTracker$: events.pauseTracker$.pipe(
    tap((trackerToBePaused) => {
      destroyTimer()
      makeTrackerActive(undefined, trackerToBePaused)
    })
  ),
  editTracker$: events.editTracker$.pipe(
    map(trackerService.edit),
    map((edittedTracker) => {
      return state$.value.trackers.map((t) => {
        if (t.name === edittedTracker.name) return edittedTracker
        return t
      })
    }),
    tap((trackers) => {
      utils.setTrackers(trackers)
    })
  ),
  resetAllTrackers$: events.resetAllTrackers$.pipe(
    map(() => {
      const response = confirm("Reset all Timers?")
      if (response) return state$.value.trackers.map((t) => ({ ...t, timeInSecs: 0 }))
      return state$.value.trackers
    }),
    tap((trackers) => {
      utils.setTrackers(trackers)
    })
  ),
}

export { features, events, state$ }
