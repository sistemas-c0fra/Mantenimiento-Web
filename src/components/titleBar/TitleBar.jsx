import { Button } from 'flowbite-react'

export function TitleBar(props) {
    const { press, title } = props

    return (
        <div className='flex w-full justify-between items-center py-2'>
            <span className='text-2xl font-semibold'>
                {title}
            </span>
            <Button
                onClick={press}
                gradientMonochrome="success"
                className='w-80'
            >
                Añadir
            </Button>
        </div>
    )
}

TitleBar.defaultProps = {
    title: 'Titulo',
}