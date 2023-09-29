import { useState } from 'react'
import { getMaquinasApi, addMaquinaApi, updateMaquinaApi, deleteMaquinaApi, getMaquiApi } from '../api/MaquinasApi'

export function useMaquinas() {

    const [loading, setLoading] = useState(false)
    const [maquinas, setMaquinas] = useState(null)

    const getMaquinas = async () => {
        try {
            setLoading(true)
            const response = await getMaquinasApi()
            setMaquinas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const getMaqui = async () => {
        try {
            setLoading(true)
            const response = await getMaquiApi()
            setMaquinas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const addMaquina = async (data) => {
        try {
            setLoading(true)
            await addMaquinaApi(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const updateMaquina = async (data, id) => {
        try {
            setLoading(true)
            await updateMaquinaApi(data, id)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const deleteMaquina = async (id) => {
        try {
            setLoading(true)
            await deleteMaquinaApi(id)
            setLoading(false)
        } catch (error) {
            setLoading()
        }
    }

    return {
        loading,
        maquinas,
        getMaquinas,
        getMaqui,
        addMaquina,
        updateMaquina,
        deleteMaquina
    }

}