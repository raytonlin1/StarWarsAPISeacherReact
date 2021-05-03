import React, { useEffect, useState } from 'react'

function Species(props) {
    const [name, setName] = useState("")
    const [classification, setClassification] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setClassification(data.classification)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <div>
            <h3> You are currently looking at {props.apiurl}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{classification}</b> {classification != null ? 'is the classification.' : "There is no classification at this id."}</p> 
        </div>
    )
}

export default Species