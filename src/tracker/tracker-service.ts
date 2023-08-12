export interface ITrackerService {
  add(): Tracker
  edit(tracker: Tracker): Tracker
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

  edit(tracker: Tracker): Tracker {
    let input
    const trackerFns = new TrackerMethods(tracker)
    do {
      input = prompt("Enter New Name for tracker", trackerFns.getName())
    } while (!input)

    return { ...tracker, nickName: input }
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
  nickName?: string
}

export class TrackerMethods {
  constructor(private tracker: Tracker) {}

  getName() {
    return this.tracker.nickName || this.tracker.name
  }
}
