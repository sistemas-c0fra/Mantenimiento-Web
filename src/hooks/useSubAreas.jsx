import { useState } from "react"
import { getSubAreasApi } from '../api/MaquinasApi'

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

    return {
        loading,
        subareas,
        getSubAreas
    }
} 