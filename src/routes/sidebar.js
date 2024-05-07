/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'

const iconClasses = `h-6 w-6`
const routes = [
    {
        path: '/',
        icon: <Squares2X2Icon className={iconClasses}/>, 
        name: 'Dashboard',
    },
    {
        path : '/kategori',
        icon : <BoltIcon className={iconClasses}/>,
        name : 'Kategori'
    },
    {
        path : '/barang',
        icon : <InboxArrowDownIcon className={iconClasses}/>,
        name : 'Barang',
    },
    {
        path : '/history-transaksi',
        icon : <CalendarDaysIcon className={iconClasses}/>,
        name : 'History Transaksi'
    }
]

export default routes


