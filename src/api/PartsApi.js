import { URL } from '../Constants'

export async function getPartesApi() {
    try {
        const url = `${URL}maquinas.php?partes`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.warn(error)
    }
}

export async function addPartApi(data) {
    const formData = new FormData()
    formData.append('addpart', 'addpart')
    formData.append('id_maquina', data.maquina.value)
    formData.append('nom_parte', data.parte)
    formData.append('obs', data.obs)

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

export async function updateParteApi(data, id) {
    const datos = {
        upparte: 'upparte',
        id_parte: id,
        id_maquina: data.maquina.value,
        nom_parte: data.parte,
        obs: data.obs
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

export async function deleteParteApi(id) {
    try {
        const url = `${URL}maquinas.php?deletepart=deletepart&id_parte=${id}`
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