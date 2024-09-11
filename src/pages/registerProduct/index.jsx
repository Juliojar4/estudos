import "./index.scss"

import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';

import useScanDetection from "use-scan-detection";

import usePostInToDb from "../../hooks/post";
import fetchProducts from "../../helpers/getProduct";

import Button from "../../compenents/button/index";
import Input from "../../compenents/input/index";

import SuccessModal from "../../compenents/successModal";

const Register = () => {
    const [produto, setProduto] = useState();
    const [barcode, setBarcode] = useState();

    const postInToData = usePostInToDb();

    const isTriggered = useSelector((state) => state.counter.value);

    console.log(isTriggered);
  
    useScanDetection({
        onComplete: setBarcode,
        minLength:3
    })
    
    const handleClick = async (e) => {

        e.preventDefault();

        const inputValueName  = document.querySelector('input[name="name"]').value;
        const inputValuePreco  = document.querySelector('input[name="preco"]').value;
        const inputValueCodigo  = document.querySelector('input[name="codigo-de-barra"]').value;
  
        const productInformation = {
            name : inputValueName,
            preco : inputValuePreco,
            codigoBarra: inputValueCodigo,
        }
        setProduto(productInformation);
    };
    fetchProducts()
    useEffect(() => {

        if(produto) {
            postInToData('produto', produto, produto);
        };

    }, [produto,postInToData]);

    return (
        <div>
            {isTriggered && <SuccessModal/>}
            <h1>Cadastre um Produto</h1>
            <form> 
                <div className="grup-form">
                    <Input name={"name"} label={"Nome do produto"}/>
                    <Input name={"preco"} label={"Qual é o Preço"}/>
                    <Input name={"codigo-de-barra"} label={"Qual é o codigo de barra"} value={barcode} readonly={true} />
                    <Button placehouder={"Adicionar o codigo de Barra"} onClick={(e) => handleClick(e)} />
                </div>
            </form>
            <div className="modal">
            
            </div>
        </div>
    );
};

export default Register;
