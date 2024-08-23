import React, { useEffect } from "react";

import { useState } from "react";

import Button from "../compenents/button";
import Input from "../compenents/input";

import adicionarDocumento from "../db/post";

const Home = () => {

    const [tarefa, setTarefa] = useState([])

    const handleClick = () => {
        const inputValue  = document.getElementsByClassName("default-input")[0].value

        const newArray = [...tarefa, inputValue]

        console.log(newArray);

        setTarefa(newArray)
    };

    useEffect(() => {
        const handleSubmit = async () => {
  
            try {
                await adicionarDocumento("julio");
            } catch (error) {
                console.error('Erro ao adicionar documento:', error);
            }
        };

        handleSubmit()
    },[])

    return (
        
        <div>
            <h1>Barra de tarefa </h1>
            <Input/>
            <Button placehouder={"Adicionar Tarefa"} onClick={() => handleClick()}/>

            {tarefa && 
                tarefa.map((e, key) => {
                    return(
                        <div key={`${key}`}>{e}</div>
                    )
                })
            }
        </div>
    )
}

export default Home;
