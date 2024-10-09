import { useTranslation } from 'react-i18next'
import styles from './OurWork.module.css'

const OurWork = () => {
	const { t } = useTranslation()
	return (
		<section className='body-font overflow-hidden'>
			<div className='container px-5 py-12 lg:py-24 mx-auto'>
				<div data-aos='flip-down'>
					<h2 className='w-full flex items-start justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold'>
						{t('work_main_title')}
					</h2>
				</div>
				<div className='flex flex-wrap -m-4'>
					<div
						data-aos='fade-right'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4 min-w-[350px]'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 512 512'
									color='#04A2BA'
									height='40'
									width='40'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path d='M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_1')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded]'>
								{t('work_des_1')}
							</p>
						</div>
					</div>
					<div
						data-aos='fade-right'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 640 512'
									color='#04A2BA'
									height='45'
									width='45'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path d='M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_2')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded]'>
								{t('work_des_2')}
							</p>
						</div>
					</div>
					<div
						data-aos='fade-right'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 512 512'
									color='#04A2BA'
									height='40'
									width='40'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_3')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded]'>
								{t('work_des_3')}
							</p>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 512 512'
									color='#04A2BA'
									height='40'
									width='40'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path d='M159.3 50.48a16 16 0 0 0-16 16 16 16 0 0 0 7.6 13.61c-1.9 17.76-6.4 37.01-14.1 50.61-5.8 10.2-12.4 17.1-21.4 19.7a18.5 18.5 0 0 0 1.5-7.3 18.5 18.5 0 0 0-18.5-18.5 18.5 18.5 0 0 0-18.5 18.5 18.5 18.5 0 0 0 15.16 18.2l.45 1.8c1.1 24.6.61 54.4-6.85 74.8-3.84 10.6-9.23 18.2-16.5 22.6-4.64 2.8-10.34 4.6-17.77 4.5a20.57 20.57 0 0 0 3.38-11.3 20.57 20.57 0 0 0-20.57-20.6 20.57 20.57 0 0 0-20.57 20.6A20.57 20.57 0 0 0 33.68 274l53.65 192.4 3.3-.9 7.48-27.4L54.87 283c10.19-.1 19.13-2.5 26.61-7.1 11.82-7.1 19.32-18.8 24.12-31.8 2.3-6.3 4-12.9 5.2-19.8l21.8 87.2 9.6-35.3-26.8-107.6c16.4-3.2 29.1-14.8 37.1-29.1 2.4-4.2 4.4-8.7 6.2-13.3l7.7 61.4 12.4-45.4-8.1-64.54a16 16 0 0 0 4.6-11.18 16 16 0 0 0-16-16zm193.4 0a16 16 0 0 0-16 16 16 16 0 0 0 4.6 11.18l-8.1 64.54 12.4 45.4 7.7-61.4c1.8 4.6 3.8 9.1 6.2 13.3 8 14.3 20.7 25.9 37.1 29.1l-26.8 107.6 9.6 35.3 21.8-87.2c1.2 6.8 2.9 13.5 5.2 19.8 4.8 13 12.3 24.7 24.1 31.8 7.5 4.6 16.4 7 26.6 7.1l-43.2 155 7.5 27.5 3.3.9L478.3 274a20.57 20.57 0 0 0 17.1-20.3 20.57 20.57 0 0 0-20.6-20.6 20.57 20.57 0 0 0-20.6 20.6 20.57 20.57 0 0 0 3.4 11.3c-7.5.1-13.1-1.7-17.8-4.5-7.2-4.4-12.6-12-16.5-22.6-7.4-20.4-7.9-50.3-6.8-74.9l.4-1.7a18.5 18.5 0 0 0 15.2-18.2 18.5 18.5 0 0 0-18.5-18.5 18.5 18.5 0 0 0-.1 0 18.5 18.5 0 0 0-18.4 18.5 18.5 18.5 0 0 0 1.5 7.3c-9-2.6-15.6-9.5-21.4-19.7-7.7-13.6-12.2-32.85-14.1-50.61a16 16 0 0 0 7.6-13.61 16 16 0 0 0-16-16zM198.9 137l-91.1 334h296.4l-91.1-334H198.9z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_4')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded]'>
								{t('work_des_4')}
							</p>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 512 512'
									color='#04A2BA'
									height='40'
									width='40'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path d='M152.718 28.524c-1.546-.001-3.09.01-4.63.032-20.528.29-40.464 2.677-58.374 7.902-28.656 8.36-52.804 24.703-62.717 51.734-8.846 24.123-1.132 46.174 14.352 63.112 15.483 16.938 38.137 30.613 62.14 44.273 24.004 13.66 49.415 27.172 70.094 42.21 20.68 15.037 36.234 31.401 42.22 50.093 1.124 3.506.276 14.454-1.921 23.44-.876 3.58-1.808 6.718-2.65 9.408l17.546 4.234c.84-2.748 1.747-5.924 2.588-9.365 2.488-10.175 5.153-22.05 1.58-33.207-7.773-24.272-26.598-43.033-48.777-59.16-22.179-16.128-48.104-29.824-71.775-43.295-23.672-13.471-45.032-26.852-57.76-40.776-12.728-13.923-17.423-26.537-10.736-44.77 7.498-20.448 25.514-33.257 50.857-40.652 25.343-7.394 57.333-8.66 88.924-5.681 31.59 2.98 62.835 10.149 86.8 18.886 10.344 3.771 19.325 7.848 26.303 11.858 3.216-2.397 6.614-4.797 10.184-6.94 2.174-1.305 4.44-2.527 6.808-3.582a108.01 108.01 0 0 0-4.23-2.812c-8.89-5.594-20.05-10.75-32.898-15.434-25.697-9.368-58.118-16.77-91.276-19.898-10.88-1.026-21.832-1.6-32.652-1.61zm175.904 54.288c-.362.012-.732.038-1.115.076-3.062.3-6.985 1.828-11.276 4.404-6.12 3.675-12.542 9.225-19.238 14.213l62.45 84.068 20.247-4.746c-4.262-30.338-14.22-72.644-43.539-95.263-2.891-2.231-4.996-2.837-7.529-2.752zm52.8 116.097l-17.523 4.108 50.264 214.459h18.488zM57.403 318.597l-1.965 18.478c5.836.202 11.85.48 18.011.834l1.852-17.408zm123.183 13.252l-4.99 18.357 60.283 14.621 5.502-18.306zm-146.85 22.818c-.934 0-1.105-.1-2.558 1.904-1.453 2.004-3.197 6.092-4.41 11.504-2.428 10.824-3.016 26.644-2.05 42.448.967 15.803 3.432 31.755 6.468 43.209 1.517 5.726 3.24 10.363 4.588 12.89.299.561.328.53.55.854h9.295a56.513 56.513 0 0 1-4.883-23c0-31.374 25.627-57 57-57 31.374 0 57 25.626 57 57a56.513 56.513 0 0 1-4.882 23h90.515c.458-.604 1.316-1.987 2.149-4.3 1.8-5.002 3.313-13.058 4.273-21.694 1.92-17.273 1.945-37.006 1.945-45.006 0-.625-.316-2.017-3.265-4.594-2.95-2.577-8.16-5.655-15.002-8.56-13.686-5.812-33.77-11.127-56.406-15.409-45.271-8.564-101.032-13.246-140.327-13.246zm64 50.809c-21.645 0-39 17.354-39 39 0 21.645 17.355 39 39 39 21.646 0 39-17.355 39-39 0-21.646-17.354-39-39-39zm309.563 30l-7 14h50.875l-7-14zm-44.563 32v14h126v-14z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_5')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded]'>
								{t('work_des_5')}
							</p>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-duration='1500'
						className='xl:w-1/3 md:w-1/2 p-4'
					>
						<div className=' p-6 rounded-lg'>
							<div className='w-10 h-10 inline-flex items-center justify-center mb-4'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 24 24'
									color='#04A2BA'
									height='45'
									width='45'
									xmlns='http://www.w3.org/2000/svg'
									style={{ color: 'rgb(4, 162, 186)' }}
								>
									<path fill='none' d='M0 0h24v24H0z'></path>
									<path d='M19.56 11.36L13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1 1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.18.22-2.15 1.17-2.38 2.35-.3 1.56.6 2.94 1.94 3.42v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM18.58 14H17v-1H7v1H5.42c-.23 0-.42-.19-.42-.43 0-.17.1-.32.25-.38l6.75-3 6.75 3a.423.423 0 01-.17.81z'></path>
								</svg>
							</div>
							<h2 className='text-xl text-gray-900 font-semibold title-font mb-2 font-[Unbounded]'>
								{t('work_title_6')}
							</h2>
							<p className='leading-relaxed text-base font-[Unbounded] '>
								{t('work_des_6')}
							</p>
						</div>
					</div>
				</div>
				<div className='flex mx-auto mt-16 border-0 py-2 px-8 focus:outline-none  rounded text-lg'>
					<a href='#contact' className=''>
						<button className={`${styles.btn_11_nav}`}>
							{t('button_link')}
						</button>
					</a>
				</div>
			</div>
		</section>
	)
}

export default OurWork
