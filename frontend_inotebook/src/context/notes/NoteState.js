import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitials = [
    {
      "_id": "6380aa7740555925214e6080",
      "user": "637f1c720963038cf5d9089f",
      "title": "Lear ReactJS",
      "description": "It is a fronte end library of nodejs",
      "tag": "Front-End",
      "createdAt": "2022-11-25T11:43:51.243Z",
      "updatedAt": "2022-11-25T11:43:51.243Z",
      "__v": 0
    },
    {
      "_id": "6381baa73dc1bffa7f6a39a4",
      "user": "637f1c720963038cf5d9089f",
      "title": "Lear NodeJS",
      "description": "It is an open-source, cross-platform runtime environment.",
      "tag": "Back-End",
      "createdAt": "2022-11-26T07:05:11.553Z",
      "updatedAt": "2022-11-26T07:05:11.553Z",
      "__v": 0
    },
    {
      "_id": "6381baef3dc1bffa7f6a39a7",
      "user": "637f1c720963038cf5d9089f",
      "title": "Learn ExpressJS",
      "description": "It is the most popular Node web framework.",
      "tag": "Back-End",
      "createdAt": "2022-11-26T07:06:23.388Z",
      "updatedAt": "2022-11-26T07:06:23.388Z",
      "__v": 0
    },
    {
      "_id": "6381bb1a3dc1bffa7f6a39a9",
      "user": "637f1c720963038cf5d9089f",
      "title": "Learn MERN",
      "description": "It stands for full stck in JS and NodeJS",
      "tag": "Full-Stack",
      "createdAt": "2022-11-26T07:07:06.681Z",
      "updatedAt": "2022-11-26T07:07:06.681Z",
      "__v": 0
    },
    {
      "_id": "6381bb1a3dc1bffa7f6a39a9",
      "user": "637f1c720963038cf5d9089f",
      "title": "Learn MERN",
      "description": "It stands for full stck in JS and NodeJS",
      "tag": "Full-Stack",
      "createdAt": "2022-11-26T07:07:06.681Z",
      "updatedAt": "2022-11-26T07:07:06.681Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitials);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;