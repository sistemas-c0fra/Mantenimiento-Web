import { useState } from "react"
import { getAreasApi } from '../api/MaquinasApi'
import { addAreaApi, updateAreaApi, deleteAreaApi } from '../api/AreasApi'

export function useAreas() {

    const [loading, setLoading] = useState(false)
    const [areas, setAreas] = useState(null)

    const getAreas = async () => {
        try {
            setLoading(true)
            const response = await getAreasApi()
            setAreas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const addAreas = async (data) => {
        try {
            setLoading(true)
            await addAreaApi(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const updateAreas = async (data, id) => {
        try {
            setLoading(true)
            await updateAreaApi(data, id)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const deleteAreas = async (id) => {
        try {
            setLoading(true)
            await deleteAreaApi(id)
            setLoading(false)
        } catch (error) {
            setLoading()
        }
    }

    return {
        loading,
        areas,
        getAreas,
        addAreas,
        updateAreas,
        deleteAreas
    }
} 