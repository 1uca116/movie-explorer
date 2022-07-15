import {ReactComponent as Logo} from "../../assets/images/svg/logo.svg";

const Header = () => {
    return (
        <div className='w-full flex justify-between align-middle mt-4'>
            <Logo/>
            <div className="flex space-x-4 text-xs md:text-sm">
                <button className="h-10 px-6 font-semibold  text-white" type="submit">
                    Регистрация
                </button>
                <button className="bg-green h-10 px-2.5 md:px-6 font-semibold rounded-md text-slate-900"
                        type="button">
                    Войти
                </button>
            </div>
        </div>
    )
}
export default Header
