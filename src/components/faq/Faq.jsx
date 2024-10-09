// syle
import { useTranslation } from 'react-i18next'
import styles from './Faq.module.css'
import FaqItem from './FaqItem'
import { useState } from 'react'

const Faq = () => {
	const [selected, setSelected] = useState(null)
	const { t } = useTranslation()
	const faqData = [
		{
			ans: t('faq_ans_1'),
			question: t('faq_question_1'),
			id: 1,
		},
		{
			ans: t('faq_ans_2'),
			question: t('faq_question_2'),
			id: 2,
		},
		{
			ans: t('faq_ans_3'),
			question: t('faq_question_3'),
			id: 3,
		},
		{
			ans: t('faq_ans_4'),
			question: t('faq_question_4'),
			id: 4,
		},
		{
			ans: t('faq_ans_5'),
			question: t('faq_question_5'),
			id: 5,
		},
		{
			ans: t('faq_ans_6'),
			question: t('faq_question_6'),
			id: 6,
		},
	]

	return (
		<section className='w-full py-[70px] px-0' id='faq'>
			<div className='max-w-[1560px] mx-auto my-0 px-5 py-0 box-border'>
				<div className={styles.faq_flex}>
					<div data-aos='flip-down' data-aos-duration='1500'>
						<h2 className='w-full flex items-start justify-start pb-[32px] text-[#020c31] font-[Unbounded] text-2xl lg:text-4xl not-italic font-semibold'>
							FAQ
						</h2>
					</div>
					<FaqItem
						faq={faqData}
						selected={selected}
						setSelected={setSelected}
					/>
				</div>
			</div>
		</section>
	)
}

export default Faq
