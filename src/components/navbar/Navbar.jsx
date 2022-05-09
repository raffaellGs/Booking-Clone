import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className='logo'>BookingClone</span>
                <div className="navItens">
                    <button className="navButton">Registrar</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar