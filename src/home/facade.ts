import { Observable, map, tap } from "rxjs";
import { Factory } from "../utils/factory";
import { Tracker } from "../tracker/tracker-service";
import { createState } from "../libs/state-utils";

const trackerService = Factory.getTrackerService();

let timer: number | undefined;
interface State {
  trackers: Tracker[];
  activeTracker: Tracker | undefined;
}

const state = createState<State>({
  trackers: trackerService.load(),
  activeTracker: undefined,
});

type GetState<T> = (old: T) => T;

const utils = {
  setTrackers(trackers: Tracker[] | GetState<Tracker[]>) {
    let newTrackers: Tracker[];
    if (typeof trackers === "function") {
      newTrackers = trackers(state.get().trackers);
    } else {
      newTrackers = trackers;
    }

    state.update({ trackers: newTrackers });
    trackerService.save(newTrackers);
  },
  setTimer(t: number | undefined) {
    timer = t;
  },
  setActiveTracker(tracker: State["activeTracker"] | GetState<State["activeTracker"]>) {
    let newActiveTracker: State["activeTracker"];
    if (typeof tracker === "function") {
      newActiveTracker = tracker(state.get().activeTracker);
    } else {
      newActiveTracker = tracker;
    }

    state.update({ activeTracker: newActiveTracker });
  },
};

const destroyTimer = () => {
  clearInterval(timer);
  utils.setTimer(undefined);
};

const makeTrackerActive = (newTracker: Tracker | undefined, oldTracker: Tracker | undefined) => {
  const findAndReplace = (tracker: Tracker) => {
    const { trackers } = state.get();
    const index = trackers.findIndex((t) => t.name === tracker.name);
    trackers.splice(index, 1, tracker);
    utils.setTrackers([...trackers]);
  };

  oldTracker && findAndReplace(oldTracker);

  utils.setActiveTracker(newTracker);
};

const createTimer = () => {
  const timer = setInterval(() => {
    utils.setActiveTracker((tracker) => {
      if (!tracker) return tracker;

      return { ...tracker, timeInSecs: tracker.timeInSecs + 1 };
    });
  }, 1000);

  utils.setTimer(timer);
};

const features = {
  addTracker(source: Observable<void>) {
    return source.pipe(
      map(trackerService.add),
      map((tracker) => [...state.get().trackers, tracker]),
      tap((trackers) => {
        utils.setTrackers(trackers);
      })
    );
  },
  deleteTracker(source: Observable<Tracker>) {
    return source.pipe(
      map((toBeDeletedTracker) => {
        const response = confirm(`Are you sure you want to delete tracker - ${toBeDeletedTracker.name} ?`);
        const filterOutTracker = (tracker: Tracker) => state.get().trackers.filter((t) => t.name !== tracker.name);
        return response ? filterOutTracker(toBeDeletedTracker) : state.get().trackers;
      }),
      tap((trackers) => {
        utils.setTrackers(trackers);
      })
    );
  },
  startTracker(source: Observable<Tracker>) {
    return source.pipe(
      tap((trackerToBeStarted) => {
        destroyTimer();
        makeTrackerActive(trackerToBeStarted, state.get().activeTracker);
        createTimer();
      })
    );
  },
  pauseTracker(source: Observable<Tracker>) {
    return source.pipe(
      tap((trackerToBePaused) => {
        destroyTimer();
        makeTrackerActive(undefined, trackerToBePaused);
      })
    );
  },
  editTracker(source: Observable<Tracker>) {
    return source.pipe(
      map(trackerService.edit),
      map((edittedTracker) => {
        return state.get().trackers.map((t) => {
          if (t.name === edittedTracker.name) return edittedTracker;
          return t;
        });
      }),
      tap((trackers) => {
        utils.setTrackers(trackers);
      })
    );
  },
  resetAllTrackers(source: Observable<void>) {
    return source.pipe(
      map(() => {
        const response = confirm("Reset all Timers?");
        if (response) return state.get().trackers.map((t) => ({ ...t, timeInSecs: 0 }));
        return state.get().trackers;
      }),
      tap((trackers) => {
        utils.setTrackers(trackers);
      })
    );
  },
  deleteAllTrackers(source: Observable<void>) {
    return source.pipe(
      map(() => {
        const response = confirm("Delete all Timers?");
        if (response) return [];
        return state.get().trackers;
      }),
      tap((trackers) => {
        utils.setTrackers(trackers);
      })
    );
  },
  autoSave(source: Observable<void>) {
    return source.pipe(
      tap(() => {
        makeTrackerActive(state.get().activeTracker, state.get().activeTracker);
      })
    );
  },
};

export { features, state };
