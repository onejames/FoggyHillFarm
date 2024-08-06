import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
  const getValue = () => {

    const value = window.localStorage.getItem(key)
    const returnValue = value ? JSON.parse(value) : initialValue;

    return returnValue;
  }

  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)

      const returnValue = value ? JSON.parse(value) : initialValue
      
      return returnValue;
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value: any) => {
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