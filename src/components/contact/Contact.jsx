import { useTranslation } from 'react-i18next'
import style from './Contact.module.css'

const Contact = ({ openModal, loading, sentMessage }) => {
	const { t } = useTranslation()
	return (
		<section className='w-full' id='contact'>
			<div className='max-w-[1560px] mx-auto my-0 py-0 px-5 box-border'>
				<div className={style.contact_flex}>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<div className={style.contact_left}>
							<h2 className={style.contact_title}>{t('contact_title')}</h2>

							<form
								className={style.contact_form}
								onSubmit={sentMessage}
								id='contact_form'
							>
								<input
									required
									className={style.contact_input}
									type='text'
									placeholder={t('contact_name')}
									minLength={5}
									id='contact_name'
								/>
								<label className='def_plus'>
									<input
										required
										className={`${style.contact_input} ${style.contact_number}`}
										type='number'
										placeholder='+998-90-123-45-67'
										min='9'						
										id='phone_num'
									/>
								</label>
								<button
									id={style.con_btn}
									className={style.contact_send_btn}
									type='submit'
								>
									{loading ? <>{t('contact_button_1')}</> : <>{t('contact_button_2')}</>}
								</button>
							</form>
						</div>
					</div>
					<div className={style.contact_right}>
						<img
							className={style.contact_img}
							src='/src/assets/cantact.png'
							alt='pic'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
