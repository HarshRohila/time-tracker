import { useCallback, useState } from "preact/hooks"
import { Tracker } from "../tracker/tracker"
import "./Home.scss"
import { Tracker as TrackerModel } from "../tracker/tracker-service"
import { Factory } from "../utils/factory"

const trackerService = Factory.getTrackerService()

export function Home() {
  const [trackers, setTrackers] = useState<TrackerModel[]>(
    trackerService.load()
  )

  const handleAddTracker = useCallback(() => {
    const tracker = trackerService.add()
    setTrackers((t) => {
      const newTrackers = [...t, tracker]
      trackerService.save(newTrackers)
      return newTrackers
    })
  }, [])

  return (
    <>
      <ul className="tracker-list">
        {trackers.map((t) => (
          <li key={t.name}>{<Tracker tracker={t} />}</li>
        ))}
      </ul>
      <button onClick={handleAddTracker} class="add-tracker">
        Add
      </button>
    </>
  )
}
