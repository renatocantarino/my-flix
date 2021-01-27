import React from 'react';
import { Link } from 'react-router-dom'

import Template from '../../../components/Template'



export default function Categoria() {
    return (
        <Template>
            <h1>Cadastro de Categoria</h1>


            <Link to="/">
                Ir para home
            </Link>
        </Template>
    )
}