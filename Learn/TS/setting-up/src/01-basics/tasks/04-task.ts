interface User {
  login: string
  email: string
  password: string
  isOnline: boolean
  lastVisited: Date
}

interface Admin extends User {
  role: string
}

const login = (obj: User | Admin): void => {
  if (obj.login && obj.password) console.log('Greetings ', obj.login, '!!!!')
}

const admin: Admin = {
  login: 'HellNo',
  email: 'hellno@gmail.com',
  password: 'HellNo1234',
  isOnline: true,
  lastVisited: new Date(2026, 7, 13),
  role: 'admin',
}

login(admin)
