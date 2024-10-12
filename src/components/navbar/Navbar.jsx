import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.css'
import Logo from '/assets/logo.png'

const Navbar = ({ handleChange, lange }) => {
	const [scrolled, setScrolled] = useState(false)
	const [toggleNav, setToggleNav] = useState(false)

	const toggleHandler = () => setToggleNav(prev => !prev)

	const { t } = useTranslation()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section
			className={`w-[100%] p-[20px 0] fixed top-0 transition-all duration-300 opacity-90 bg-white z-[100000] ${
				scrolled ? 'shadow-md shadow-gray-200' : ''
			}`}
		>
			<div className={`max-w-[1560px] mx-auto my-0 px-[20px] py-1 lg:py-5`}>
				<div className={`w-[100%] flex items-center justify-between`}>
					<a
						className={`flex items-center justify-center w-[300px] h-[80px] cursor-pointer ${styles.nav_logo_link}`}
						href='#main'
					>
						<img src={Logo} alt='logo' className={`${styles.nav_logo_link}`} />
					</a>
					<div className={`flex items-center justify-between max-w-[950px]`}>
						<div className={`hidden md:hidden lg:flex items-center mr-[20px]`}>
							<a href='#main' className={`${styles.nav_links} text-[#00000098]`}>
								{t('nav_item_1')}
							</a>
							<a href='#about' className={`${styles.nav_links} text-[#00000098]`}>
								{t('nav_item_2')}
							</a>
							<a href='#serv' className={`${styles.nav_links} text-[#00000098]`}>
								{t('nav_item_3')}
							</a>
							<a href='#comment' className={`${styles.nav_links} text-[#00000098]`}>
								{t('nav_item_4')}
							</a>
							<a href='#faq' className={`${styles.nav_links} text-[#00000098]`}>
								{t('nav_item_5')}
							</a>
							<a href='#contact' className={`hidden`}>
								<button className={`${styles.btn_11_nav}`}>
									{t('button_link')}
								</button>
							</a>
						</div>

						<div className={`flex items-center`}>
							<div className={styles.custom_dropdown}>
								<select
									className={styles.lang_option}
									name='Lang'
									id='lang'
									onChange={handleChange}
									value={lange}
								>
									<option className={styles.lang_option} value='uz'>
										O'zbek
									</option>
									<option className={styles.lang_option} value='ru'>
										Русский
									</option>
									<option className={styles.lang_option} value='en'>
										English
									</option>
								</select>
							</div>
							<div
								className='flex lg:hidden text-xl sm:text-3xl md:text-3xl w-5 md:w-10 sm:mr-1'
								onClick={toggleHandler}
							>
								<i className={toggleNav ? 'fas fa-times' : 'fas fa-bars'}></i>

								<div
									className={`${
										toggleNav ? 'flex' : 'hidden'
									} p-6 absolute top-20 md:top-24 right-0 left-0 my-2 w-full bg-[#7d7777] ${
										styles.sidebar
									}`}
								>
									<div className={`flex items-center justify-center flex-1`}>
										<a href='#main' className={`${`${styles.nav_links} tex--[#fff]`}`}>
											{t('nav_item_1')}
										</a>
										<a href='#about' className={`${styles.nav_links} tex--[#fff]`}>
											{t('nav_item_2')}
										</a>
										<a href='#serv' className={`${styles.nav_links} tex--[#fff]`}>
											{t('nav_item_3')}
										</a>
										<a href='#comment' className={`${styles.nav_links} tex--[#fff]`}>
											{t('nav_item_4')}
										</a>
										<a href='#faq' className={`${styles.nav_links} tex--[#fff]`}>
											{t('nav_item_5')}
										</a>
									</div>
								</div>
							</div>
							<a href='#contact' className='gg1 hidden lg:flex'>
								<button className={`${styles.btn_11_nav}`}>
									{t('button_link')}
									<div className='dot'></div>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
