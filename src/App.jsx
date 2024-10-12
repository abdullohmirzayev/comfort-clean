import AOS from 'aos'
import 'aos/dist/aos.css'
import {
	About,
	Anons,
	Clean,
	Contact,
	Faq,
	Footer,
	Gallery,
	Hero,
	Loader,
	Navbar,
	OurWork,
	ResultRug,
	Service,
	Testimonial,
} from './components'
import { useEffect, useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import ContactModal from './components/contact/Modal'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const App = () => {
	// modal
	const [isModalOpen, setModalOpen] = useState(false)
	const [wellDoneClass, setWellDoneClass] = useState(false)
	const [loading, setLoading] = useState(false)

	// i18next
	const { t, i18n } = useTranslation()
	const lange = localStorage.getItem('i18nextLng')

	// Loader
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoader(false), 3000)
		return () => clearTimeout(timer)
	}, [])

	const sentMessage = event => {
		setLoading(true)
		event.preventDefault()
		const token = '7909293801:AAHt4yZG1Sues1wZTeFpvHOkygxJuGLvpXU'
		const chat_id = -1002325942996
		const url = `https://api.telegram.org/bot${token}/sendMessage`

		const name = document.getElementById('contact_name').value
		const phone = document.getElementById('phone_num').value

		const messageAll = `Ismi: ${name}, \nTel: ${phone}`

		axios({
			url: url,
			method: 'Post',
			data: {
				chat_id: chat_id,
				text: messageAll,
			},
		})
			.then(res => {
				openModal()
			})
			.catch(error => console.log('Yuborishda xatolik', error))
			.finally(() => {
				document.getElementById('contact_form').reset()
				setLoading(false)
			})
	}

	const handleChange = event => {
		const selectedLang = event.target.value
		i18n.changeLanguage(selectedLang)
	}

	// modal fun
	const openModal = () => {
		setModalOpen(true)
		setWellDoneClass(true)

		setTimeout(() => {
			closeModal()
		}, 5000)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	// AOS
	useEffect(() => {
		AOS.init({
			duration: 900,
			offset: 50,
			easing: 'ease-in-out',
		})
	}, [])
	return (
		<>
			{loader ? (
				<div className='h-screen flex justify-center items-center'>
					<Loader />
				</div>
			) : (
				<div id='main'>
					<Navbar handleChange={handleChange} lange={lange} />
					<Hero />
					<About />
					<Clean />
					<Service />
					<ResultRug />
					<Anons />
					<OurWork />
					<Gallery />
					<Testimonial />
					<Faq />
					<Contact
						openModal={openModal}
						loading={loading}
						sentMessage={sentMessage}
					/>
					<ContactModal
						isModalOpen={isModalOpen}
						wellDoneClass={wellDoneClass}
						closeModal={closeModal}
					/>
					<Footer />
				</div>
			)}
		</>
	)
}

export default App
