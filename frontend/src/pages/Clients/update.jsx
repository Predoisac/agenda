import { useEffect, useState } from "react"
import { updateClient } from "../../api/client";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateClient() {
    const navigate = useNavigate()
    const [client, setClient] = useState({
        name: '',
        email: '',
        password: ''
    })
    // adicionar clientLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { client: prevClient } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setClient({
            ...client,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setClient({ ...prevClient, password: '' })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateClient(prevClient.id, client)

        if (response.status === 200) {
            navigate('/clients')
            toast("Cliente alterado com sucesso")
        } else {
            toast("Erro ao criar Cliente")
            console.log(response)
        }
    }

    // Adicionado
    useEffect(() => {
        setClient({ ...prevClient, password: '' })
    }, [])

    return (
        <div >
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="name" id='name' value={client.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={client.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="password" id='password' value={client.password} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}