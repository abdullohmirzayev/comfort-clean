import { useTranslation } from 'react-i18next'
import styles from './Service.module.css'

const Service = () => {
	const { t } = useTranslation()
	return (
		<section
			className='w-full px-0 pt-3 lg:py-[70px] overflow-x-hidden'
			id='serv'
		>
			<div className='max-w-[1560px] mx-auto my-0 px-5 py-0'>
				<div data-aos='flip-down' data-aos-duration='1500'>
					<h2 className='w-full flex items-center justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold ml-9 lg:ml-0'>
						{t('service_main_title')}
					</h2>
					<hr />
				</div>

				<div className='w-full flex items-start justify-center flex-wrap mt-11 gap-7'>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<span>
							<div className={styles.service_cards}>
								<div className='w-full h-2/4'>
									<img
										className='w-full h-full'
										src='src/assets/service-1.png'
										alt='service img'
									/>
								</div>
								<div className='p-5 justify-center'>
									<h3 className={styles.service_card_title}>
										{t('service_title_1')}
									</h3>

									<a href='#contact'>
										<button
											className={` ${styles.btn_11_nav} ${styles.service_card_btn}`}
										>
											{t('button_link')}
										</button>
									</a>
								</div>
							</div>
						</span>
					</div>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<span>
							<div className={styles.service_cards}>
								<div className='w-full h-2/4'>
									<img
										className='w-full h-full'
										src='src/assets/service-2.png'
										alt='service img'
									/>
								</div>
								<div className='p-5 justify-center'>
									<h3 className={styles.service_card_title}>
										{t('service_title_2')}
									</h3>

									<a href='#contact'>
										<button
											className={` ${styles.btn_11_nav} ${styles.service_card_btn}`}
										>
											{t('button_link')}
										</button>
									</a>
								</div>
							</div>
						</span>
					</div>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<span>
							<div className={styles.service_cards}>
								<div className='w-full h-2/4'>
									<img
										className='w-full h-full'
										src='src/assets/service-3.png'
										alt='service img'
									/>
								</div>
								<div className='p-5 justify-center'>
									<h3 className={styles.service_card_title}>
										{t('service_title_3')}
									</h3>

									<a href='#contact'>
										<button
											className={` ${styles.btn_11_nav} ${styles.service_card_btn}`}
										>
											{t('button_link')}
										</button>
									</a>
								</div>
							</div>
						</span>
					</div>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<span>
							<div className={styles.service_cards}>
								<div className='w-full h-2/4'>
									<img
										className='w-full h-full'
										src='src/assets/service-4.png'
										alt='service img'
									/>
								</div>
								<div className='p-5 justify-center'>
									<h3 className={styles.service_card_title}>
										{t('service_title_4')}
									</h3>

									<a href='#contact'>
										<button
											className={` ${styles.btn_11_nav} ${styles.service_card_btn}`}
										>
											{t('button_link')}
										</button>
									</a>
								</div>
							</div>
						</span>
					</div>
					<div data-aos='fade-right' data-aos-duration='1500'>
						<span>
							<div className={styles.service_cards}>
								<div className='w-full h-2/4'>
									<img
										className='w-full h-full'
										src='src/assets/service-5.png'
										alt='service img'
									/>
								</div>
								<div className='p-5 justify-center'>
									<h3 className={styles.service_card_title}>
										{t('service_title_5')}
									</h3>

									<a href='#contact'>
										<button
											className={` ${styles.btn_11_nav} ${styles.service_card_btn}`}
										>
											{t('button_link')}
										</button>
									</a>
								</div>
							</div>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service
