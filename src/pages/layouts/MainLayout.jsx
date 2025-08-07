import { Outlet } from "react-router"
import Container from "../../components/layout/Container"

const MainLayout = () => {
    return (
        <div className="py-6">
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default MainLayout