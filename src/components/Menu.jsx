import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const cerrarSesionClicked = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username')

        navigate('/login');
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="md">
            <Container>
                <Navbar.Brand href="http://localhost:5173/">BINANCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {token ? <>
                            <NavLink className={"nav-link"}>{username}</NavLink>
                            <button onClick={cerrarSesionClicked} className="btn btn-link nav-link">Cerrar sesión</button>
                        </> : <>
                            <NavLink end className={"nav-link"} to="/login">Iniciar sesión</NavLink>
                            <NavLink end className={"nav-link"} to="/register">Registrarse</NavLink>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;