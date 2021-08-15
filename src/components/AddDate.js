import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddDate = ({ setState }) => {

    const [input, setInput] = useState('');
    //eslint-disable-next-line
    const valDate =  /^\d{4}\-\d{2}\-\d{2}$/;

    const changeInput = (e) => {
        setInput(e.target.value);
        
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(valDate.test(input)) {
            setState([input]);
        }
    }

    return (<div className="col-12 px-0">
            <div className="navbar navbar-light bg-dark pb-3">
                <form onSubmit={ formSubmit } className="form-inline w-100 d-flex justify-content-between">
                    <input type="text" value={ input } placeholder="YYYY-MM-DD" onChange={ changeInput } className="form-control mr-sm-2" aria-label="Buscar"></input>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onSubmit={ formSubmit }>Search</button>
                </form>
            </div>
        </div>) 
}

AddDate.propTypes = {
    setState: PropTypes.func.isRequired
}

export default AddDate;