export interface ITrackerService {
  add(): Tracker
}

export class TrackerService implements ITrackerService {
  add(): Tracker {
    let input
    do {
      input = prompt("Enter name of tracker")
    } while (!input)

    return { name: input }
  }
}

export interface Tracker {
  name: string
}
