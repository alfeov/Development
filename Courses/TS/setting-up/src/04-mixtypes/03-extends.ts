// something extends something = что-то содержится в чем-то
// множество (set) - number | string | any | ...

// множество чисел содержится в 64?
// 64 содержится во множество чисел?
type answer_1 = 64 extends number ? true : false
type answer_2 = number extends 64 ? true : false // false
type answer_3 = string[] extends any ? true : false
type answer_4 = string[] extends any[] ? true : false
type answer_5 = never extends any ? true : false // true
type answer_55 = unknown extends any ? true : false // true
type answer_555 = never extends never ? true : false // true
type answer_6 = any extends any ? true : false // true
type T0 = typeof NaN extends number ? true : false
type T1 = number extends any ? true : false
type T2 = string extends 'a' | 'b' | 'c' ? true : false // false
type T22 = 'a' | 'b' | 'c' extends string ? true : false // true
type T3 = { getDay(): number } extends Date ? true : false
type T4 = number | string extends string ? true : false
