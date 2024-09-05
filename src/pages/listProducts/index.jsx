import "./index.scss"

import React, { useEffect, useState } from "react";



import fetchProducts from "../../helpers/getProduct";

const ListProducts = () => {    

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const feachData = async () => {
            try{
                const data = await fetchProducts();
                setProducts(data);
                const table = document.getElementById("table");
                table.classList.remove("table-hidden")
                table.classList.add("show-table")
            } catch (err) {
                console.log(err);
            }
        }

        feachData()
    },[])
 

    return (
        <div>   
            <table id="table" className="table-hidden">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Codio de barras</th>
                    </tr>
                </thead>
                <tbody>
            { 
                products && products.map((e,id) => {
                    console.log(e);
                    return(
                        <tr key={id}>
                            <th scope="row">{e.id}</th>
                            <td>{e.produto.name}</td>
                            <td>{e.produto.preco}</td>
                            <td>{e.produto.codigoBarra}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
    );
};

export default ListProducts;
