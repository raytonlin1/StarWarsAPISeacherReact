import React, { useEffect, useState } from 'react'

function Films(props) {
    const [title, setTitle] = useState("")
    const [episodeId, setEpisodeId] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title)
            setEpisodeId(data.episode_id)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <div>
            <h3> You are currently looking at {props.apiurl}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{title}</b> {title != null ? 'is the title.' : "There is no title at this id."}</p> 
            <p> <b>{episodeId}</b> {episodeId != null ? 'is the episode id.' : "There is no episode id at this id."}</p> 
        </div>
    )
}

export default Films