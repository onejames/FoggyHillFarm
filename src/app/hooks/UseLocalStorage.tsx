import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
  const getValue = () => {
    try {
      let value = null;

      if (typeof window !== "undefined") {
        const value = window.localStorage.getItem(key)
      }

      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(error)
    }
  }

  const [state, setState] = useState(() => {
    try {
      let value = '';
      if (typeof window !== "undefined") {
        value = window.localStorage.getItem(key) ?? ''
      }

      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: any) => {
    try {
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