import React, { useEffect, useState } from 'react'

function People(props) {
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setHeight(data.height)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <div>
            <h3> You are currently looking at {props.apiurl}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{height}</b> {height != null ? 'is their height.' : "There is no height at this id."}</p> 
        </div>
    )
}

export default People