function printPoint(point: { x: string; y: string; z?: string }): void {
  console.log(point.x, point.y)

  if (point.z) console.log(point.z.toUpperCase())
  console.log(point.z?.toUpperCase())
}

const obj = {
  x: '1',
  y: '2',
  z: '2',
}

printPoint(obj)
