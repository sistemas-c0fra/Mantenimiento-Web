import { URL } from '../Constants'

export async function getAreasApi() {
    try {
        const url = `${URL}maquinas.php?maquina2`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function addAreaApi(data) {
    const formData = new FormData()
    formData.append('addarea', 'addarea')
    formData.append('area', data.area)

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

export async function updateAreaApi(data, id) {
    const datos = {
        id_area: id,
        area: data.area,
        uparea: 'uparea'
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

export async function deleteAreaApi(id) {
    try {
        const url = `${URL}maquinas.php?deletearea=deletearea&id_area=${id}`
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