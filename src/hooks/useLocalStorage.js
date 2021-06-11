import { useState } from 'react'

export function useLocalStorage (Key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(Key)
      return item != null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(Key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setLocalStorage]
}
