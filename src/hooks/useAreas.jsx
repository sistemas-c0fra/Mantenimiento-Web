import { useState } from "react"
import { getAreasApi } from '../api/MaquinasApi'

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

    return {
        loading,
        areas,
        getAreas
    }
} 