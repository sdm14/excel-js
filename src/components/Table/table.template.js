const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol({ char }) {
  return `
    <div class="column">${String.fromCharCode(char)}</div>
  `
}

function createRow({ number, inner = '' }) {
  return `
    <div class="row">
      <div class="row-info">${number}</div>
      <div class="row-data">
        ${inner}
      </div>
    </div>
  `
}

export default function cteateTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = () => {
    const array = []
    for (let i = 0; i < colsCount; i++) {
      array.push(createCol({ char: i + CODES.A }))
    }
    return array.join('')
  }

  const cells = () => {
    const array = []
    for (let i = 0; i < colsCount; i++) {
      array.push(createCell())
    }
    return array.join('')
  }

  rows.push(createRow({ number: '', inner: cols() }))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow({ number: i + 1, inner: cells() }))
  }
  return rows.join('')
}
