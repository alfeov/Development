export async function client(
  endPoint,
  { method = 'GET', body, customConfig = {} },
) {
  try {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }
    const config = {
      method,
      headers,
      ...customConfig,
    }
    if (body) config.body = JSON.stringify(body)

    const res = await fetch(endPoint, config)
    if (!res.ok) throw new Error('HTTP: ' + res.status)
    const data = await res.json()
    return data
  } catch (error) {
    return Promise.reject(error.message)
  }
}

client.get = (endPoint, customConfig = {}) => {
  return client(endPoint, { method: 'GET', customConfig })
}

client.post = (endPoint, body, customConfig = {}) => {
  return client(endPoint, { method: 'POST', body, customConfig })
}

client.delete = (endPoint, customConfig = {}) => {
  return client(endPoint, { method: 'DELETE', customConfig })
}

client.patch = (endPoint, body, customConfig = {}) => {
  return client(endPoint, { method: 'PATCH', body, customConfig })
}

client.create = ({ baseURL = '', ...customConfig }) => {
  const carry = ({ url, method, body }) =>
    client(baseURL.concat(url), { method, body, customConfig })

  carry.get = (url) => carry({ url, method: 'GET' })
  carry.post = (url, body) => carry({ url, method: 'POST', body })
  carry.delete = (url) => carry({ url, method: 'DELETE' })
  carry.patch = (url, body) => carry({ url, method: 'PATCH', body })

  return carry
}

export const api = client.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
