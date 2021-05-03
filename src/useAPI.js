import React, { useEffect, useState } from 'react'
import Films from './Films'
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'
function UseAPI() {
    const [field, setfield] = useState("films")
    const [newfield, setnewfield] = useState("films")
    const [curid, setcurid] = useState(1)
    const [apiurl, setapiurl] = useState('https://swapi.dev/api/films/1/')
    function increment() 
    {
        let newid = curid + 1
        setcurid(newid)
        setapiurl('https://swapi.dev/api/'+field+'/'+newid+'/')
    }
    function decrement() 
    {
        let newid = curid - 1
        setcurid(newid)
        setapiurl('https://swapi.dev/api/'+field+'/'+newid+'/')
    }
    function changeNewField(event) 
    {
        setnewfield(event.target.value)
    }
    function setField(event) 
    {
        event.preventDefault();
        setfield(newfield)
        setapiurl('https://swapi.dev/api/'+newfield+'/'+curid+'/')
    }
    return (
        <div className="useAPI"> 
            <form onSubmit={e => setField(e)}>
                <label >
                    Pick which part of the API to go through: <br />
                    <select value={newfield} onChange={changeNewField}>
                        <option selected value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                    <button type="submit">Submit</button>
                </label>
            </form>
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