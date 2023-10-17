import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import Select from 'react-select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSubAreas } from '../../../hooks'

export function AddEditSubArea(props) {
    const { areas, refresh, close, subarea } = props
    const { addSubArea, updateSubArea } = useSubAreas()

    const formik = useFormik({
        initialValues: initialValues(subarea),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (val) => {
            try {
                if (subarea) { await updateSubArea(val, subarea.id_subarea) }
                else { await addSubArea(val) }
            } catch (error) {
                console.warn(error)
            }
            refresh()
            close()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='h-52 flex flex-col gap-12'>
                <div>
                    <Label>Area</Label>
                    <Select
                        id='area'
                        name='area'
                        options={areas}
                        value={formik.values.area}
                        onChange={(val) => formik.setFieldValue('area', val)}
                        className={formik.errors.area ? 'border-2 rounded-lg border-red-500' : ''}
                    />
                </div>
                <div>
                    <Label>Nombre del Sub-Area</Label>
                    <TextInput
                        type="text"
                        id="subarea"
                        value={formik.values.subarea}
                        onChange={formik.handleChange}
                        className={formik.errors.subarea ? 'border-2 rounded-lg border-red-500' : ''}
                    />
                </div>
            </div>
            <Button
                type='submit'
                className='mt-6 w-full'
                gradientMonochrome="info"
            >
                {subarea ? 'Actualizar' : 'Guardar'}
            </Button>
        </form>
    )
}

function initialValues(data) {
    return {
        area: data?.area_data || '',
        subarea: data?.subarea || ''
    }
}

function validationSchema() {
    return {
        area: Yup.object().required(true),
        subarea: Yup.string().required(true),
    }
}
