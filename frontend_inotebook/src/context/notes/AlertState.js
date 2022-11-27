import AlertContext from "./alertContext";
import { useState } from "react";

const AlertState = (props) => {
    const alertInitials = [{
        "_id": "6380aa7740555925214e6080",
        "user": "637f1c720963038cf5d9089f",
        "title": "Lear ReactJS",
        "description": "It is a fronte end library of nodejs",
        "tag": "Front-End",
        "createdAt": "2022-11-25T11:43:51.243Z",
        "updatedAt": "2022-11-25T11:43:51.243Z",
        "__v": 0
      }]
    

  const [alert, setAlert] = useState(alertInitials);

    return (
        <AlertContext.Provider value={{alert, setAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;