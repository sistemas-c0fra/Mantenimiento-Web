import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'
import { MachineIcon, PartIcon, AreaIcon, SettingIcon } from '../../components/icons'

export function HomePage() {
    return (
        // <div className='flex justify-center w-9/12 gap-20 mt-12'>
        <div className='grid grid-cols-3 w-9/12 gap-20 mt-12'>
            <Link to={'/areas'} className='flex flex-col items-center'>
                <SettingIcon />
                <p className='font-bold'>Areas</p>
            </Link>
            <Link to={'/subareas'} className='flex flex-col items-center'>
                <SettingIcon />
                <p className='font-bold'>Sub-Areas</p>
            </Link>
            <Link to={'/subzona'} className='flex flex-col items-center'>
                <SettingIcon />
                <p className='font-bold'>Sub-Zonas</p>
            </Link>

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
