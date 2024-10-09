import { useTranslation } from 'react-i18next'
import style from './Contact.module.css'

const ContactModal = ({ isModalOpen, wellDoneClass, closeModal }) => {
	const { t } = useTranslation()

	return (
		<div>
			{/* Modal */}
			{isModalOpen && (
				<div
					className={`${style.contact_sucses_modal_box} ${
						wellDoneClass ? style.well_done : ''
					}`}
				>
					<div className={style.contact_succes}>
						<h3 className={style.contact_succes_title}>
						{t('modal_info')}
							
						</h3>
						<svg
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 24 24'
							className={style.contact_succes_close}
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
							onClick={closeModal} // Close the modal when clicked
						>
							<path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z' />
						</svg>
					</div>
				</div>
			)}
		</div>
	)
}

export default ContactModal
