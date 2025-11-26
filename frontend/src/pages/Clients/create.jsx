import { useState } from "react"
import { createClient } from "../../api/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const INITIAL_STATE = {
    nome: '',
    email: '',
    password: '',
}

export default function CreateClient() {
    const navigate = useNavigate()
    const [client, setClient] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setClient({
            ...client,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setClient(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createClient(client)

        if (response.status === 201) {
            toast("Cliente criado com sucesso")
            navigate('/clients')
        } else {
            toast("Erro ao criar Cliente")
            console.log(response)
        }
    }

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
                <div >
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