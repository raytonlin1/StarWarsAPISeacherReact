import React from 'react'

const Navbar = (props) => {
    return (
        <header className="navbar">
            <ul>
                
                <li className="nbtext"> Navbar </li>
                <li className="site"> <a href="https://raytonlin1.github.io"> My Website </a>  </li>
                <li className="site"> <a href="https://swapi.dev/api"> Star Wars API </a>  </li>
            </ul>
            
        </header>
    )
}



export default Navbar