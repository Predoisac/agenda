import { useState } from "react"
import { createAppointment } from "../../api/appointment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const INITIAL_STATE = {
    date: '',
    time: '',
    value: '',
    done: '',
}

export default function CreateAppointment() {
    const navigate = useNavigate()
    const [appointment, setAppointment] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAppointment({
            ...appointment,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAppointment(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createAppointment(appointment)

        if (response.status === 201) {
            toast("agendamento criado com sucesso")
            navigate('/appointments')
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
                    <label>Horário: </label>
                    <input type="text" name="time" id='time' value={appointment.time} onChange={handleChange} />
                </div>
                <div>
                    <label>Valor: </label>
                    <input type="text" name="value" id='value' value={appointment.value} onChange={handleChange} />
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