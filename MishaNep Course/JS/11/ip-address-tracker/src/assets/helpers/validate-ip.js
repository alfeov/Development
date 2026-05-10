function validateIp(ip) {
  const ipTest = (match) => {
    if (match <= 255) return 'd'
  }
  return ip.replace(/\d{1,3}/g, ipTest) === 'd.d.d.d'
}

export { validateIp }
