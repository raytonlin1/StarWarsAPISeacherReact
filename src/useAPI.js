import React, { useEffect, useState } from 'react'

function UseAPI() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [field, setfield] = useState("people")
    const [newfield, setnewfield] = useState("people")
    const [curid, setcurid] = useState(1)
    const [newid, setnewid] = useState(1)
    const [apiurl, setapiurl] = useState('https://swapi.dev/api/people/1/')
    function increment() 
    {
        setnewid(newid + 1)
    }
    function decrement() 
    {
        setnewid(newid - 1)
    }
    function fieldTo(event) 
    {
        event.preventDefault();
        setnewfield(newfield)
        setnewid(1)
    }
    function changeNewField(event) 
    {
        setnewfield(event.target.value)
    }
    useEffect(() => {
        setapiurl('https://swapi.dev/api/'+newfield+'/'+newid.toString()+'/') 
        setLoading(true);
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)})
        setcurid(newid)
        setfield(newfield)
        setLoading(false);
    })

    return (
        <div className="useAPI"> 
            <form onSubmit={fieldTo}>
                <label>
                    Pick which part of the API to go through: <br />
                    <select value={newfield} onChange={changeNewField}>
                        <option selected value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </label>
            </form>
            <h1> {loading && "Checking the API..."} </h1>
            <h3> You are currently looking at {'https://swapi.dev/api/'+newfield+'/'+curid.toString()+'/'}</h3>
            <p>The current id is {curid}.</p>
            <p> <b>{name}</b> {name != null ? 'is the name.' : "There is no name at this id."}</p> 
            <button onClick={increment}> Increment the id</button>
            <button onClick={decrement}> Decrement the id</button>
        </div>
    )
}

export default UseAPI