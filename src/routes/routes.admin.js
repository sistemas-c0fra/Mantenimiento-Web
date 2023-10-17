import { AdminLayout } from '../layouts'
import { HomePage, MachinePage, PartPage, AreaPage, SubAreaPage } from '../pages/Admin'

const routesAdmin = [
    {
        path: '/',
        layout: AdminLayout,
        component: HomePage,
        exact: true
    },
    {
        path: '/maquinas',
        layout: AdminLayout,
        component: MachinePage,
        exact: true
    },
    {
        path: '/partes',
        layout: AdminLayout,
        component: PartPage,
        exact: true
    },
    {
        path: '/areas',
        layout: AdminLayout,
        component: AreaPage,
        exact: true
    },
    {
        path: '/subareas',
        layout: AdminLayout,
        component: SubAreaPage,
        exact: true
    }
]

export default routesAdmin