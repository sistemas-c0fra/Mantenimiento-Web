import { URL } from '../Constants'

export async function getMaquinasApi() {
    try {
        const url = `${URL}maquinas.php?maquina2`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function getMaquiApi() {
    try {
        const url = `${URL}maquinas.php?maqui`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function getAreasApi() {
    try {
        const url = `${URL}maquinas.php?areas`
        const response = await fetch(url)
        const result = await response.json()
        return result.map((item) => (
            {
                value: item.id_area,
                label: item.area
            }
        ))
    } catch (error) {
        console.warn(error)
    }
}

export async function getSubAreasApi() {
    try {
        const url = `${URL}maquinas.php?subareas`
        const response = await fetch(url)
        const result = await response.json()
        return result.map((item) => (
            {
                value: item.id_subarea,
                label: item.subarea
            }
        ))
    } catch (error) {
        console.warn(error)
    }
}

export async function getSubZonasApi() {
    try {
        const url = `${URL}maquinas.php?subzona`
        const response = await fetch(url)
        const result = await response.json()
        return result.map((item) => (
            {
                value: item.id_subzona,
                label: item.subzona
            }
        ))
    } catch (error) {
        console.warn(error)
    }
}

export async function addMaquinaApi(data) {
    const formData = new FormData()
    formData.append('addmaquina', 'addmaquina')
    formData.append('area', data.area.value)
    formData.append('subarea', data.subarea.value)
    formData.append('subzona', data.subzona.value)
    formData.append('maquina', data.maquina)
    formData.append('marca', data.marca)
    formData.append('modelo', data.modelo)
    formData.append('pot_cap', data.pot_cap)

    try {
        const url = `${URL}maquinas.php`
        const params = {
            method: 'POST',
            body: formData
        }
        const response = await fetch(url, params)
        const result = response.text()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function updateMaquinaApi(data, id) {
    const datos = {
        id_maquina: id,
        area: data.area.value,
        subarea: data.subarea.value,
        subzona: data.subzona.value,
        maquina: data.maquina,
        marca: data.marca,
        modelo: data.modelo,
        pot_cap: data.pot_cap,
        upmaquina: 'upmaquina'
    }

    try {
        const url = `${URL}maquinas.php`
        const params = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(datos)
        }
        const response = await fetch(url, params)
        const result = response.text()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function deleteMaquinaApi(id) {
    try {
        const url = `${URL}maquinas.php?deletemaqui=deletemaqui&id_maquina=${id}`
        const params = {
            method: 'DELETE',
        }
        const response = await fetch(url, params)
        const result = await response.text()
        return result
    } catch (error) {
        console.warn(error)
    }
}
