import Class from './class';
import Race from './race';
import './apple.css';
import { useState } from 'react';

function Sheet({ character, setCharacter }) {

    const [proficiency, setProficiency] = useState(2);

    const changeProf = (level) => {
        if (--level % 4 === 0 && level !== 0) {
            setProficiency(proficiency + 1);
        }
    }

    const changeHealth = () => {
        if (character.class === 'Barbarian') {
            console.log(character.health)
            console.log(character.race)
            var newnumber = Math.floor(Math.random() * 12) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            // setCharacter((prev) => ({...prev, health: character.health + newnumber}))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Bard') {
            console.log(character.health);
            console.log(character.race);
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Cleric') {
            console.log(character.health);
            console.log(character.race);
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Druid') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Fighter') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 10) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Monk') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Paladin') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 10) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Ranger') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 10) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Rouge') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Sorcerer') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 6) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Warlock') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Wizard') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 6) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Artificer') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 8) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
        else if (character.class === 'Blood Hunter') {
            console.log(character.health)
            console.log(character.race)
            newnumber = Math.floor(Math.random() * 10) + 1;
            setCharacter((prev) => ({ ...prev, health: character.health + newnumber }))
            console.log(character.health + newnumber)
        }
    }


    return (

        <div className='type'>
            <fieldset>
                <legend>Character Sheet</legend>
                <div className='group'>
                    <div className='item1'><label for='usernmae'>Name: <input type='text' name="username"></input></label>
                    </div>
                    <div className='item2'><p>Race: {character.race}</p></div>
                    <div className='item3'><p>Class: {character.class}</p></div>
                    <div className='item4'><label>Level: </label><input type="number" min={1} max="20" onChange={(e) => changeProf(e.target.value)}></input></div>
                   
                </div>
                <div className='item5'><p>Proficiency: {proficiency} </p></div>
                    <div className='item6'><p>Initiative: </p></div>
                    <div className='item8'><p>Money: {character.gp}</p></div>
                    <div className='item7'><p id="health">Health: {character.health}</p>
                        <button onClick={changeHealth}>Hit Dice increase</button>
                    </div>
                {/*  <button onClick={changeHealth}>Hit Dice increase</button>  */}
                <p>Saving Throw proficiency: {character.dicesave}</p>
                <p>Tools proficiency: {character.tools}</p>
                <label>Strength: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, strength: e.target.value })} placeholder={character.strength} /></label>
                <br></br>
                <label>Dexterity: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, dexterity: e.target.value })} placeholder={character.dexterity} /></label>
                <br></br>
                <label>Constitution: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, constitution: e.target.value })} placeholder={character.constitution} /></label>
                <br></br>
                <label>Intelligence: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, intelligence: e.target.value })} placeholder={character.intelligence} /></label>
                <br></br>
                <label>Wisdom: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, wisdom: e.target.value })} placeholder={character.wisdom} /></label>
                <br></br>
                <label>Charisma: <input type="number" min={1} onChange={(prev, e) => ({ ...prev, charisma: e.target.value })} placeholder={character.charisma} /></label>
                <br></br>
                <p>Background: </p>

                <p>Notes:</p>
                <textarea rows='17' cols='70'></textarea>
            </fieldset>
        </div>
    )
}



export default Sheet; 