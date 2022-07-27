import React, { useState } from 'react'
import { createAthlete } from '~/redux/actions'
import { useDispatch } from 'react-redux'
import { handleNext } from './athletePage'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    id: null,
    scenario: '',
    scenarioNo: '',
  })

  let history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const athlete = Object.assign(
      {},
      {
        id: 0,
        firstName: state.firstName,
        lastName: state.lastName,
        detail: state.scenarioNo,
      },
    )
    dispatch(createAthlete(athlete))
    //history.push('/criteria')
    //handleNext(1)
  }

  const onInputchange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const onChangeValue = (event) => {
    setState({
      ...state,
      scenario: event.target.value,
      scenarioNo: event.target.name,
    })
  }

  return (
    <div className="wrapper">
      <div className="card frame" style={{ height: '73vh', width: '800px' }}>
        <div className="card-header">
          <h5 className="card-header-title header">Sporcu Kayıt Formu</h5>
        </div>
        <form className="signup" onSubmit={handleSubmit} id="signUp">
          <div className="mb-3">
            <input
              className="input is-link"
              type="text"
              value={state.firstName}
              name="firstName"
              placeholder="Adınız"
              onChange={onInputchange}
            />
          </div>
          <div className="mb-3">
            <input
              className="input is-link"
              type="text"
              value={state.lastName}
              name="lastName"
              placeholder="Soyadınız"
              onChange={onInputchange}
            />
          </div>
          <div onChange={onChangeValue}>
            <input
              type="radio"
              defaultChecked
              name="Senaryo1"
              value="Profesyonel bir sporcu olduğunuzu hayal edin. Birkaç gün boyunca omuz ağrısı ile uğraşmak zorunda kaldınız. Perşembe günkü antrenman sırasında ağrı o kadar kötü oldu ki devam eden antrenmanı yarıda bıraktınız. Ancak sizin ya da takımınızın şampiyonluk müsabakası on gün sonra ve müsabakaya katılmazsanız, sponsorluk anlaşmalarını kaybedeceksiniz. Antrenörünüz sakatlığınız için sizi hemen doktor randevusuna gönderiyor. Derinlemesine bir muayeneden sonra, doktor supraspinatus tendonunuzda kısmi bir yırtık teşhis ediyor ve tamamen iyileşene kadar müsabakalara çıkmamanızı öneriyor. Aksi takdirde omuzunuzdaki hasar ciddileşebilir ve tendonun tamamen yırtılmasına sebep olabilir. Şampiyonluk müsabakasına katılıp katılmayacağınızı antrenörünüze bildirmeniz gerekiyor. Şimdi üç alternatif arasından bir karar vermelisiniz. Alternatif A: Müsabakadan çekilmeye ve iyileşmeyi beklemeye karar verdiniz. Alternatif B: Müsabakada oynamamaya fakat omuz askısı ile antrenmanlara gelmeye karar verdiniz. Alternatif C: Ağrı kesici ile omuz ağrınızı baskılayarak şampiyonluk müsabakasına katılmaya karar verdiniz."
              checked={
                state.scenario ===
                'Profesyonel bir sporcu olduğunuzu hayal edin. Birkaç gün boyunca omuz ağrısı ile uğraşmak zorunda kaldınız. Perşembe günkü antrenman sırasında ağrı o kadar kötü oldu ki devam eden antrenmanı yarıda bıraktınız. Ancak sizin ya da takımınızın şampiyonluk müsabakası on gün sonra ve müsabakaya katılmazsanız, sponsorluk anlaşmalarını kaybedeceksiniz. Antrenörünüz sakatlığınız için sizi hemen doktor randevusuna gönderiyor. Derinlemesine bir muayeneden sonra, doktor supraspinatus tendonunuzda kısmi bir yırtık teşhis ediyor ve tamamen iyileşene kadar müsabakalara çıkmamanızı öneriyor. Aksi takdirde omuzunuzdaki hasar ciddileşebilir ve tendonun tamamen yırtılmasına sebep olabilir. Şampiyonluk müsabakasına katılıp katılmayacağınızı antrenörünüze bildirmeniz gerekiyor. Şimdi üç alternatif arasından bir karar vermelisiniz. Alternatif A: Müsabakadan çekilmeye ve iyileşmeyi beklemeye karar verdiniz. Alternatif B: Müsabakada oynamamaya fakat omuz askısı ile antrenmanlara gelmeye karar verdiniz. Alternatif C: Ağrı kesici ile omuz ağrınızı baskılayarak şampiyonluk müsabakasına katılmaya karar verdiniz.'
              }
            />
            Senaryo 1
            <input
              style={{
                marginLeft: '170px',
              }}
              type="radio"
              name="Senaryo2"
              value="Profesyonel bir sporcu olduğunuzu hayal edin. Rekabetçi bir oyun sırasında, alt bacağınızın arkasında şişlik ile birlikte yoğun bir ağrı hissettiniz ve oyunu tamamlayamadınız. Hemen doktora gittiniz ve doktor size, ameliyat ve ardından da uzun bir rehabilitasyon tedavisi gerektiren aşil tendonu kopması teşhisi koydu. Bu süreçte spor kulübünüz sözleşmenizi feshetti ve sizin yerinize yeni sporcular kulübe transfer edildi. Ameliyat sonrası altı ay süren bir rehabilitasyon sürecinden sonra, biyomedikal ve fiziksel iyileşmeniz tamamlandı ve spora geri dönmeniz için izin verildi. Ancak sakatlık sonrasında fiziksel performansınız sizin ve hayranlarınızın beklediği seviyenin çok daha altında kaldı. Spor sezonu yakında başlayacağı için sezonda oynayıp oynamayacağınıza karar vermeniz gerekiyor. Şimdi üç alternatif arasında karar vermelisiniz. Alternatif A: Bu sezonu pas geçip, gelecek sezona hazırlanmaya karar verdiniz. Alternatif B: Performans düşüklüğüne ve oynama süresinin az olmasına rağmen bir spor kulübü bulup mevcut sezonda oynamaya karar verdiniz. Alternatif C: Bir spor kulübüyle anlaşarak hareket kısıtlaması ile sadece antrenmanlara katılmaya karar verdiniz."
              checked={
                state.scenario ===
                'Profesyonel bir sporcu olduğunuzu hayal edin. Rekabetçi bir oyun sırasında, alt bacağınızın arkasında şişlik ile birlikte yoğun bir ağrı hissettiniz ve oyunu tamamlayamadınız. Hemen doktora gittiniz ve doktor size, ameliyat ve ardından da uzun bir rehabilitasyon tedavisi gerektiren aşil tendonu kopması teşhisi koydu. Bu süreçte spor kulübünüz sözleşmenizi feshetti ve sizin yerinize yeni sporcular kulübe transfer edildi. Ameliyat sonrası altı ay süren bir rehabilitasyon sürecinden sonra, biyomedikal ve fiziksel iyileşmeniz tamamlandı ve spora geri dönmeniz için izin verildi. Ancak sakatlık sonrasında fiziksel performansınız sizin ve hayranlarınızın beklediği seviyenin çok daha altında kaldı. Spor sezonu yakında başlayacağı için sezonda oynayıp oynamayacağınıza karar vermeniz gerekiyor. Şimdi üç alternatif arasında karar vermelisiniz. Alternatif A: Bu sezonu pas geçip, gelecek sezona hazırlanmaya karar verdiniz. Alternatif B: Performans düşüklüğüne ve oynama süresinin az olmasına rağmen bir spor kulübü bulup mevcut sezonda oynamaya karar verdiniz. Alternatif C: Bir spor kulübüyle anlaşarak hareket kısıtlaması ile sadece antrenmanlara katılmaya karar verdiniz.'
              }
            />
            Senaryo 2
          </div>
          <div>
            <textarea
              className="textarea is-link"
              type="text"
              name="detail"
              value={state.scenario}
              placeholder=""
              rows="12"
              disabled="true"
              onChange={onInputchange}
            />
          </div>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button className="button">Onayla</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
