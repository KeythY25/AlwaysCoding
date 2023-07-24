import React from "react";

const Pokeinfo =()=> {
    return(
        <>
            <h1>1</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt=''/>
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>solar-power</h2>
                </div>
            </div>
            <div className="stats">
                <h3>HP: 30</h3>
                <h3>ATTACK: 52</h3>
                <h3>DEFENSE: 43</h3>
                <h3>SPECIAL ATTACK: 60</h3>
                <h3>SPECIAL DEFENSE: 50</h3>
                <h3>SPEED: 65</h3>
            </div>
        </>
    )
}

export default Pokeinfo