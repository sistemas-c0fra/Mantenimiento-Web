import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAreas } from '../../../hooks'

export function AddEditArea(props) {
    const { close, refresh, area } = props
    const { addAreas, updateAreas } = useAreas()

    const formik = useFormik({
        initialValues: initialValues(area),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (val) => {
            try {
                if (area) { await updateAreas(val, area.value) }
                else { await addAreas(val) }
                refresh()
                close()
            } catch (error) {
                console.warn(error)
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Label>Nombre del Area</Label>
                <TextInput
                    type="text"
                    id="area"
                    value={formik.values.area}
                    onChange={formik.handleChange}
                    className={formik.errors.area ? 'border-2 rounded-lg border-red-500' : ''}
                />
            </div>
            <Button
                type='submit'
                className='mt-6 w-full'
                gradientMonochrome="info"
            >
                {area ? 'Actualizar' : 'Guardar'}
            </Button>
        </form>
    )
}

function initialValues(data) {
    return {
        area: data?.label || '',
    }
}

function validationSchema() {
    return {
        area: Yup.string().required(true),
    }
}