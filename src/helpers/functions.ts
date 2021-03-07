import Config from '../config'

export const uppercaseFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const localStorageMiddleware = (key: string, value: any) => {
  const storage = localStorage.getItem(Config.get('appName'))

  if (storage) {
    const items = JSON.parse(storage)
    return localStorage.setItem(Config.get('appName'), JSON.stringify({ ...items, [key]: value }))
  } else {
    return localStorage.setItem(Config.get('appName'), JSON.stringify({ [key]: value }))
  }
}
