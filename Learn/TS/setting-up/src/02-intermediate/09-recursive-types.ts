type NestedNumbers = number | NestedNumbers[]

const nums: NestedNumbers = [1, 3, [1, 2, [1, 4]]]
nums.push([1, 3])

// JSON
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJSON(arg: JSONValue) {}

isJSON('hi')
isJSON({ a: 123, v: {} })
isJSON([])
