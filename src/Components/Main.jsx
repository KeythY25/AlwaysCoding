import React, { useEffect, useState } from "react";
import './style.css'
import Card from "./allPoke";
import Pokeinfo from "./Pokemon";

const Main = () => {
    const [pokeList, setPokeList] = useState([])
    // const [error, setError] =useState(null)
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] =useState();
    const [prevUrl, setPrevUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [featPok, setFeatPok] = useState();

    
    const pokeFun= async() =>{
        // try{
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data.results)
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            getPokemon(data.results);
            setLoading(false);
            // console.log(pokeList)
        // } catch(error) {
        //     console.log(error)
        //     setError(error);
        // }
    }

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result = await fetch(item.url)
            // console.log(result)
            const result_data= await result.json();
            // console.log(result_data)
            setPokeList(state =>{
                state=[...state,result_data];
                state.sort((a,b)=>a.id>b.id?1:-1);
                return state;
            })
        })
    }


    useEffect(()=>{
        pokeFun();
    },[])
    

    return(
        <>
        <div className="container">
            <div className="left_side">
                <Card pokemon={pokeList} loading={loading} />
                
                <div className="btn_grp">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
            <div className="right_side">
                <Pokeinfo />
            </div>
        </div>
        </>
    )
}

export default Main