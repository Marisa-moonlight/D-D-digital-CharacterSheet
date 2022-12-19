import { useState } from 'react';
import Class from './class';
import './system.css';

function Race() {
    const [RaceSheet, setRaceSheet] = useState(false)
    const [character, setCharacter] = useState({
        race: "",
        class: "",
        health: 0,
        dicesave: "",
        tools: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        gp: 0
    })
    return (
        <>
            {RaceSheet === false ?
                <div className='race'>
                    <div className='button'>
                    <div className='human'>
                        <p>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</p>
                        <h1>Racial Traits</h1>
                        <p>+1 to all ability scores, Extra Language</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Human", strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1}))}} className='race1'>Human</button>
                        </div>
                    <div className='elf'>
                        <p>Elves are a magical people of otherworldly grace , living in the world but not entirely part of it.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Dexterity, Darkvision, Keen senses, Fey Ancestry, Trance</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Elf", dexterity: 2}))}} className='race2'>Elf</button>
                        </div>
                    <div className='drawf'>
                        <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Drawf", constitution: 2, tools: 1}))}} className='race3'>Drawf</button>
                        </div>
                    <div className='dragonborn'>
                        <p>Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Dragonborn", strength: 2, charisma: 1}))}} className='race4'>Dragonborn</button>
                        </div>
                    <div className='gnome'>
                        <p>A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Intelligence, Darkvision, Gnome Cunning</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Gnome", intelligence: 2}))}} className='race5'>Gnome</button>
                        </div>
                    <div className='halfelf'>
                        <p>Half-Elf combined what some say are the best qualities of their elf and human parents.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Charisma, +1 to two other ability score, Darkvision, Fey Ancestry, Skill Versatility</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Half-Elf", dexterity: 2}))}} className='race6'>Half-Elf</button>
                        </div>
                    <div className='half'>
                        <p>The dminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Dexterity, Lucky, Brave, Halfling, Nimbleness</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Halfling", dexterity: 2}))}} className='race7'>Halfling</button>
                        </div>
                    <div className='orc'>
                        <p>Some Half-Orcs rise to become proud leaders or Orc communites. Some venture into the world to prove thier worth. Many of these become adventurers, achieving greatness for their mighty deeds.</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Half-Orc", strength: 2, constitution: 1}))}} className='race8'>Half-orc</button>
                        </div>
                    <div className='tiefling'>
                        <p>to be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the Tiefling</p>
                        <h1>Racial Traits</h1>
                        <p>+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy</p>
                        <br></br>
                        <button onClick={() => {setRaceSheet(true); setCharacter((prev) => ({...prev, race: "Tiefling", intelligence: 1, charisma: 2}))}} className='race9'>Tiefling</button>
                        </div>
                    </div>
                </div> : <Class character={character} setCharacter={setCharacter} />}
        </>
    );
}

export default Race;