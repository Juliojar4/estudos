import "./index.css"

import React, { useEffect, useState } from "react";

import PostInToDb from "../db/post";

import Button from "../compenents/button/index";
import Input from "../compenents/input/index";

const Home = () => {
    const [produto, setProduto] = useState();

    const handleClick = async (e) => {

        e.preventDefault()

        const inputValueName  = document.querySelector('input[name="name"]').value;
        const inputValuePreco  = document.querySelector('input[name="preco"]').value;
        const inputValueCodigo  = document.querySelector('input[name="codigo-de-barra"]').value;
  
        
        const obj = {
            name : inputValueName,
            preco : inputValuePreco,
            codigoBarra: inputValueCodigo,
        }

        setProduto(obj)

    };
    
    useEffect(() => {

        if(produto) {
            PostInToDb('produto', produto, produto)
        }

    }, [produto]);


    return (
        <div>
            <h1>Cadastre um Produto</h1>
            <form> 
                <div className="grup-form">
                    <Input name={"name"} label={"Nome do produto"}/>
                    <Input name={"preco"} label={"Qual é o Preço"}/>
                    <Input name={"codigo-de-barra"} label={"Qual é o Codigo"}/>
                    <Button placehouder={"Adicionar o codigo de Barra"} onClick={(e) => handleClick(e)}/>
                </div>
            </form>
           
        </div>
    );
};

export default Home;
