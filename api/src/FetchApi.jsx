import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function Fetch() {

    useEffect(() => {
        axios.get('http://localhost:3000/userData')
        .then(res=>console.log(res.data))
    },[])

    return (
        <>
            <h1>get data</h1>
        </>
    )
}
export default Fetch