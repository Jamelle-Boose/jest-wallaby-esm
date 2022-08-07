import sum from "./index.js"

describe("sum", () => {
  it("adds 4 + 2 to equal 6", () => {
    expect(sum(4, 2)).toBe(6)
  })
  it("adds -2 + -2 to equal -4", () => {
    expect(sum(-2, -2)).toBe(-4)
  })
  it("adds 2.5 + 2.5 to equal 5", () => {
    expect(sum(2.5, 2.5)).toBe(5)
  })
})
