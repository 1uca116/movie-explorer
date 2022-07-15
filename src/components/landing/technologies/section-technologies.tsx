const SectionTechnologies = () => {
    return (
        <div style={{height: '100%', minHeight: '100vh'}}
             className='bg-gray-light px-4 md:px-14 lg:px-16 py-20 lg:py-24'><h2 className='text-2xl'>Технологии</h2>
            <div className="flex-grow mt-6 border-t-2 border-black"></div>
            <div className='flex flex-col justify-center text-center'>
            <h1 className='text-3xl	md:text-5xl pt-14 md:pt-24'>7 технологий</h1>
            <p className='text-xs md:text-sm pt-8 md:pt-9'>На курсе веб-разработки мы освоили технологии, которые применили в
                дипломном проекте.</p>

            <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4 text-xs md:text-sm pt-12 md:pt-24">
                <div className="p-5  border-solid rounded-md border-2 border-transparent bg-gray-dark">HTML</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">CSS</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">JS</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">React</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">Git</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">Express.js</div>
                <div className="p-5 border-solid rounded-md border-2 border-transparent bg-gray-dark">mongoDB</div>
            </div>
            </div>
        </div>
    )
}

export default SectionTechnologies
