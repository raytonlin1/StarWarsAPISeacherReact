import React, { useEffect, useState } from 'react'
import Films from './Films'
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'
function UseAPI() {
    const [loading, setLoading] = useState(false)
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
        setnewfield(newfield)
    }
    function changeNewField(event) 
    {
        setnewfield(event.target.value)
    }
    useEffect(() => {
        setcurid(newid)
        setfield(newfield)
        setapiurl('https://swapi.dev/api/'+field+'/'+curid.toString()+'/') 
    })
    return (
        <div className="useAPI"> 
            <form onSubmit={fieldTo}>
                <label>
                    Pick which part of the API to go through: <br />
                    <select value={newfield} onChange={changeNewField}>
                        <option selected value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </label>
            </form>
            <h1> {loading && "Checking the API..."} </h1>
            {field === 'films' && <Films curid= {curid} apiurl= {apiurl}/>}
            {field === 'people' && <People curid= {curid} apiurl= {apiurl}/>}
            {field === 'planets' && <Planets curid= {curid} apiurl= {apiurl}/>}
            {field === 'species' && <Species curid= {curid} apiurl= {apiurl}/>}
            {field === 'starships' && <Starships curid= {curid} apiurl= {apiurl}/>}
            {field === 'vehicles' && <Vehicles curid= {curid} apiurl= {apiurl}/>}
            <button onClick={increment}> Increment the id</button>
            <button onClick={decrement}> Decrement the id</button>
        </div>
    )
}

export default UseAPI