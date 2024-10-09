import styles from './Faq.module.css'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'

const FaqItem = ({ faq, selected, setSelected }) => {
	return (
		<div className='w-full lg:w-[1100px]'>
			{faq.map(item => (
				<div
					key={item.id}
					className={`${selected === item.id ? styles.openAcc : ''} ${
						styles.accardion
					}`}
				>
					<div
						className={styles.accardion_head}
						onClick={() => setSelected(selected === item.id ? null : item.id)}
					>
						<h3 className={styles.faq_title}>{item.question}</h3>
						<div className={styles.faq_icon_div}>
							{selected === item.id ? <VscChevronUp /> : <VscChevronDown />}
						</div>
					</div>

					{selected === item.id && (
						<div className='px-3 py-4'>
							<p className={styles.faq_desc}>{item.ans}</p>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default FaqItem
