import { useFetchNasa } from "../hooks/useFetchNasa";
import React from "react";
import { NasaGridItem } from "./NasaGridItem";

export const NasaGrid = ( { dateTime } ) => {

    const { data:info, loading } = useFetchNasa(dateTime);
    // console.log(loading);
    

    return (
        <div className="nasa container my-4 bg-light rounded">
            <div className="nasa-title row py-3 px-2">
                <h3 className="c-white"> Fecha Ingresada: { dateTime } </h3>
            </div>

            { loading && <div className="row p-2"><span className="text-muted">Cargando...</span></div> }

            <div className="grid row d-flex align-items-center justify-content-center">
                {
                    info.map((infoVal) => {
                        return <NasaGridItem key={ infoVal.id } { ...infoVal }/>
                    })
                }
            </div>

        </div>
    )
}
