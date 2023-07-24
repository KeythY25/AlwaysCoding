import React from "react";


const  Card =({pokemon, loading})=>{

    // console.log(pokemon);
    return(
        <>
        {
            loading ? <h1>Loading...</h1> :
            pokemon.map((item)=>{
                return (
                    <> 
                        <div className="card" key={item.id}>
                            <h1 key={item.id}>{item.id}</h1>
                            <img src={item.sprites.front_default}/>
                            <h2>{item.name}</h2>
                        </div>
                    </>
                )
            })
        }
        
        </>
    )
}

export default Card;