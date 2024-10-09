import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

const Hero = () => {
	const { t } = useTranslation()

	return (
		<section className='w-full mt-[140px]'>
			<div className='max-w-[1560px] mx-auto my-0 px-[20px] py-0'>
				<div
					className={`w-full flex items-center justify-between mt-[80px] ${styles.home_flex}`}
				>
					<div className={styles.hero_left}>
						<div className={`h-[300px] lg:h-[490px] flex flex-col`}>
							<h1
								className={`max-w-[650px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl min-h-0 text-[#fff] lg:text-[#04a2ba]  font-[Unbounded] font-medium `}
							>
								{t('hero_title')}
							</h1>
							<p className='max-w-[400px] font-[Unbounded] text-lg font-light text-[#fff] lg:text-[#272121] mt-10 lg:mt-36'>
								{t('hero_des')}
							</p>
							<div className='hidden lg:flex relative h-[300px] z-[-1]'>
								<img
									src='../../assets/hero-min-pic.png'
									className='absolute top-[-120px] right-[-35px] scale-75 w-[50%]'
									alt='like-logo'
								/>
							</div>
						</div>
						<a href='#contact'>
							<button className={`${styles.btn_11_nav}`}>
								{t('button_link')}
							</button>
						</a>
					</div>
					<div className='hidden lg:flex w-[750px] h-[700px]'>
						<img
							src='../../assets/hero-main-pic.png'
							className='w-full h-full rounded-lg hidden lg:flex'
							alt='washing rug'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
