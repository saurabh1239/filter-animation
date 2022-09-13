import { useEffect,useState } from "react";

export default  function Filter({popular,setFiltered, activeGenre,setActivegenre}){
    useEffect(()=>{
        if(activeGenre==0){
            setFiltered(popular);
            return
        }
        const filtered = popular.filter((movie)=>
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);  
        
    },[activeGenre])
    return(
    <div className="filter-container"> 
        <button className = {activeGenre===0 ? 'active':''} onClick={()=>setActivegenre(0)}>All</button>
        <button className = {activeGenre===35 ? 'active':''} onClick={()=>setActivegenre(35)}>Comedy</button>
        <button className = {activeGenre===28  ? 'active':''} onClick={()=>setActivegenre(28)}>Action</button>

    </div>
    );
        

}