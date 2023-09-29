import { useState } from 'react'
import { getPartesApi, addPartApi, updateParteApi, deleteParteApi } from '../api/PartsApi'

export function useParts() {
    const [loading, setLoading] = useState(false)
    const [partes, setPartes] = useState([])

    const getPartes = async () => {
        try {
            setLoading(true)
            const response = await getPartesApi()
            setPartes(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const addPart = async (data) => {
        try {
            setLoading(true)
            await addPartApi(data)
            setLoading(false)
        } catch (error) {
            console.warn(error)
            setLoading(false)
        }
    }

    const updatePart = async (data, id) => {
        try {
            setLoading(true)
            await updateParteApi(data, id)
            setLoading(false)
        } catch (error) {
            console.warn(error)
            setLoading(false)
        }
    }

    const deletePart = async (id) => {
        try {
            setLoading(true)
            await deleteParteApi(id)
            setLoading(false)
        } catch (error) {
            setLoading()
        }
    }

    return {
        loading,
        partes,
        getPartes,
        addPart,
        updatePart,
        deletePart
    }
}