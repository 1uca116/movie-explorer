import './section-main.scss';
import {ReactComponent as Strokes} from "../../assets/images/svg/strokes.svg";
import Header from "../../layout/header/Header";

const SectionMainNav = () => {
    return (
        <div className='bg-black w-full text-white '>
        <ul className='flex justify-center align-middle space-x-5 underline py-5'>
            <li>О проекте</li>
            <li>Технологии</li>
            <li>Студент</li>
        </ul>
        </div>
    )
}

const SectionMain = () => {
    return (
        <div style={{height: '100%', minHeight: '100vh'}}>
            <div
                className='text-white bg-navy flex flex-col justify-between px-3 lg:px-20 md:px-14  pb-11 lg:pb-16'>
                <Header/>
                <div className='flex flex-col mt-28'>
                    <div
                        className='section-main-header mb-14 sm:mb-24 text-center sm:text-start text-3xl md:text-4xl'>Учебный
                        проект студента факультета Веб-разработки.
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Strokes className='section-main-strokes   '/>
                    </div>
                </div>
            </div>
            <SectionMainNav/>

        </div>
    )
}
export default SectionMain
