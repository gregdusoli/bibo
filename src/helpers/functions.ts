export const uppercaseFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const localStorageMiddleware = (key: string, value: any) => {
  return localStorage.setItem('BiBo', JSON.stringify({ [key]: value }))
}
