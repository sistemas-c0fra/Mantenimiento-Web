import React from 'react'
import { Table } from 'flowbite-react'
import { map } from 'lodash'

export function TableArea(props) {

    const { areas, update, deleteA } = props

    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Area</Table.HeadCell>
                    <Table.HeadCell>Acciones</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {map(areas, item => (
                        <Table.Row key={item.value}>
                            <Table.Cell>{item.label}</Table.Cell>
                            <Acciones updateA={update} deleteArea={deleteA} area={item} />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

const Acciones = (props) => {
    const { updateA, deleteArea, area } = props

    return (
        <Table.Cell>
            <button className='mr-6' onClick={() => updateA(area)}>✏️</button>
            <button onClick={() => deleteArea(area)}>🗑️</button>
        </Table.Cell>
    )
}
