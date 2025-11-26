import { useEffect, useState } from 'react'
import { deleteClient, getClients } from '../../api/client'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Clients() {
    const navigate = useNavigate()
    const [clients, setClients] = useState([])

    const handleUpdate = async (client) => {
        navigate('/update/client', { state: { client } })
    }

    const handleDelete = async (id) => {
        const response = await deleteClient(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setClients(clients => clients.filter(client => client.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allClients = await getClients()
            setClients(allClients)
        }
        carregar()
    }, [])

    return (
        <main>
            <div >
                <div>
                    <Link to={'/create/client'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {
                    clients.length == 0
                        ? <div >
                            <label>Não tem nobody</label>
                        </div>
                        : clients.map(client =>
                            <div key={client.id}>
                                <label>{client.nome}</label>
                                <label>{client.email}</label>
                                <div >
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(client)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(client.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Clients
