import React from 'react'
import { Navbar } from 'flowbite-react';
import { OperarioIcon } from '../../components/icons'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Navbar rounded className='w-9/12 h-20 flex items-center'>
            <Navbar.Brand href="/">
                <OperarioIcon />
                <span className="ml-6 text-2xl hover:text-cyan-700 self-center whitespace-nowrap font-bold ">
                    Mantenimiento
                </span>
            </Navbar.Brand>

            <Navbar.Collapse>
                <Navbar.Link className='text-lg' href="/">
                    <p>Inicio</p>
                </Navbar.Link>
                <Link to={'/maquinas'}>
                    <Navbar.Link className='text-lg'>
                        <p>Maquinas</p>
                    </Navbar.Link>
                </Link>
                <Link to={'/partes'}>
                    <Navbar.Link className='text-lg'>
                        <p>Partes</p>
                    </Navbar.Link>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
