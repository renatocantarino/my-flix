import React from 'react'
import Logo from '../../assets/img/Logo.png'
import LinkButton from '../LinkButton'
import './menu.css'

import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="alura" className="Logo" />
            </Link>

            <LinkButton as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </LinkButton>
        </nav>
    )
}