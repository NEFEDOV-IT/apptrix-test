export const saveTokenStorage = (name, token) => {
  return localStorage.setItem(name, JSON.stringify(token))
}

export const getTokenStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}