import { useTranslation } from 'react-i18next'
import styles from './Gallery.module.css'

const Gallery = () => {
	const { t } = useTranslation()

	return (
		<div className={`${styles.container} overflow-hidden`}>
			<div data-aos='flip-down' data-aos-duration='1500'>
				<h2 className='w-full flex items-start justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold ml-5'>
					{t('gallery_title')}
				</h2>
			</div>
			<div className={styles.gallery_container}>
				<div className={`${styles.gallery_item} ${styles.large}`}>
					<img src='/public/assets/gallery-5.jpg' alt='Tijorat' />
					<a href='#contact' className={styles.link_button}>
						<button className={styles.link_btn}>{t('button_link')}</button>
					</a>
				</div>

				<div className={`${styles.gallery_item} ${styles.small}`}>
					<img src='/public/assets/gallery-1.png' alt='ishjoy' />
					<a href='#contact' className={styles.link_button}>
						<button className={styles.link_btn}>{t('button_link')}</button>
					</a>
				</div>
				<div className={`${styles.gallery_item} ${styles.small}`}>
					<img src='/public/assets/gallery-2.png' alt='usuna' />
					<a href='#contact' className={styles.link_button}>
						<button className={styles.link_btn}>{t('button_link')}</button>
					</a>
				</div>
				<div className={`${styles.gallery_item} ${styles.small}`}>
					<img src='/public/assets/gallery-3.png' alt='turar joyni o`zida' />
					<a href='#contact' className={styles.link_button}>
						<button className={styles.link_btn}>{t('button_link')}</button>
					</a>
				</div>
				<div className={`${styles.gallery_item} ${styles.small}`}>
					<img src='/public/assets/gallery-4.png' alt='qurutish jarayoni' />
					<a href='#contact' className={styles.link_button}>
						<button className={styles.link_btn}>{t('button_link')}</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Gallery
