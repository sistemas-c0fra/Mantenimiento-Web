import React, { useState, useEffect } from 'react'
import { TitleBar, Loading, ModalBasic, TableSubArea, AddEditSubArea } from '../../components'
import { useAreas, useSubAreas } from '../../hooks'

export function SubAreaPage() {

    const { loading, subareas, getSubAreas2, deleteSubArea } = useSubAreas()
    const { getAreas, areas } = useAreas()
    const [component, setComponent] = useState(null)
    const [titleModal, setTitleModal] = useState(null)
    const [show, setShow] = useState(null)
    const [refresh, setRefresh] = useState(null)
    const showOrHide = () => setShow((prevState) => (!prevState))
    const onRefresh = () => setRefresh((prevState) => (!prevState))

    useEffect(() => {
        getSubAreas2()
        getAreas()
    }, [refresh])

    const addNewSubarea = () => {
        setTitleModal('Nueva sub-area')
        setComponent(<AddEditSubArea refresh={onRefresh} close={showOrHide} areas={areas} />)
        showOrHide()
    }

    const updateSubarea = (data) => {
        setTitleModal('Actualizar sub-area')
        setComponent(<AddEditSubArea refresh={onRefresh} close={showOrHide} subarea={data} areas={areas} />)
        showOrHide()
    }

    const deleteSubarea = async (data) => {
        const result = window.confirm(`Borrar area: ${data.subarea}`)
        if (result) {
            await deleteSubArea(data.id_subarea)
            onRefresh()
        }
    }

    return (
        <div className='flex flex-col justify-center w-9/12 h-4/5 gap-4'>
            <TitleBar title='Listado de Sub-Areas' press={addNewSubarea} />

            {loading ? (
                <Loading />
            ) : (
                <TableSubArea subareas={subareas} deletes={deleteSubarea} delete={deleteSubarea} update={updateSubarea} />
            )}
            <ModalBasic size={'lg'} show={show} showOrHide={showOrHide} title={titleModal} children={component} />
        </div>
    )
}
