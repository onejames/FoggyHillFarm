import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
  const getValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const value = window.localStorage.getItem(key)
    const returnValue = value ? JSON.parse(value) : initialValue;

    return returnValue;
  }

  const [state, setState] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      const value = window.localStorage.getItem(key)

      const returnValue = value ? JSON.parse(value) : initialValue
      
      return returnValue;
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: any) => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
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
    return value;
  }

  return [state, setValue, getValue]
}

export default useLocalStorage