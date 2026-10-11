const Color = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
}
type ValueOf<T> = T[keyof T]
type Colors = ValueOf<typeof Color>
