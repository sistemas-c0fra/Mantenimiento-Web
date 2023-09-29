import React from 'react'
import { Header } from '../../components/header'

export function AdminLayout(props) {

  const { children } = props

  return (
    <div className='flex flex-col items-center mt-4 gap-4'>
      <Header />

      {children}

    </div>
  )
}
