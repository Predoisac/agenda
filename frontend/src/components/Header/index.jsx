import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/Context'
import { useContext } from 'react'

export default function Header() {
    //pegar o token
    const { token } = useContext(AuthContext)

    return (
        <header>
            <h1>Agenda</h1>
            <nav>
                {
                    !token
                        ? null
                        : <Link to='/clients'>
                            <button>
                                Clientes
                            </button>
                        </Link>
                }
                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
            </nav>
        </header>
    )
}