import { BehaviorSubject, Subject, map, tap } from "rxjs"
import { Factory } from "../utils/factory"
import { Tracker } from "../tracker/tracker-service"

const trackerService = Factory.getTrackerService()

interface State {
  trackers: Tracker[]
}

export const state$ = new BehaviorSubject<State>({ trackers: trackerService.load() })

export const events = {
  addTrackerClick$: new Subject<void>(),
  deleteTrackerClick$: new Subject<Tracker>(),
}

type SetTracker = (old: Tracker[]) => Tracker[]

export const utils = {
  setTrackers(trackers: Tracker[] | SetTracker) {
    let newTrackers: Tracker[]
    if (typeof trackers === "function") {
      newTrackers = trackers(state$.value.trackers)
    } else {
      newTrackers = trackers
    }

    state$.next({ ...state$.value, trackers: newTrackers })
    trackerService.save(newTrackers)
  },
}

export const features = {
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
}
