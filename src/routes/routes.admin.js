import { AdminLayout } from '../layouts'
import { HomePage, MachinePage, PartPage } from '../pages/Admin'

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
    }
]

export default routesAdmin