import React from 'react'
import { useSelector } from 'react-redux'

//import './Indicator.style.css'

const Indicator = (number) => {
  const { firstName, lastName } = useSelector((state) => state.athlete)

  const athleteName = firstName + ' ' + lastName

  return (
    <div className="card-header">
      <h5 className="card-header-title header">
        {athleteName +
          ` lütfen karar verirken değerlendireceğiniz kriterleri seçiniz.`}
        <br />
        {`Örnek birkaç kriter aşağıda verilmiştir. Daha fazla bilgi almak için fare ile yazının üzerine geliniz.`}
        <br />
        {`Aşağıdaki listeden sizinle ilgili olmayan kriterleri çıkarabilir ya da listeye yeni kriter ekleyebilirsiniz.`}
        <br />
        {/* {`Currently  
            ${number}  
            criteria are chosen.`} */}
      </h5>
    </div>
  )
}

export default Indicator
