import React from 'react'
import { Navbar } from 'flowbite-react';
import { OperarioIcon } from '../../components/icons'

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
                <Navbar.Link className='text-lg' href='/maquinas'>
                    <p>Maquinas</p>
                </Navbar.Link>
                <Navbar.Link className='text-lg' href='/partes'>
                    <p>Partes</p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
