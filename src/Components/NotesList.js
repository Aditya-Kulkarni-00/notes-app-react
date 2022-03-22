import Note from "./Note";
import AddNote from "./AddNote";
import { useEffect, useState } from "react";
import data from '../data.json'


const NotesList = () =>{
       
    const [noteList , setNoteList] = useState([]);
    const setNoteFromJSON = () =>{
        setNoteList(data)
    }
    useEffect(setNoteFromJSON,[])

    return(
        <div>
            <AddNote/>
        <div>
            {noteList &&  noteList.map((note)=>
                (<Note key={note.id} content={note.content}/>)
            )}
        </div>
        </div>

    )
}


export default NotesList;