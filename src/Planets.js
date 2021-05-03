import React, { useEffect, useState } from 'react'

function Planets(props) {
    const [name, setName] = useState("")
    const [rotationPeriod, setRotationPeriod] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setRotationPeriod(data.rotation_period)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <div>
            <h3> You are currently looking at {props.apiurl}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <p> <b>{rotationPeriod}</b> {rotationPeriod != null ? 'is the rotation period.' : "There is no rotation period at this id."}</p> 
        </div>
    )
}

export default Planets