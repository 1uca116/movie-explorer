const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-end '>
            <div className='h-screen w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center object-none object-center'>
                    <h1 className="mb-3 text-9xl drop-shadow-lg shadow-black ">404</h1>
                    <div>Страница не найдена</div>
                </div>
            </div>
            <div className='text-blue-700 flex items-center justify-center mb-6'>Назад</div>

        </div>
    )
}
export default NotFound
