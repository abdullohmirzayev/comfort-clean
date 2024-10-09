import { useTranslation } from 'react-i18next'
import styles from './Clean.module.css'

const Services = () => {
	const { t } = useTranslation()
	return (
		<section className='w-full pb-[60px]'>
			<div className='max-w-[1560px] mx-auto my-0 px-[20px] py-0'>
				<div
					className={`${styles.clean_h_flex} w-full sm:h-[450px] md:h-[500px] lg:h-[600px] bg-no-repeat bg-cover object-cover py-0 lg:py-[30px] px-5 lg:px-[70px] flex items-center rounded-2xl`}
				>
					<div className='clean_info'>
						<div data-aos='fade-right' data-aos-duration='1500'>
							<h2
								className={` max-w-full lg:max-w-[558px] text-[#fafafa] font-[Unbounded] text-xl lg:text-4xl font-bold leading-8 lg:leading-[48px] mb-5`}
							>
								{t('clean_title')}
							</h2>
						</div>
						<div data-aos='fade-right' data-aos-duration='1500'>
							<p
								className={`max-w-full lg:max-w-[410px] text-[#fff] font-[Unbounded] text-[14px] not-italic font-light lg:font-normal leading-4 lg:leading-6 mb-6`}
							>
								{t('clean_des')}
							</p>
						</div>
						<div data-aos='fade-right' data-aos-duration='1500'>
							<a href='tel:+998950003080'>
								<p
									className={`${styles.clean_phone} text-[#fafafa] font-[Unbounded] text-[20px] lg:text-3xl not-italic font-bold leading-[48px]`}
								>
									998-95-000-30-80
								</p>
							</a>
							<a href='tel:+998990603080'>
								<p
									className={`${styles.clean_phone} text-[#fafafa] font-[Unbounded] text-[20px] lg:text-3xl not-italic font-bold leading-[48px]`}
								>
									998-99-060-30-80
								</p>
							</a>
						</div>
						<div data-aos='fade-right' className='mt-4' data-aos-duration='1500'>
							<a href='#contact' className=''>
								<button className={`${styles.btn_11_nav}`}>{t('button_link')}</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
