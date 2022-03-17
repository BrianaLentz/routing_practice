import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = () => {
    const {words, textcolor, bgcolor} = useParams()
    return (
    <div style={{backgroundColor:bgcolor}}>
    <h1 style={{color:textcolor}}> The Word is: {words}</h1>
    </div>
    )
}

export default WordColor