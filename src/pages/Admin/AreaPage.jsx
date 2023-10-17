import React, { useEffect } from 'react'
import { TitleBar, Loading, TableArea, AddEditArea, ModalBasic } from '../../components'
import { useAreas } from '../../hooks'
import { useState } from 'react'

export function AreaPage() {

    const { loading, areas, getAreas, deleteAreas } = useAreas()
    const [component, setComponent] = useState(null)
    const [titleModal, setTitleModal] = useState(null)
    const [show, setShow] = useState(null)
    const [refresh, setRefresh] = useState(null)

    useEffect(() => {
        getAreas()
    }, [refresh])
    const showOrHide = () => setShow((prevState) => (!prevState))
    const onRefresh = () => setRefresh((prevState) => (!prevState))

    const addNewArea = () => {
        setTitleModal('Nueva Area')
        setComponent(<AddEditArea close={showOrHide} refresh={onRefresh} />)
        showOrHide()
    }

    const updateArea = (data) => {
        setTitleModal('Actualizar Area')
        setComponent(<AddEditArea close={showOrHide} refresh={onRefresh} area={data} />)
        showOrHide()
    }

    const deleteArea = async (data) => {
        const result = window.confirm(`Borrar area: ${data.label}`)
        if (result) {
            await deleteAreas(data.value)
            onRefresh()
        }
    }

    return (
        <div className='flex flex-col justify-center w-9/12 h-4/5 gap-4'>
            <TitleBar title='Listado de Areas' press={addNewArea} />

            {loading ? (
                <Loading />
            ) : (
                <TableArea areas={areas} update={updateArea} deleteA={deleteArea} />
            )}
            <ModalBasic size={'md'} show={show} showOrHide={showOrHide} title={titleModal} children={component} />
        </div>
    )
}
