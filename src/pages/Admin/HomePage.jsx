import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'
import { MachineIcon, PartIcon } from '../../components/icons'

export function HomePage() {
    return (
        <div className='flex justify-center w-9/12 gap-20 mt-12'>
            <Link to={'/maquinas'} className='flex flex-col items-center'>
                <MachineIcon />
                <p className='font-bold'>Maquinas</p>
            </Link>
            <Link to={'/partes'} className='flex flex-col items-center'>
                <PartIcon />
                <p className='font-bold'>Partes</p>
            </Link>
        </div>
    )
}
