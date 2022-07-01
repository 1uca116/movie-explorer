import './section-main.scss';
import {ReactComponent as Strokes} from "../assets/images/svg/strokes.svg";


const SectionMain = () => {
    return (
        <div className='h-screen text-white bg-primary flex flex-col justify-between px-3 lg:px-20 md:px-14'>
            <div>header</div>

            <div className='flex flex-col'>
                <div className='section-main-header mb-14 sm:mb-24 text-center sm:text-start text-3xl md:text-4xl'>Учебный проект студента факультета Веб-разработки.</div>
                <div className='flex flex-col justify-end'>
                    <Strokes className='section-main-strokes  pb-11 lg:pb-16  '/>
                </div>
            </div>

        </div>
    )
}
export default SectionMain
