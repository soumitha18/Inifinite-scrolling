import React from "react"
import { useState } from "react"
import style from "./scrolling.module.css"

function Scrolling() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [nextItem, setNextItem] = useState(1)

    const addMoreBoxes = () => {
        setLoading(true)
        let temp = [...data], count = nextItem

        for (let i = 0; i < 25; i++) {
            temp.push(`Masai School ${count++}`)
        }
        setData(temp)
        setNextItem(count)
        setLoading(false)
    }

    if (data.length === 0) { addMoreBoxes() }

    const scroll = (e) => {
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            addMoreBoxes()
        }
    }

    return (
        <div className={style.outline}>
            <div onScroll={scroll}>
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