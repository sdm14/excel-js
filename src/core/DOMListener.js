export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`NO ROOT PROVIDED`)
    }
    this.$root = $root
  }
}
