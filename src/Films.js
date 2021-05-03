import React, { useEffect, useState } from 'react'

function Films(props) {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [episodeId, setEpisodeId] = useState("")
    const [curid, setcurid] = useState(props.curid)
    const [apiurl, setapiurl] = useState(props.apiurl)
    useEffect(() => {
        setcurid(props.curid)
        setapiurl(props.apiurl)
        setLoading(true)
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title)
            setEpisodeId(data.episode_id)})
        setLoading(false)
    })
    return (
        <div>
            <h1> {loading && "Checking the API..."} </h1>
            <h3> You are currently looking at {'https://swapi.dev/api/films/'+curid.toString()+'/'}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{title}</b> {title != null ? 'is the title.' : "There is no title at this id."}</p> 
            <p> <b>{episodeId}</b> {episodeId != null ? 'is the episode id.' : "There is no episode id at this id."}</p> 
        </div>
    )
}

export default Films