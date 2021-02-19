import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Config from '../config'
import { localStorageMiddleware } from '../helpers/functions'

type Result<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function useSavedState<T> (key: string, initialState: T): Result<T> {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(Config.get('appName'))
    return savedState ? JSON.parse(savedState)[key] : initialState
  })

  useEffect(() => {
    localStorageMiddleware(key, state)
  }, [key, state])

  return [state, setState]
}

export default useSavedState
