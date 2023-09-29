import React from 'react'
import { Spinner } from 'flowbite-react'

export function Loading() {
    return (
        <div className='flex flex-col h-full items-center text-lg font-semibold'>
            <Spinner
                size="xl"
                color='success'
            />
            <p>Cargando...</p>
        </div>
    )
}
