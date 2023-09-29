import { Table, TextInput } from 'flowbite-react'
import { map, upperCase } from 'lodash'
import { Pagination } from '../../Pagination'
import { useState } from 'react'
import { NUM_PAGINATION } from '../../../Constants'
import Select from 'react-select'

export function TableMachine(props) {
    const { maquinas, update, areas, deletem } = props
    const [page, setPage] = useState(0)
    const [cont, setCont] = useState(1)
    const [filters, setFilters] = useState({ area: '', maquina: '' })
    let result = []

    const nextPage = () => {
        if (result.length > page + NUM_PAGINATION) {
            setPage(page + NUM_PAGINATION)
            setCont(cont + 1)
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - NUM_PAGINATION)
            setCont(cont - 1)
        }
    }

    const handleFilterChange = (filterName, value) => {
        setPage(0)
        setCont(1)
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }))
    }

    if (!filters.area & !filters.maquina) {
        console.log(maquinas)
        result = maquinas
    }
    else {
        result = maquinas
            .filter((item) => !filters.area || item.area_data.label.toLowerCase().includes(filters.area.toLocaleLowerCase()))
            .filter((item) => !filters.maquina || item.label.toLowerCase().includes(filters.maquina.toLocaleLowerCase()))
    }

    return (
        <>
            <div className='flex flex-row w-full justify-between'>
                <Select
                    id='area'
                    className='w-80'
                    options={areas}
                    onChange={(val) => handleFilterChange('area', val.label)}
                />
                <TextInput
                    id='maqui'
                    type='text'
                    onChange={(e) => handleFilterChange('maquina', e.target.value)}
                    className='rounded-lg w-80'
                    placeholder='Product Name'
                    value={filters.maquina}
                />
            </div>

            <Table>
                <Table.Head>
                    <Table.HeadCell>Area</Table.HeadCell>
                    <Table.HeadCell>Sub-Area</Table.HeadCell>
                    <Table.HeadCell>Sub-Zona</Table.HeadCell>
                    <Table.HeadCell>Maquina</Table.HeadCell>
                    <Table.HeadCell>Acciones</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {map(result?.slice(page, page + NUM_PAGINATION), (maquina) => (
                        <Table.Row key={maquina.value}>
                            <Table.Cell>{maquina.area_data.label}</Table.Cell>
                            <Table.Cell>{maquina.subarea_data.label}</Table.Cell>
                            <Table.Cell>{maquina.zona_data.label}</Table.Cell>
                            <Table.Cell>{upperCase(maquina.label)}</Table.Cell>
                            <Acciones maquina={maquina} updateMachine={update} deleteMachine={deletem} />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Pagination next={nextPage} prev={prevPage} page={cont} />
        </>
    )
}

const Acciones = (props) => {
    const { maquina, updateMachine, deleteMachine } = props

    return (
        <Table.Cell>
            <button className='mr-6' onClick={() => updateMachine(maquina)}>✏️</button>
            <button onClick={() => deleteMachine(maquina)}>🗑️</button>
        </Table.Cell>
    )
}