type WindowProp = keyof Window

const myValue: WindowProp = 'ontoggle'

interface PC {
  brand: string
  year: string
}

type Typ1 = keyof PC //brand | year

const val1: Typ1 = 'brand'

type Tup1 = keyof [string, number]

const val2: Tup1 = '0'

const obj = {
  a: '1',
  b: 2,
  c: true,
}

const r: keyof typeof obj = 'a'
