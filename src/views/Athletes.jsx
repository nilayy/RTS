import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardBody, Col, CardTitle, CardHeader } from 'reactstrap'
import AthleteIndicator from '~/components/AthleteIndicator.jsx'
import AthleteList from '~/components/AthleteList.jsx'
import { getAthletes } from '~/redux/actions'
import { useSelector } from 'react-redux'
import 'bulma/css/bulma.min.css'
import { getAtheleteDashboardResult } from '~/redux/actions'

const Athletes = () => {
  const dispatch = useDispatch()
  const { athleteList, fetchingState } = useSelector((state) => state.athlete)
  const [state, setState] = useState({
    list: [],
    athleteId: null,
    scenario:
      'Profesyonel bir sporcu olduğunuzu hayal edin. Birkaç gün boyunca omuz ağrısı ile uğraşmak zorunda kaldınız. Perşembe günkü antrenman sırasında ağrı o kadar kötü oldu ki devam eden antrenmanı yarıda bıraktınız. Ancak sizin ya da takımınızın şampiyonluk müsabakası on gün sonra ve müsabakaya katılmazsanız, sponsorluk anlaşmalarını kaybedeceksiniz. Antrenörünüz sakatlığınız için sizi hemen doktor randevusuna gönderiyor. Derinlemesine bir muayeneden sonra, doktor supraspinatus tendonunuzda kısmi bir yırtık teşhis ediyor ve tamamen iyileşene kadar müsabakalara çıkmamanızı öneriyor. Aksi takdirde omuzunuzdaki hasar ciddileşebilir ve tendonun tamamen yırtılmasına sebep olabilir. Şampiyonluk müsabakasına katılıp katılmayacağınızı antrenörünüze bildirmeniz gerekiyor. Şimdi üç alternatif arasından bir karar vermelisiniz. Alternatif A: Müsabakadan çekilmeye ve iyileşmeyi beklemeye karar verdiniz. Alternatif B: Müsabakada oynamamaya fakat omuz askısı ile antrenmanlara gelmeye karar verdiniz. Alternatif C: Ağrı kesici ile omuz ağrınızı baskılayarak şampiyonluk müsabakasına katılmaya karar verdiniz.',
  })

  useEffect(() => {
    dispatch(getAthletes())
  }, [])

  useEffect(() => {
    if (fetchingState === 'success') {
      setState({
        ...state,
        list: athleteList,
      })
    }
  }, [athleteList])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state.athleteId)
    dispatch(getAtheleteDashboardResult(state.athleteId))
  }

  const handleSelected = (index) => {
    setState({
      ...state,
      athleteId: index,
    })
  }
  const onChangeValue = (event) => {
    setState({ ...state, scenario: event.target.value })
  }

  return (
    <div>
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Lütfen aşağıdaki senaryoları ve alternatifleri okuyunuz ve işlem
            yapmak istediğiniz sporcuyu seçiniz.
          </CardHeader>
        </Card>
      </div>
      <div className="wrapper">
        <Col md={5}>
          <Card>
            <CardHeader>
              <div onChange={onChangeValue}>
                <input
                  type="radio"
                  defaultChecked
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
                  value="Profesyonel bir sporcu olduğunuzu hayal edin. Rekabetçi bir oyun sırasında, alt bacağınızın arkasında şişlik ile birlikte yoğun bir ağrı hissettiniz ve oyunu tamamlayamadınız. Hemen doktora gittiniz ve doktor size, ameliyat ve ardından da uzun bir rehabilitasyon tedavisi gerektiren aşil tendonu kopması teşhisi koydu. Bu süreçte spor kulübünüz sözleşmenizi feshetti ve sizin yerinize yeni sporcular kulübe transfer edildi. Ameliyat sonrası altı ay süren bir rehabilitasyon sürecinden sonra, biyomedikal ve fiziksel iyileşmeniz tamamlandı ve spora geri dönmeniz için izin verildi. Ancak sakatlık sonrasında fiziksel performansınız sizin ve hayranlarınızın beklediği seviyenin çok daha altında kaldı. Spor sezonu yakında başlayacağı için sezonda oynayıp oynamayacağınıza karar vermeniz gerekiyor. Şimdi üç alternatif arasında karar vermelisiniz. Alternatif A: Bu sezonu pas geçip, gelecek sezona hazırlanmaya karar verdiniz. Alternatif B: Performans düşüklüğüne ve oynama süresinin az olmasına rağmen bir spor kulübü bulup mevcut sezonda oynamaya karar verdiniz. Alternatif C: Bir spor kulübüyle anlaşarak hareket kısıtlaması ile sadece antrenmanlara katılmaya karar verdiniz."
                  checked={
                    state.scenario ===
                    'Profesyonel bir sporcu olduğunuzu hayal edin. Rekabetçi bir oyun sırasında, alt bacağınızın arkasında şişlik ile birlikte yoğun bir ağrı hissettiniz ve oyunu tamamlayamadınız. Hemen doktora gittiniz ve doktor size, ameliyat ve ardından da uzun bir rehabilitasyon tedavisi gerektiren aşil tendonu kopması teşhisi koydu. Bu süreçte spor kulübünüz sözleşmenizi feshetti ve sizin yerinize yeni sporcular kulübe transfer edildi. Ameliyat sonrası altı ay süren bir rehabilitasyon sürecinden sonra, biyomedikal ve fiziksel iyileşmeniz tamamlandı ve spora geri dönmeniz için izin verildi. Ancak sakatlık sonrasında fiziksel performansınız sizin ve hayranlarınızın beklediği seviyenin çok daha altında kaldı. Spor sezonu yakında başlayacağı için sezonda oynayıp oynamayacağınıza karar vermeniz gerekiyor. Şimdi üç alternatif arasında karar vermelisiniz. Alternatif A: Bu sezonu pas geçip, gelecek sezona hazırlanmaya karar verdiniz. Alternatif B: Performans düşüklüğüne ve oynama süresinin az olmasına rağmen bir spor kulübü bulup mevcut sezonda oynamaya karar verdiniz. Alternatif C: Bir spor kulübüyle anlaşarak hareket kısıtlaması ile sadece antrenmanlara katılmaya karar verdiniz.'
                  }
                />
                Senaryo 2
              </div>
            </CardHeader>
            <CardBody>
              <CardTitle>{state.scenario}</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col md={5}>
          <div
            className="card frame"
            style={{ width: '600px', height: '60vh' }}
          >
            {AthleteIndicator()}
            {AthleteList(state.list, handleSelected)}
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
              <br />
            </div>
            <br />
          </div>
        </Col>
      </div>
    </div>
  )
}

export default Athletes
