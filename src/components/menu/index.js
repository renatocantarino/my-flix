import React from 'react'
import Logo from '../../assets/img/Logo.png'
import LinkButton from '../botao'
import './menu.css'

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="alura" className="Logo" />
            </a>

            <LinkButton as="a" className="ButtonLink" href="new">
                Novo vídeo
            </LinkButton>
        </nav>
    )
}