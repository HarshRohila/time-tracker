import { ITrackerService, TrackerService } from "../tracker/tracker-service"

export const Factory = {
  getTrackerService(): ITrackerService {
    return new TrackerService()
  },
}
