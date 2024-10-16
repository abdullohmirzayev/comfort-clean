import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../config/constants'
import styles from './Anons.module.css'

import video1 from '/assets/anons-1.mp4'
import video2 from '/assets/anons-2.mp4'
import video3 from '/assets/anons-3.mp4'
import video4 from '/assets/anons-4.mp4'

const Anons = () => {
	const { t } = useTranslation()
	return (
		<section className='mt-0 mx-auto mb-[50px] p-8 w-full max-w-[1560px] flex flex-col items-center overflow-hidden'>
			<div data-aos='flip-down' data-aos-duration='1500'>
				<h2 className='w-full flex items-center justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold ml-9 lg:ml-0'>
					{t('anons_title')}
				</h2>
				<hr />
			</div>

			<Carousel
				responsive={responsive}
				showDots={false}
			
				autoPlay={true}
				autoPlaySpeed={2000}
				infinite
				className='w-full'
			>
				<div
					data-aos='fade-right'
					data-aos-duration='1500'
					className={styles.carousel_item}
				>
					<video className='w-[75%] lg:w-[81%] max-w-[375px] h-auto' controls muted>
						<source src={video1} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>

				<div
					data-aos='fade-right'
					data-aos-duration='1500'
					className={styles.carousel_item}
				>
					<video className='w-[75%] lg:w-[81%] max-w-[375px] h-auto' controls muted>
						<source src={video2} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>

				<div
					data-aos='fade-left'
					data-aos-duration='1500'
					className={styles.carousel_item}
				>
					<video className='w-[75%] lg:w-[81%] max-w-[375px] h-auto' controls muted>
						<source src={video3} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>

				<div
					data-aos='fade-left'
					data-aos-duration='1500'
					className={styles.carousel_item}
				>
					<video className='w-[75%] lg:w-[81%] max-w-[375px] h-auto' controls muted>
						<source src={video4} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</Carousel>
		</section>
	)
}

export default Anons
