import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ResultRug = () => {
	const [sliderPosition, setSliderPosition] = useState(50)
	const [isDragging, setIsDragging] = useState(false)
	const { t } = useTranslation()
	const handleMove = event => {
		if (!isDragging) return
		const rect = event.currentTarget.getBoundingClientRect()
		const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
		const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

		setSliderPosition(percent)
	}

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	return (
		<section className='flex max-h-screen flex-col items-center p-24'>
			<div data-aos='flip-down' data-aos-duration='1500'>
				<h2 className='flex items-center justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold ml-9 lg:ml-0'>
					{t('result_title')}
				</h2>
				<hr />
			</div>

			<div
				data-aos='zoom-in'
				data-aos-duration='1500'
				className='w-full relative mt-4'
				onMouseUp={handleMouseUp}
			>
				<div
					className='relative w-full max-w-[600px] aspect-[70/45] m-auto overflow-hidden select-none'
					onMouseMove={handleMove}
					onMouseDown={handleMouseDown}
				>
					<img src='/public/assets/nasty.jpg' alt='before result' />

					<div
						className='absolute top-0 left-0 right-0 bottom-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none'
						style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
					>
						<img
							src='/public/assets/result.jpg'
							alt='after result'
							className='object-fill'
						/>
					</div>
					<div
						className='absolute top-0 bottom-0 w-1 bg-[#04a2ba] cursor-ew-resize'
						style={{
							left: `calc(${sliderPosition}% - 1px)`,
						}}
					>
						<div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ResultRug
