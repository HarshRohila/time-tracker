/// <reference types="cypress" />

const addTracker = (win: Cypress.AUTWindow, name: string) => {
  cy.stub(win, "prompt").returns(name)
  cy.getByTestId("add-tracker").click()
}

const getTracker = (index = 0) => {
  return cy.getByTestId("tracker").eq(index)
}

const startTracker = (clock: Cypress.Chainable<Cypress.Clock>, millis: number, index = 0) => {
  cy.getByTestId("start-tracker").eq(index).click()
  clock.tick(millis)
}

const assertTrackerTime = (matchingText: string, index = 0) => {
  return cy.getByTestId("tracker-time").eq(index).should("have.text", matchingText)
}

const assertTrackerName = (matchingText: string, index = 0) => {
  return cy.getByTestId("tracker-name").eq(index).should("have.text", matchingText)
}

const preloadTrackers = (win: Cypress.AUTWindow, trackers: any[]) => {
  win.localStorage.setItem("trackers", JSON.stringify(trackers))
}

const getFormattedTime = (time: string) => {
  return "00:00:" + time.padStart(2, "0")
}

describe("The Home Page", () => {
  it("Adding tracker and starting it", () => {
    cy.visit("/")

    cy.getByTestId("tracker").should("not.exist")

    cy.window().then((win) => {
      addTracker(win, "harsh tracker")
      cy.getByTestId("tracker").should("exist").log("Tracker Added")

      const clock = cy.clock()
      startTracker(clock, 10000)
      assertTrackerTime(getFormattedTime("10")).log("Tracker shows expected time")
    })
  })

  it("Second tracker start will pause other tracker", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [{ name: "firstTracker", timeInSecs: 5 }])

      cy.visit("/").then(() => {
        addTracker(win, "secondTracker")

        const clock = cy.clock()

        startTracker(clock, 4000, 1)
        startTracker(clock, 5000, 0)

        assertTrackerTime(getFormattedTime("10"), 0).log("First Tracker shows expected time")
        assertTrackerTime(getFormattedTime("4"), 1).log("Second Tracker time is paused after first tracker is Started")
      })
    })
  })

  it("Delete tracker works", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [
        { name: "firstTracker", timeInSecs: 5 },
        { name: "secondTracker", timeInSecs: 3 },
      ])

      cy.on("window:confirm", (message) => {
        return true
      })

      cy.visit("/").then(() => {
        getTracker(1).should("exist").log("Tracker exist before delete")
        getTracker(1).find('[data-test="delete"]').click()
        getTracker(1).should("not.exist").log("Tracker Deleted after Delete click")
      })
    })
  })

  it("User can edit tracker name", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [
        { name: "firstTracker", timeInSecs: 5 },
        { name: "secondTracker", timeInSecs: 3 },
      ])

      cy.visit("/").then(() => {
        cy.stub(win, "prompt").returns("edittedTracker")
        getTracker(0).find('[data-test="edit"]').click()
        assertTrackerName("edittedTracker", 0)
      })
    })
  })

  it("User can reset all timers", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [
        { name: "firstTracker", timeInSecs: 5 },
        { name: "secondTracker", timeInSecs: 3 },
      ])

      cy.visit("/").then(() => {
        cy.on("window:confirm", (message) => {
          return true
        })
        cy.getByTestId("reset-all-timers").click()

        assertTrackerTime(getFormattedTime("0"), 0)
        assertTrackerTime(getFormattedTime("0"), 1)
      })
    })
  })

  it("User can Delete all timers", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [
        { name: "firstTracker", timeInSecs: 5 },
        { name: "secondTracker", timeInSecs: 3 },
      ])

      cy.visit("/").then(() => {
        cy.on("window:confirm", (message) => {
          return true
        })
        cy.getByTestId("delete-all-timers").click()

        cy.getByTestId("tracker").should("not.exist").log("All Trackers Deleted")
      })
    })
  })

  it("Timers auto save after 10 seconds", () => {
    cy.window().then((win) => {
      preloadTrackers(win, [
        { name: "firstTracker", timeInSecs: 5 },
        { name: "secondTracker", timeInSecs: 3 },
      ])

      const clock = cy.clock()

      cy.visit("/").then(() => {
        clock.tick(100)
        cy.getByTestId("start-tracker").should("exist").log("Trackers loaded")

        startTracker(clock, 11000, 1)

        cy.reload()
        clock.tick(100)

        cy.getByTestId("start-tracker").should("exist").log("Trackers loaded")

        cy.window().then(() => {
          assertTrackerTime(getFormattedTime("12"), 1).log("Timer persisted after page reload")
        })
      })
    })
  })
})
