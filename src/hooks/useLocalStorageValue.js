import React from 'react'

export function useLocalStorageValue(key, initValue = '') {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initValue,
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])
  // props, state

  return [value, setValue]
}
