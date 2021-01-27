import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

import Template from '../../../components/Template'
export default function Categoria() {


    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        
        setValues({
            ...values,
            [chave]: valor, 
        })
    }
    function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);

        setValues(valoresIniciais)
        
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    return (
        <Template>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />


                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />


                <button>
                    Cadastrar
              </button>
            </form>


            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </Template>
    )
}
