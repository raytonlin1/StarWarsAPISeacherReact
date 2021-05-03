import React, { useEffect, useState } from 'react'

function Starships(props) {
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setModel(data.model)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <div>
            <h3> You are currently looking at {props.apiurl}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{model}</b> {model != null ? 'is the model.' : "There is no model at this id."}</p> 
        </div>
    )
}

export default Starships