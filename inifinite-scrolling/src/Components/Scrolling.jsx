import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import style from "./scrolling.module.css"

function Scrolling() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [nextItem, setNextItem] = useState(1)

    const addMoreBoxes = () => {
        setLoading(true)
        let temp = [], count = nextItem
        for (let i = 0; i < 25; i++) {
            temp.push(`Masai School ${count++}`)
        }
        setData([...data, ...temp])
        setNextItem(count)
        setLoading(false)
    }

    useEffect(() => {
        addMoreBoxes()
    }, [])

    return (
        <div className={style.outline}>
            <div>
                {
                    data && data.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))
                }
            </div>
            {
                loading && <p>Loading....</p>
            }
        </div>
    )
}

export default Scrolling