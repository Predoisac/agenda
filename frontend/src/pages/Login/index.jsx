import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginClient } from '../../api/client';
import { toast } from 'react-toastify';
import { AuthContext } from '../../auth/Context';

export default function Login() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleBackClick = () => {
        navigate('/');
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await loginClient(email, password)
            console.log(response)
            login(response.data.token)
            navigate('/clients')
        } catch (error) {
            toast("Email ou senha inválidos")
        }
    }

    return (
        <div >
            <form >
                <h2>Login</h2>
                <div >
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div >
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>Não possui conta? <spam>Cadastre-se</spam></p>
                <button type="submit" onClick={handleLogin}>Entrar</button>

                <button onClick={handleBackClick}>
                    Voltar
                </button>
            </form>
        </div>
    );
}