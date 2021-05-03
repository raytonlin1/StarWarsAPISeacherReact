import React, { useEffect, useState } from 'react'

function People(props) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [curid, setcurid] = useState(props.curid)
    const [apiurl, setapiurl] = useState(props.apiurl)
    useEffect(() => {
        setcurid(props.curid)
        setapiurl(props.apiurl)
        setLoading(true)
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setHeight(data.height)})
        setLoading(false)
    })
    return (
        <div>
            <h1> {loading && "Checking the API..."} </h1>
            <h3> You are currently looking at {'https://swapi.dev/api/people/'+curid.toString()+'/'}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{height}</b> {height != null ? 'is their height.' : "There is no height at this id."}</p> 
        </div>
    )
}

export default People