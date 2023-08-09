const addTracker = (win: Cypress.AUTWindow, name: string) => {
  cy.stub(win, "prompt").returns(name)
  cy.getByTestId("add-tracker").click()
}

describe("The Home Page", () => {
  it("user can add a Tracker", () => {
    cy.visit("/")

    const clock = cy.clock()

    const startTracker = (millis: number) => {
      cy.getByTestId("start-tracker").click()
      clock.tick(millis)
    }

    cy.getByTestId("tracker").should("not.exist")

    cy.window().then((win) => {
      addTracker(win, "harsh tracker")
      cy.getByTestId("tracker").should("exist").log("Tracker Added")

      startTracker(10000)
      cy.getByTestId("tracker-time").should("have.text", "10").log("Tracker shows expected time")
    })
  })

  // it("user can start Tracker", () => {
  //   cy.window().then((win) => {
  //     const preloadedTrackers = [{ name: "firstTracker", timeInSecs: 100 }]
  //     win.localStorage.setItem("trackers", JSON.stringify(preloadedTrackers))

  //     cy.visit("/")

  //     addTracker(win, "secondTracker")
  //   })
  // })
})
