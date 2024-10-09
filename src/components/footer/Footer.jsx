import { useTranslation } from 'react-i18next'
import style from './Footer.module.css'
import Logo from '/assets/logo.png'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<section className={style.footer}>
			<div className='max-w-[1560px] mx-auto my-0 py-0 px-5 box-border'>
				<div className={style.footer_flex}>
					<a href='#' className={style.footer_logo_link}>
						<img
							className={style.logo_pic}
							src={Logo}
							alt='This is the footer logo'
						/>
					</a>
					<div className={style.footer_right_div}>
						<div className={style.footer_phone_adres}>
							<div data-aos='fade-right' data-aos-duration='1500'>
								<a href='#'>
									<span className={style.fd_span}>
										<svg
											stroke='currentColor'
											fill='none'
											strokeWidth='2'
											viewBox='0 0 24 24'
											aria-hidden='true'
											className={style.f_icon}
											height='1em'
											width='1em'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											></path>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
											></path>
										</svg>
									</span>
									<p className={style.fd_text}>{t('footer_info')}</p>
									<svg
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
										viewBox='0 0 24 24'
										strokeLinecap='round'
										strokeLinejoin='round'
										className={style.fd_a_icon}
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'
									>
										<line x1='7' y1='17' x2='17' y2='7'></line>
										<polyline points='7 7 17 7 17 17'></polyline>
									</svg>
								</a>
								<a href='tel:+998991199933'>
									<span className={style.fd_span}>
										<svg
											stroke='currentColor'
											fill='none'
											strokeWidth='2'
											viewBox='0 0 24 24'
											aria-hidden='true'
											className={style.f_icon}
											height='1em'
											width='1em'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
											></path>
										</svg>
									</span>
									<p className={style.fd_text}>+998 95 000 30 80</p>
									<svg
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
										viewBox='0 0 24 24'
										strokeLinecap='round'
										strokeLinejoin='round'
										className={style.fd_a_icon}
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'
									>
										<line x1='7' y1='17' x2='17' y2='7'></line>
										<polyline points='7 7 17 7 17 17'></polyline>
									</svg>
								</a>
								<a href='tel:+998991199933'>
									<span className={style.fd_span}>
										<svg
											stroke='currentColor'
											fill='none'
											strokeWidth='2'
											viewBox='0 0 24 24'
											aria-hidden='true'
											className={style.f_icon}
											height='1em'
											width='1em'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
											></path>
										</svg>
									</span>
									<p className={style.fd_text}>+998 99 060 30 80</p>
									<svg
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
										viewBox='0 0 24 24'
										strokeLinecap='round'
										strokeLinejoin='round'
										className={style.fd_a_icon}
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'
									>
										<line x1='7' y1='17' x2='17' y2='7'></line>
										<polyline points='7 7 17 7 17 17'></polyline>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
