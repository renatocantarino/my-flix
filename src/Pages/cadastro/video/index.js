import React from 'react';
import Template from '../../../components/Template'
import { Link } from 'react-router-dom';


export default function Video() {
    return (
        <Template>
            <h1>Cadastro de vídeos</h1>



            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </Template>
    )
}