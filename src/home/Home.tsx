import { useCallback, useState } from "preact/hooks"
import { Tracker } from "../tracker/tracker"
import "./Home.scss"
import { Tracker as TrackerModel } from "../tracker/tracker-service"
import { Factory } from "../utils/factory"

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>([])

  const handleAddTracker = useCallback(() => {
    const tracker = Factory.getTrackerService().add()
    setTrackers((t) => [...t, tracker])
  }, [])

  return (
    <>
      <ul>
        {trackers.map((t) => (
          <li>{<Tracker tracker={t} />}</li>
        ))}
      </ul>
      <button onClick={handleAddTracker} class="add-tracker">
        Add
      </button>
    </>
  )
}
