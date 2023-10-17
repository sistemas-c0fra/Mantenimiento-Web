import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { map } from 'lodash'
import { NUM_PAGINATION } from '../../../Constants'
import { Pagination } from '../../Pagination'

export function TableSubArea(props) {
    const { subareas, update, deletes } = props
    const [page, setPage] = useState(0)
    const [cont, setCont] = useState(1)

    const nextPage = () => {
        if (subareas.length > page + NUM_PAGINATION) {
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

    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Area</Table.HeadCell>
                    <Table.HeadCell>Sub-Area</Table.HeadCell>
                    <Table.HeadCell>Acciones</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {map(subareas?.slice(page, page + NUM_PAGINATION), item => (
                        <Table.Row key={item.id_subarea}>
                            <Table.Cell>{item.area_data.label}</Table.Cell>
                            <Table.Cell>{item.subarea}</Table.Cell>
                            <Acciones deleteS={deletes} updateS={update} data={item} />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Pagination next={nextPage} prev={prevPage} page={cont} />
        </div>
    )
}

const Acciones = (props) => {
    const { updateS, data, deleteS } = props

    return (
        <Table.Cell>
            <button className='mr-6' onClick={() => updateS(data)}>✏️</button>
            <button onClick={() => deleteS(data)}>🗑️</button>
        </Table.Cell>
    )
}
