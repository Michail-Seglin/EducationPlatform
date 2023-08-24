import React from "react";

function Input({ data, inp, setInp }) {

    function changeInp(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    return (
        <>
            {data.map((el) => <div><input name={el} placeholder={el} onChange={changeInp}></input></div>)}
        </>
    )
}

export default Input