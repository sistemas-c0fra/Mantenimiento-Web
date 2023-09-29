import { Button, Label, TextInput } from 'flowbite-react'
import { useFormik, validateYupSchema } from 'formik'
import Select from 'react-select'
import * as Yup from 'yup'
import { useMaquinas } from '../../../hooks'

export function AddEditFormMachine(props) {
  const { areas, subareas, subzonas, refresh, close, maquina } = props
  const { addMaquina, updateMaquina } = useMaquinas()

  const formik = useFormik({
    initialValues: initialValues(maquina),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (val) => {
      try {
        if (maquina) { await updateMaquina(val, maquina.value) }
        else { await addMaquina(val) }
        refresh()
        close()
      } catch (error) {
        console.warn(error)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-3 gap-6" >
        <div className='flex flex-col gap-4'>
          <Label>Area</Label>
          <Select
            id='area'
            name='area'
            options={areas}
            value={formik.values.area}
            onChange={(val) => formik.setFieldValue('area', val)}
            className={formik.errors.area ? 'border-2 rounded-lg border-red-500' : ''}
          />
          <Label>Maquina</Label>
          <TextInput
            type="text"
            id="maquina"
            value={formik.values.maquina}
            onChange={formik.handleChange}
            className={formik.errors.maquina ? 'border-2 rounded-lg border-red-500' : ''}
          />
          <Label>Potencia - Capacidad</Label>
          <TextInput
            type="text"
            id="pot_cap"
            value={formik.values.pot_cap}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <Label htmlFor="input1" >Sub-Area</Label>
          <Select
            id='subarea'
            name='subarea'
            options={subareas}
            value={formik.values.subarea}
            onChange={(val) => formik.setFieldValue('subarea', val)}
            className={formik.errors.subarea ? 'border-2 rounded-lg border-red-500' : ''}
          />
          <Label htmlFor="input1" >Marca</Label>
          <TextInput
            type="text"
            id="marca"
            value={formik.values.marca}
            onChange={formik.handleChange}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <Label htmlFor="input1" >Zona</Label>
          <Select
            id='subzona'
            name='subzona'
            options={subzonas}
            value={formik.values.subzona}
            onChange={(val) => formik.setFieldValue('subzona', val)}
            className={formik.errors.subzona ? 'border-2 rounded-lg border-red-500' : ''}
          />
          <Label htmlFor="input1" >Modelo</Label>
          <TextInput
            type="text"
            id="modelo"
            value={formik.values.modelo}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <Button
        type='submit'
        className='mt-6 w-full'
        gradientMonochrome="info"
      >
        {maquina ? 'Actualizar' : 'Guardar'}
      </Button>
    </form>
  )
}

function initialValues(data) {
  return {
    area: data?.area_data || '',
    subarea: data?.subarea_data || '',
    subzona: data?.zona_data || '',
    maquina: data?.label || '',
    marca: data?.marca || '',
    modelo: data?.modelo || '',
    pot_cap: data?.pot_cap || ''
  }
}

function validationSchema() {
  return {
    area: Yup.object().required(true),
    subarea: Yup.object().required(true),
    subzona: Yup.object().required(true),
    maquina: Yup.string().required(true),
    marca: Yup.string(),
    modelo: Yup.string(),
    pot_cap: Yup.string()
  }
}


