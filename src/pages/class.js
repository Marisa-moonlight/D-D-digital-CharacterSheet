import { useState } from 'react';
import Sheet from './sheet';

function Class({setCharacter, character}){
    const [classSheet, setClassSheet] = useState(false)
    return(
    <>
        {classSheet === false ?
        <div className='cal'>
            <div className='write1'>
                <p>A fierce warrior of primitive background who can enter a battle rage.</p>
                <p><b>Hit Die:</b> d12</p>
                <p><b>Primary Ability:</b> Strength</p>
                <p><b>Saves:</b> Strength & Constitution</p>
                <button className="Barbarian" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Barbarian", health: 12, dicesave: "Strength & Constitution", gp: 10}))}}>Barbarian</button>
            </div>
            <div className='write2'>
                <p>A priestly champion who wields divine magic in service of a higher power.</p>
                <p><b>Hit Die</b> d8</p>
                <p><b>Primary Ability:</b> Charisma</p>
                <p><b>Saves:</b> Dexterity & Charisma</p>
                <button className="Bard" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Bard", health: 8, dicesave: "Dexterity & Charisma", gp: 10}))}}>Bard</button>
            </div>
            <div className='write3'>
                <p>A priestly champion who wields divine magic in service of a higher power.</p>
                <p><b>Hit Die:</b> d8</p>
                <p><b>Primary Ability:</b> Wisdom</p>
                <p><b>Saves:</b> Wisdom & Charisma</p>
                <button className="Cleric" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Cleric", health: 8, dicesave: "Wisdom & Charisma", gp: 10}))}}>Cleric</button>
            </div>
            <div className='write4'>
                <p>A priest of the Old Faith, wielding the powers of nature and adopting animal forms.</p>
                <p><b>Hit Die:</b> d8</p>
                <p><b>Primary Ability:</b> Wisdom</p>
                <p><b>Saves:</b> Intelligence & Wisdom</p>
                <button className="Druid" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Druid", health: 8, dicesave: "Intelligence & Wisdom", gp: 10}))}}>Druid</button>
            </div>
            <div className='write5'>
                <p>A master of martial combat, skilled with a variety of weapons and armor.</p>
                <p><b>Hit Die:</b> d10</p>
                <p><b>Primary Ability:</b> Strength or Dexterity</p>
                <p><b>Save:</b> Strength & Constitution</p>
                <button className="Fighter" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Fighter", health: 10, dicesave: "Strength & Constitution", gp: 10}))}}>Fighter</button>
            </div>
            <div className='write6'>
                <p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.</p>
                <p><b>Hit Die:</b> d8</p>
                <p><b>Primary Ability:</b> Dexterity & Wisdom</p>
                <p><b>Saves:</b> Strength & Dexterity</p>
                <button className="Monk" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Monk", health: 8, dicesave: "Strength & Dexterity", gp: 10}))}}>Monk</button>
            </div>
            <div className='write7'>
            <p>A holy warrior bound to a sacred oath.</p>
                <p><b>Hit Die:</b> d10</p>
                <p><b>Primary Ability:</b> Strength & Charisma</p>
                <p><b>Saves:</b> Wisdom & Charisma</p>
                <button className="Paladin" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Paladin", health: 10, dicesave: "Wisdom & Charisma", gp: 10}))}}>Paladin</button>
            </div>
            <div className='write8'>
            <p>A warrior who combats threats on the edges of civilization.</p>
                <p><b>Hit Die:</b> d10</p>
                <p><b>Primary Ability:</b> Dexterity & Wisdom</p>
                <p><b>Saves:</b> Strength & Dexterity</p>
                <button className="Ranger" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Ranger", health: 10, dicesave: "Strength & Dexterity", gp: 10}))}}>Ranger</button>
            </div>
            <div className='write9'>
            <p>A scoundrel who uses stealth and trickery to overcome obstaceles and enimes.</p>
                <p><b>Hit Die:</b> d8</p>
                <p><b>Primary Ability:</b> Dexterity</p>
                <p><b>Saves:</b> Dexterity & Intelligence</p>
                <button className="Rouge" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Rouge", health: 8, dicesave: "Dexterity & Intelligence", gp: 10}))}}>Rouge</button>
            </div>
            <div className='write10'>
            <p>A spellcaster who draws on inherent magic.</p>
                <p><b>Hit Die:</b> d6</p>
                <p><b>Primary Ability:</b> Charisma</p>
                <p><b>Saves:</b> Constitution & Charisma</p> 
            </div>
            <div className='write11'></div>
            <div className='write12'></div>
            
            
            
            
            
            
            
            
            
            <button className="Sorcerer" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Sorcerer", health: 6, dicesave: "Constitution & Charisma", gp: 10}))}}>Sorcerer</button>
            <button className="Warlock" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Warlock", health: 8, dicesave: "Wisdom & Charisma", gp: 10}))}}>Warlock</button>
            <button className="Wizard" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Wizard", health: 6, dicesave: "Intelligence & Wisdom", gp: 10}))}}>Wizard</button>
            <button className="Artificer" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Artificer", health: 8, dicesave: "Constitution & Intelligence", gp: 10}))}}>Artificer</button>
            <button className="Blood" onClick={() => {setClassSheet(true); setCharacter((prev) => ({...prev, class: "Blood Hunter", health: 10, dicesave: "Dexterity & Intelligence", gp: 10}))}}>Blood Hunter</button>
        </div> : <Sheet character={character} setCharacter={setCharacter} /> }
    </>
    );
}

export default Class;