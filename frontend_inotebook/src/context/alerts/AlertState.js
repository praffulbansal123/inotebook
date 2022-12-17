import AlertContext from "./alertContext";
import { useState } from "react";

const AlertState = (props) => {
    
    const [alert, setAlert] = useState(null)

    const generateAlert = (obj) => {
        setAlert({
            message: obj.message,
            type: obj.type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2500)
    }

    return (
        <AlertContext.Provider value={{alert, generateAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;