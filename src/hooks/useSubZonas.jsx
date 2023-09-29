import { useState } from "react"
import { getSubZonasApi } from '../api/MaquinasApi'

export function useSubZonas() {

    const [loading, setLoading] = useState(false)
    const [subzonas, setSubZonas] = useState(null)

    const getSubZonas = async () => {
        try {
            setLoading(true)
            const response = await getSubZonasApi()
            setSubZonas(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return {
        loading,
        subzonas,
        getSubZonas
    }
} 