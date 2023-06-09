import {Dispatch, SetStateAction, useEffect, useState} from 'react'

function useLocalStorage (key: string, initalValue: any) : [any, Dispatch<SetStateAction<any>>] {
    const [value, setValue] = useState(initalValue)

    useEffect(function () {
        const item = localStorage.getItem(key)
        setValue(item ? JSON.parse(item) : initalValue)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
