import React from "react";

const Fruit = ({name, changeFruit}) => {
    return (
        <div>
            <h1>Your favorite fruit is a {name}</h1>
            <input onChange={changeFruit}/>
        </div>
    )
}

export default Fruit;