export interface ITrackerService {
  add(): Tracker
  save(trackers: Tracker[]): void
  load(): Tracker[]
}

export class TrackerService implements ITrackerService {
  private static storageKey = "trackers"

  add(): Tracker {
    let input
    do {
      input = prompt("Enter name of tracker")
    } while (!input)

    return { name: input, timeInSecs: 0 }
  }

  save(trackers: Tracker[]): void {
    localStorage.setItem(TrackerService.storageKey, JSON.stringify(trackers))
  }

  load(): Tracker[] {
    const trackers = localStorage.getItem(TrackerService.storageKey)
    return trackers ? JSON.parse(trackers) : []
  }
}

export interface Tracker {
  name: string
  timeInSecs: number
}
