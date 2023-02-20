import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Style from './style'

const dashboardLayout = (Page) => {
    return () => {
        return <Style>
            <Sidebar />
            <Header />
            <Page />
        </Style>
    }
}

export default dashboardLayout;
