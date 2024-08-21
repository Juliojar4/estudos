import React from "react";

import { useState } from "react";

import Button from "../compenents/button";
import Input from "../compenents/input";

const Home = () => {

    const [tarefa, setTarefa] = useState([])

    const handleClick = () => {

        const tarefaCopy = [...tarefa] 

        const inputValue  = document.getElementsByClassName("default-input")[0].value

        tarefaCopy.push(inputValue)

        console.log(tarefaCopy);

        setTarefa(inputValue)
    };

    return (
        
        <div>
            <h1>Barra de tarefa </h1>
            <Input/>
            <Button placehouder={"Adicionar Tarefa"} onClick={() => handleClick()}/>

            {tarefa && 
                <div>{tarefa}</div>
            }
        </div>
    )
}

export default Home;
