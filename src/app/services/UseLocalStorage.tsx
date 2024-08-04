import { useState } from "react"

const useLocalStorage = (key: string, initialValue: any) => {
  function getValue () {
    try {
      let value = null;

      if (typeof window !== "undefined") {
        const value = window.localStorage.getItem(key)
      } else {
        console.log('window is undefined');  
      }

      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(error)
    }
  }

  function setValue (value: any) {
    try {
      // const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(value))
      
      // setState(value)
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

  return [getValue, setValue]
}

export default useLocalStorage