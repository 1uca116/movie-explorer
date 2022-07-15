const SectionAbout = () => {
    return (
        <div style={{height: '100%', minHeight: '100vh'}} className='px-4 md:px-14 lg:px-16 py-20 lg:py-24'>
            <h2 className='text-2xl'>О проекте</h2>
            <div className="flex-grow mt-6 border-t-2 border-black"></div>
            <div className='flex flex-col md:flex-row pt-14 lg:pt-16 justify-center align-middle'>
                <div className='' style={{maxWidth: '550px'}}>
                    <h2 className='text-lg'>Дипломный проект включал 5 этапов</h2>
                    <p className='text-xs pt-4 lg:pt-6'>Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className='pt-14 md:pt-0' style={{maxWidth: '550px'}}>
                    <h2 className='text-lg'>На выполнение диплома ушло 5 недель</h2>
                    <p className='text-xs pt-4 lg:pt-6'>У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="flex flex-row mt-16 md:mt-24 lg:mt-28">
                <div className="basis-1/3 md:basis-1/4">
                    <div className="flex justify-center items-center bg-green"
                         style={{height: '35px'}}>
                        <span className='text-xs'>1 неделя</span>
                    </div>
                    <div className="flex justify-center items-center text-xs text-gray-400 mt-2">
                        Back-end
                    </div>
                </div>
                <div className="basis-2/3 md:basis-3/4">
                    <div className="flex justify-center items-center bg-gray-dark"
                         style={{height: '35px'}}>
                        <span className='text-xs'>4 недели</span>
                    </div>
                    <div className=" flex justify-center items-center text-xs text-gray-400 mt-2">
                        Front-end
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionAbout
