export default class Set {
  private items: Array<any> = []
  constructor() {}
  has(item: any): boolean {
    return this.items.includes(item)
  }
  add(item: any): boolean {
    if (this.has(item)) return false

    this.items.push(item)
    return true
  }
  delete(item: any): any {
    if (!this.has(item)) return null

    const idx = this.items.findIndex(i => i === item)
    return this.items.splice(idx, 1)[0]
  }
  clear(): void {
    this.items = []
  }
  size(): number {
    return this.items.length
  }
  values(): Array<any> {
    return this.items.concat()
  }
}
