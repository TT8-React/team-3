import Sidebar from '../../components/Sidebar'
import Style from './style'

const dashboardLayout = (Page) => {
    return () => {
        return <Style>
            <Sidebar />
            <Page />
        </Style>
    }
}

export default dashboardLayout;
