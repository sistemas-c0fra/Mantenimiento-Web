import React, { useState } from 'react'
import { Table, TextInput } from 'flowbite-react'
import { map, upperCase } from 'lodash'
import { Pagination } from '../../Pagination'
import { NUM_PAGINATION } from '../../../Constants'
import Select from 'react-select'

export function TableParts(props) {
    const { parts, update, deletep, maquina } = props
    const [page, setPage] = useState(0)
    const [cont, setCont] = useState(1)
    const [filters, setFilters] = useState({ maquina: '', parte: '' })
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

    if (!filters.parte & !filters.maquina) {
        result = parts
    }
    else {
        result = parts
            .filter((item) => !filters.maquina || item.maquina_data.label.toLowerCase().includes(filters.maquina.toLocaleLowerCase()))
            .filter((item) => !filters.parte || item.parte.toLowerCase().includes(filters.parte.toLocaleLowerCase()))
    }

    return (
        <>
            <div className='flex flex-row w-full justify-between'>
                <Select
                    id='maquina'
                    className='w-80'
                    options={maquina}
                    onChange={(val) => handleFilterChange('maquina', val.label)}
                />
                <TextInput
                    id='parte'
                    type='text'
                    onChange={(e) => handleFilterChange('parte', e.target.value)}
                    className='rounded-lg w-80'
                    placeholder='Parte'
                    value={filters.parte}
                />
            </div>

            <Table>
                <Table.Head>
                    <Table.HeadCell>Maquina</Table.HeadCell>
                    <Table.HeadCell>Parte</Table.HeadCell>
                    <Table.HeadCell>Observación</Table.HeadCell>
                    <Table.HeadCell>Acciones</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {map(result?.slice(page, page + NUM_PAGINATION), (item) => (
                        <Table.Row key={item.id_parte}>
                            <Table.Cell>{upperCase(item.maquina_data.label)}</Table.Cell>
                            <Table.Cell>{upperCase(item.parte)}</Table.Cell>
                            <Table.Cell>{item.observacion}</Table.Cell>
                            <Acciones parte={item} deletePart={deletep} updatePart={update} />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Pagination next={nextPage} prev={prevPage} page={cont} />

        </>
    )
}

const Acciones = (props) => {
    const { parte, updatePart, deletePart } = props

    return (
        <Table.Cell>
            <button className='mr-6' onClick={() => updatePart(parte)}>✏️</button>
            <button onClick={() => deletePart(parte)}>🗑️</button>
        </Table.Cell>
    )
}