import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import { cleantCarusel } from '../../config/constants'

const Testimonial = () => {
	const { t } = useTranslation()
	return (
		<section className='text-gray-600 body-font' id='comment'>
			<div className='container px-5 py-24 mx-auto'>
				<div data-aos='flip-down' data-aos-duration='1500'>
					<h2 className='w-full flex items-start justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold'>
						{t('testimonial_title')}
					</h2>
				</div>
				<div className='flex flex-wrap -m-4'>
					<Carousel
						responsive={cleantCarusel}
						showDots={true}
						arrows={true}
						autoPlay={true}
						autoPlaySpeed={2500}
						infinite
						className='w-full select-none'
					>
						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_1')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-1.jpg'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_1')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @nigora_dostva
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_2')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-2.webp'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_2')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @prsens
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_3')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-3.jpg'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_3')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @hyot
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_4')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-4.jpg'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_4')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @barno
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_5')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-1.jpg'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_5')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @bonu_hamidova
										</span>
									</span>
								</a>
							</div>
						</div>

						<div className='p-4'>
							<div className='h-full bg-gray-100 p-8 rounded'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									className='block w-5 h-5 text-gray-400 mb-4'
									viewBox='0 0 975.036 975.036'
								>
									<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
								</svg>
								<p className='leading-relaxed mb-6'>{t('client_des_6')}</p>
								<a className='inline-flex items-center'>
									<img
										alt='testimonial'
										src='src/assets/clent-6.jpg'
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-gray-900'>
											{t('client_name_6')}
										</span>
										<span className='text-gray-500 text-sm'>
											Telegram: @samiya_smm
										</span>
									</span>
								</a>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	)
}

export default Testimonial
