import { useState } from "react"
import { updateAppointment } from "../../api/appointment";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateAppointment() {
    const navigate = useNavigate()
    const [appointment, setAppointment] = useState({
        date: '',
        time: '',
        value: '',
        done: 'pendente'
    })
    // adicionar appointmentLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { appointment: prevAppointment } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAppointment({
            ...appointment,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setAppointment({ ...prevAppointment })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateAppointment(prevAppointment.id, appointment)

        if (response.status === 200) {
            navigate('/appointments')
            toast("agendamento alterado com sucesso")
        } else {
            toast("Erro ao criar agendamento")
            console.log(response)
        }
    }

    return (
        <div >
            <form>
                <div>
                    <label>Data: </label>
                    <input type="text" name="date" id='date' value={appointment.date} onChange={handleChange} />
                </div>
                <div>
                    <label>Hora: </label>
                    <input type="text" name="time" id='time' value={appointment.time} onChange={handleChange} />
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="text" name="value" id='value' value={appointment.value} onChange={handleChange} />
                </div>
                <div>
                    <label>Status: </label>
                    <input type="text" name="done" id='done' value={appointment.done} onChange={handleChange} />
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