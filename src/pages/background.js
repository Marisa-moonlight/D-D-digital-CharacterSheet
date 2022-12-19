import { useState } from 'react';


function Background(){
    const [classSheet, setClassSheet] = useState(false)
    return(
        <>
        {classSheet === false ?
        <div>
            <p>Description:<br></br></p>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Acolyte"}))}}>Acolyte</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Charlatan"}))}}>Charlatan</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Criminal"}))}}>Criminal</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Entertainer"}))}}>Entertainer</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Guild Artisan"}))}}>Guild Artisan</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Hermit"}))}}>Hermit</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Noble"}))}}>Noble</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Outlander"}))}}>Outlander</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Sage"}))}}>Sage</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Sailor"}))}}>Sailor</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Soldier"}))}}>Soldier</button>
            <button onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Urchin"}))}}>Urchin</button>

        </div> : <Sheet character={character} /> }
        </>
    );
}

export default Background;