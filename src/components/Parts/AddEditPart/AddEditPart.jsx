import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import Select from 'react-select'
import { useParts } from '../../../hooks'
import * as Yup from 'yup'

export function AddEditPart(props) {
    const { refresh, close, maquina, parte } = props
    const { addPart, updatePart } = useParts()

    const formik = useFormik({
        initialValues: initialValues(parte),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (val) => {
            try {
                if (parte) { await updatePart(val, parte.id_parte) }
                else { await addPart(val) }
            } catch (error) {
                console.warn(error)
            }
            refresh()
            close()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6 py-6'>
            <div>
                <Label>Maquina</Label>
                <Select
                    id='maquina'
                    name='maquina'
                    options={maquina}
                    value={formik.values.maquina}
                    onChange={(val) => formik.setFieldValue('maquina', val)}
                    className={formik.errors.maquina ? 'border-2 rounded-lg border-red-500' : ''}
                />
            </div>
            <div>
                <Label>Parte</Label>
                <TextInput
                    type="text"
                    id="parte"
                    value={formik.values.parte}
                    onChange={formik.handleChange}
                    className={formik.errors.parte ? 'border-2 rounded-lg border-red-500' : ''}
                />
            </div>
            <div>
                <Label>Observación</Label>
                <TextInput
                    type="text"
                    id="obs"
                    value={formik.values.obs}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <Button
                    className='w-full'
                    type='submit'
                    gradientMonochrome="info"
                >
                    Guardar
                </Button>
            </div>
        </form>
    )
}

function initialValues(data) {
    return {
        maquina: data?.maquina_data || '',
        parte: data?.parte || '',
        obs: data?.observacion || ''
    }
}

function validationSchema() {
    return {
        maquina: Yup.object().required(),
        parte: Yup.string().required(),
        obs: Yup.string()
    }
}
