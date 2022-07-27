import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TaskIndicator from '~/components/Indicator.jsx'
import InputForm from '~/components/InputForm.jsx'
import ToDoList from '~/components/ToDoList.jsx'
import { createAthleteCriteria } from '~/redux/actions'
import { useSelector } from 'react-redux'
import 'bulma/css/bulma.min.css'

const Criteria = () => {
  const dispatch = useDispatch()
  const { athleteId } = useSelector((state) => state.athlete)
  const [idCount, setIdCount] = useState(6)
  const [state, setState] = useState({
    lists: [
      {
        task: 'Fiziksel durum ve performans',
        id: 1,
        definition:
          'Sporcu, yeterli kas kuvvetine ve spora özgü eylemleri gerçekleştirme yeteneğine sahip olmalıdır.',
        // 'Athlete must have sufficient muscular strength and the ability to perform sport-specific actions. ',
      },
      {
        task: 'Maddi kaygılar',
        id: 2,
        definition:
          'Mali kayıp, iş güvenliği, olası burslar ve sözleşme teklifleri, sporcunun kararını etkileyebilir.',
        // 'Financial loss, job security, potential scholarships and contract offers can influence the decision of athlete on RTP.',
      },
      {
        task: 'Stres',
        id: 3,
        definition:
          'Rekabet duygusu, akrabaların, antrenörlerin, takım arkadaşlarının, taraftarların ve medyanın baskısı sporcuların stres seviyesini arttırmaktadır.',
        // 'Pressure of competition and external pressure of relatives, coaches, teammates, fans and media increase the stress level of athletes. ',
      },
      {
        task: 'Özgüven',
        id: 4,
        definition:
          'Spora dönüş için hazır hissetmek sporcunun özgüvenine bağlıdır. Korku ve endişe yeniden sakatlanma riskini arttırır.',
        // 'Feeling ready to RTP is based on confidence of athlete which can cause fear and anxiety which are associated with higher risk of reinjury.',
      },
      {
        task: 'Yeniden sakatlanma korkusu',
        id: 5,
        definition:
          'Yeniden yaralanma korkusu rehabilitasyon sonuçlarını olumsuz etkileyebilir ve yeniden yaralanma riskini artırabilir.',
        // 'As a psychological reaction, fear of reinjury can negatively affect rehabilitation outcomes and increase the risk of reinjury.',
      },
    ],

    input: '',
  })

  const handleChange = (e) => {
    setState({ ...state, input: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const taskLabels = state.lists.map((m) => ({
      name: m.task,
    }))
    const atheleteCriteria = Object.assign(
      {},
      {
        athleteId: athleteId,
        criteria: taskLabels,
      },
    )
    dispatch(createAthleteCriteria(atheleteCriteria))
  }

  const handleAdd = (e) => {
    let list
    e.preventDefault()
    if (state.input === '') {
      return
    } else {
      list = { task: state.input, id: idCount, definition: '' }
    }

    setState({ lists: [...state.lists, list], input: '' })
    setIdCount(idCount + 1) //sonraki liste elemanı için id güncelle.
    document.getElementById('myForm').reset()
  }

  const handleDelete = (index) => {
    const filteredList = state.lists.filter((list) => {
      return list.id !== index
    })
    setState({ lists: filteredList })
  }

  return (
    <div className="wrapper">
      <div className="card frame" style={{ height: '70vh', width: '950px' }}>
        {TaskIndicator(state.lists.length)}
        {ToDoList(state.lists, handleDelete)}
        {InputForm(handleAdd, handleChange)}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={handleSubmit} className="button">
            Onayla
          </button>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Criteria
