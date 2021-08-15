import React, { useState } from "react";
import AddDate from "./components/AddDate"
import { NasaGrid } from "./components/NasaGrid";

//import { getNasa } from "./helpers/getNasa";
// import { useFetchNasa } from "./hooks/useFetchNasa"; 

export const NasaApp = () => {

    const [ date, setDate ] = useState([]);

    return <>
        <div className="container-fluid">
            <h1 className="bg-dark text-white row px-2 py-3 mb-0">NasaAPP</h1>
            <div className="row">
                <AddDate setState={ setDate }/>
            </div>
          

            {
                date.map(currentDate => {
                    return <NasaGrid key={ currentDate } dateTime={ currentDate }/>
                })
            }
            
        </div>
        
            
    </>
         
}