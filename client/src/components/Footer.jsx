import logo from '../images/musalt-logo-white-letters.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4"> 
                <div className='flex flex-[0.5] justify-center items-center'>
                    <img src={logo} alt='logo' className='w-32'/>
                </div>
                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorials</p>
                    <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p>
                </div>
                <div className='flex justify-center items-center flex-col mt-5'>
                    <p className='text-white text-sm text-center'>Come join us!</p>
                    <div className='flex justify center items-center justify-evenly justify-between flex-row mt-2'>
                        <a href='https://github.com/anthonym313/musalt' target='_blank'>
                            <p className='text-white text-sm text-center'>{<AiFillGithub fontSize={21} className="text-white"/>}</p>
                        </a>
                        <a href='https://www.linkedin.com/in/anthonyamartin/' target='_blank'>
                            <p className='text-white text-sm text-center'>{<AiFillLinkedin fontSize={21} className="text-white"/>}</p>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;