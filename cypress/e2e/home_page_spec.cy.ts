describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.on("window:prompt", (text) => {
      expect(text).to.equal("Enter name of tracker")
      cy.on("window:confirm", () => true) // Accept the prompt
      return "John Doe" // Enter your desired text
    })

    cy.visit("/") // change URL to match your dev URL

    cy.getByTestId("add-tracker").click()
  })
})
