import { URL } from '../Constants'

export async function getSubAreasApi2() {
    try {
        const url = `${URL}maquinas.php?subareas`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function addSubAreaApi(data) {
    const formData = new FormData()
    formData.append('addsubarea', 'addsubarea')
    formData.append('id_area', data.area.value)
    formData.append('subarea', data.subarea)

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

export async function updateSubAreaApi(data, id) {
    const datos = {
        id_subarea: id,
        id_area: data.area.value,
        subarea: data.subarea,
        upsubarea: 'upsubarea'
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

export async function deleteSubAreaApi(id) {
    try {
        const url = `${URL}maquinas.php?deletesubarea=deletesubarea&id_subarea=${id}`
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