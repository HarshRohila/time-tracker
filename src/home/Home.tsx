import { useEffect, useState } from "preact/hooks";
import { Tracker } from "../tracker/tracker";
import "./Home.scss";
import { Tracker as TrackerModel } from "../tracker/tracker-service";
import { features, state$ } from "./facade";
import { useEvent, useJustSubscribe, useSubscribe, useVoidEvent } from "../libs/state-utils/react/component-util";

const SAVE_AFTER_IN_SECS = 10;

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>([]);
  const [activeTracker, setActiveTracker] = useState<TrackerModel | undefined>(undefined);

  useSubscribe(state$, (s) => {
    setTrackers(s.trackers);
    setActiveTracker(s.activeTracker);
  });

  const [addTrackerClick$, addTrackerClickHandler] = useVoidEvent();
  const [resetAllTrackers$, resetAllTrackersHandler] = useVoidEvent();
  const [deleteAllTrackers$, deleteAllTrackersHandler] = useVoidEvent();

  const [startTracker$, startTrackerHandler] = useEvent<TrackerModel>();
  const [pauseTracker$, pauseTrackerHandler] = useEvent<TrackerModel>();
  const [deleteTrackerClick$, deleteTrackerClickHandler] = useEvent<TrackerModel>();
  const [editTracker$, editTrackerHandler] = useEvent<TrackerModel>();
  const [autoSave$, autoSaveHandler] = useVoidEvent();

  useJustSubscribe(
    features.addTracker(addTrackerClick$),
    features.deleteTracker(deleteTrackerClick$),
    features.startTracker(startTracker$),
    features.pauseTracker(pauseTracker$),
    features.resetAllTrackers(resetAllTrackers$),
    features.deleteAllTrackers(deleteAllTrackers$),
    features.editTracker(editTracker$),
    features.autoSave(autoSave$)
  );

  useEffect(() => {
    let saveInterval = setInterval(autoSaveHandler, SAVE_AFTER_IN_SECS * 1000);

    return () => {
      clearInterval(saveInterval);
    };
  }, []);

  return (
    <>
      <ul className="tracker-list">
        {trackers.map((t) => (
          <li key={t.name}>
            {
              <Tracker
                onStartTracker={startTrackerHandler}
                onPauseTracker={pauseTrackerHandler}
                onDeleteTracker={deleteTrackerClickHandler}
                onEditTracker={editTrackerHandler}
                isActive={t.name === activeTracker?.name}
                tracker={t.name === activeTracker?.name ? activeTracker : t}
              />
            }
          </li>
        ))}
      </ul>
      <div className="action-container">
        <button data-test="add-tracker" onClick={addTrackerClickHandler} class="add-tracker">
          Add
        </button>
        <button data-test="reset-all-timers" onClick={resetAllTrackersHandler} class="add-tracker">
          Reset all Timers
        </button>
        <button data-test="delete-all-timers" onClick={deleteAllTrackersHandler} class="add-tracker">
          Delete all Timers
        </button>
      </div>
    </>
  );
}
