import { useState } from "react"
import { getSubAreasApi } from '../api/MaquinasApi'
import { addSubAreaApi, deleteSubAreaApi, getSubAreasApi2, updateSubAreaApi } from '../api/SubAreasApi'

export function useSubAreas() {

    const [loading, setLoading] = useState(false)
    const [subareas, setSubAreas] = useState(null)

    const getSubAreas = async () => {
        try {
            setLoading(true)
            const response = await getSubAreasApi()
            setSubAreas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const getSubAreas2 = async () => {
        try {
            setLoading(true)
            const response = await getSubAreasApi2()
            setSubAreas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const addSubArea = async (data) => {
        try {
            setLoading(true)
            await addSubAreaApi(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const updateSubArea = async (data, id) => {
        try {
            setLoading(true)
            await updateSubAreaApi(data, id)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const deleteSubArea = async (id) => {
        try {
            setLoading(true)
            await deleteSubAreaApi(id)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return {
        loading,
        subareas,
        getSubAreas,
        getSubAreas2,
        addSubArea,
        updateSubArea,
        deleteSubArea
    }
} 