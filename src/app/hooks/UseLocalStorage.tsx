import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
  const getValue = () => {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : null;
  }

  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: any) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      setState(value)
    } catch (error) {
      console.log(error)
    }

    const customEvent = new CustomEvent('localStorage.'+key, {
      detail: {
        value: value,
      },
    });

    window.dispatchEvent(customEvent);
  }

  return [state, setValue, getValue]
}

export default useLocalStorage