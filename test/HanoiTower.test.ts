import hanoiTowerSteps from './../src/example/HanoiTower'

describe('HanoiTower', () => {
  it('3 layers', () => {
    expect(hanoiTowerSteps(3)).toBe(7)
  })
})
