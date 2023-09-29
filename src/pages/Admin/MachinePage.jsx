import { useEffect, useState } from 'react'
import { TitleBar } from '../../components/titleBar'
import { useMaquinas, useAreas, useSubAreas, useSubZonas } from '../../hooks'
import { Loading, TableMachine, ModalBasic, AddEditFormMachine } from '../../components'

export function MachinePage() {
    const { getMaquinas, maquinas, loading, deleteMaquina } = useMaquinas()
    const { areas, getAreas } = useAreas()
    const { subareas, getSubAreas } = useSubAreas()
    const { subzonas, getSubZonas } = useSubZonas()
    const [show, setShow] = useState(null)
    const [component, setComponent] = useState(null)
    const [titleModal, setTitleModal] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getMaquinas()
        getAreas()
        getSubAreas()
        getSubZonas()
    }, [refresh])

    const showOrHide = () => setShow((prevState) => (!prevState))
    const onRefresh = () => setRefresh((prevState) => (!prevState))

    const addNewMachine = () => {
        setTitleModal('Nueva Maquina')
        setComponent(<AddEditFormMachine areas={areas} subareas={subareas} subzonas={subzonas} close={showOrHide} refresh={onRefresh} />)
        showOrHide()
    }

    const updateMachine = (data) => {
        setTitleModal('Actualizar Maquina')
        setComponent(<AddEditFormMachine close={showOrHide} refresh={onRefresh} areas={areas} subareas={subareas} subzonas={subzonas} maquina={data} />)
        showOrHide()
    }

    const deleteMachine = async (data) => {
        const result = window.confirm(`Borrar maquina: ${data.label}`)
        if (result) {
            await deleteMaquina(data.value)
            onRefresh()
        }
    }

    return (
        <div className='flex flex-col justify-center w-9/12 h-4/5 gap-4'>
            <TitleBar title='Listado de Maquinas' press={addNewMachine} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <TableMachine maquinas={maquinas} areas={areas} refresh={onRefresh} update={updateMachine} deletem={deleteMachine} />
                </>
            )}
            <ModalBasic show={show} showOrHide={showOrHide} title={titleModal} children={component} />
        </div>
    )
}
