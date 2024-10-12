import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Gallery.module.css'
import gallery5 from '/assets/gallery-5.jpg'
import gallery4 from '/assets/gallery-4.png'
import gallery3 from '/assets/gallery-3.png'
import gallery2 from '/assets/gallery-2.png'
import gallery1 from '/assets/gallery-1.png'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../config/constants'

const Gallery = () => {
	const { t } = useTranslation()

	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 400)

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 400)
		}

		window.addEventListener('resize', handleResize)

		// Komponent o'chirilganda, event listenerni olib tashlash
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div
			className={`${styles.container} overflow-hidden max-w-[1560px] my-0 mx-auto py-0 px-4 box-border`}
		>
			<div data-aos='flip-down' data-aos-duration='1500'>
				<h2 className='w-full flex items-start justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold ml-5'>
					{t('gallery_title')}
				</h2>
			</div>
			<div className={`${styles.gallery_container}`}>
				<>
					{isSmallScreen ? (
						<>
							<Carousel
								responsive={responsive}
								showDots={false}
								autoPlay={true}
								autoPlaySpeed={2000}
								infinite
								className='w-full'
							>
								<div className={`${styles.gallery_item} ${styles.large}`}>
									<img src={gallery5} alt='Tijorat' />
									<a href='#contact' className={styles.link_button}>
										<button className={styles.link_btn}>
											{t('button_link')}
										</button>
									</a>
								</div>
								<div className={`${styles.gallery_item} ${styles.small}`}>
									<img src={gallery1} alt='ishjoy' />
									<a href='#contact' className={styles.link_button}>
										<button className={styles.link_btn}>
											{t('button_link')}
										</button>
									</a>
								</div>
								<div className={`${styles.gallery_item} ${styles.small}`}>
									<img src={gallery2} alt='usuna' />
									<a href='#contact' className={styles.link_button}>
										<button className={styles.link_btn}>
											{t('button_link')}
										</button>
									</a>
								</div>
								<div className={`${styles.gallery_item} ${styles.small}`}>
									<img src={gallery3} alt='turar joyni o`zida' />
									<a href='#contact' className={styles.link_button}>
										<button className={styles.link_btn}>
											{t('button_link')}
										</button>
									</a>
								</div>
								<div className={`${styles.gallery_item} ${styles.small}`}>
									<img src={gallery4} alt='qurutish jarayoni' />
									<a href='#contact' className={styles.link_button}>
										<button className={styles.link_btn}>
											{t('button_link')}
										</button>
									</a>
								</div>
							</Carousel>
						</>
					) : (
						<>
							<div className={`${styles.gallery_item} ${styles.large}`}>
								<img src={gallery5} alt='Tijorat' />
								<a href='#contact' className={styles.link_button}>
									<button className={styles.link_btn}>
										{t('button_link')}
									</button>
								</a>
							</div>
							<div className={`${styles.gallery_item} ${styles.small}`}>
								<img src={gallery1} alt='ishjoy' />
								<a href='#contact' className={styles.link_button}>
									<button className={styles.link_btn}>
										{t('button_link')}
									</button>
								</a>
							</div>
							<div className={`${styles.gallery_item} ${styles.small}`}>
								<img src={gallery2} alt='usuna' />
								<a href='#contact' className={styles.link_button}>
									<button className={styles.link_btn}>
										{t('button_link')}
									</button>
								</a>
							</div>
							<div className={`${styles.gallery_item} ${styles.small}`}>
								<img src={gallery3} alt='turar joyni o`zida' />
								<a href='#contact' className={styles.link_button}>
									<button className={styles.link_btn}>
										{t('button_link')}
									</button>
								</a>
							</div>
							<div className={`${styles.gallery_item} ${styles.small}`}>
								<img src={gallery4} alt='qurutish jarayoni' />
								<a href='#contact' className={styles.link_button}>
									<button className={styles.link_btn}>
										{t('button_link')}
									</button>
								</a>
							</div>
						</>
					)}
				</>
			</div>
		</div>
	)
}

export default Gallery
