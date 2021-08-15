import { getNasa } from "../helpers/getNasa"

import { useState, useEffect } from "react"

export const useFetchNasa = (dateSearch, pageNum=1) => {

    const [ nasa, setNasa ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getNasa(dateSearch, pageNum)
            .then(obj => setNasa({
                data: obj,
                loading: false
            }))
        }, [ dateSearch, pageNum ]);
    return nasa;


}
