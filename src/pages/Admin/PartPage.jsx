import React, { useEffect, useState } from 'react'
import { TitleBar } from '../../components/titleBar'
import { TableParts, Loading, ModalBasic, AddEditPart } from '../../components'
import { useParts, useMaquinas } from '../../hooks'

export function PartPage() {
    const { loading, partes, getPartes, deletePart } = useParts()
    const { maquinas, getMaqui } = useMaquinas()
    const [component, setComponent] = useState(null)
    const [titleModal, setTitleModal] = useState(null)
    const [show, setShow] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getPartes()
        getMaqui()
    }, [refresh])

    const showOrHide = () => setShow((prevState) => (!prevState))
    const onRefresh = () => setRefresh((prevState) => (!prevState))

    const addNewPart = () => {
        setTitleModal('Nueva Parte')
        setComponent(<AddEditPart maquina={maquinas} close={showOrHide} refresh={onRefresh} />)
        showOrHide()
    }

    const updatePart = (data) => {
        setTitleModal('Actualizar parte')
        setComponent(<AddEditPart maquina={maquinas} parte={data} close={showOrHide} refresh={onRefresh} />)
        showOrHide()
    }

    const deleteParte = async (data) => {
        const result = window.confirm(`Borrar parte: ${data.parte}`)
        if (result) {
            await deletePart(data.id_parte)
            onRefresh()
        }
    }

    return (
        <div className='flex flex-col justify-center w-9/12 h-4/5 gap-4'>
            <TitleBar title='Listado de Partes' press={addNewPart} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <TableParts parts={partes} maquina={maquinas} update={updatePart} deletep={deleteParte} />
                </>
            )}
            <ModalBasic size='xl' show={show} showOrHide={showOrHide} title={titleModal} children={component} />
        </div>
    )
}
