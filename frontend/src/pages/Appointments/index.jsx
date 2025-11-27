import { useEffect, useState } from 'react'
import { deleteAppointment, getAppointments } from '../../api/appointment'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Appointments() {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])

    const handleUpdate = async (appointment) => {
        navigate('/update/appointment', { state: { appointment } })
    }

    const handleDelete = async (id) => {
        const response = await deleteAppointment(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setAppointments(appointments => appointments.filter(appointment => appointment.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allAppointments = await getAppointments()
            setAppointments(allAppointments)
        }
        carregar()
    }, [])

    return (
        <main>
            <div >
                <div>
                    <Link to={'/create/appointment'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div key='header'>
                    <label>Data</label>
                    <label>Hora</label>
                    <label>Valor</label>
                    <label>Status</label>
                </div>
                {
                    appointments.length == 0
                        ? <div >
                            <label>Não tem agendamentos</label>
                        </div>
                        : appointments.map(appointment =>
                            <div key={appointment.id}>
                                <label>{appointment.date}</label>
                                <label>{appointment.time}</label>
                                <label>{appointment.value}</label>
                                <label>{appointment.done}</label>
                                <div >
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(appointment)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(appointment.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Appointments
