import React from 'react';
import {ImEarth} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="mb-10image.png text-gray-800 max-w-[800px]" id="contact">
        <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-t-xl"
          style={{ backgroundPosition: '50%', backgroundImage: "url('https://images.unsplash.com/photo-1650803321892-efba59b28a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMHRoZW1lfGVufDB8fDB8fHww&w=1000&q=80')", height: '300px' }}>
        </div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style={{ marginTop: '-200px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <div className='flex justify-center mb-[30px]'>
                    <div className='text-center'>
                    <h6 className='text-blue-700 text-sm font-bold'>CONTACT</h6>
                    <h1 className="text-xl font-bold leading-tight mb-5 capitalize mt-2">{t("contact")}👋 </h1>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                    <div className="mb-12 lg:mb-0 text-center mx-auto">
                        <ImEarth className='text-4xl mb-2 mx-auto'/>
                        <h6 className="font-medium">Ukraine</h6>
                    </div>
                    <div className="mb-12 lg:mb-0 text-center mx-auto">
                        <a href="mailto:ifialkivskyi@gmail.com">
                            <AiOutlineMail className='text-4xl mb-2 mx-auto'/>
                            <h6 className="font-medium">ifialkivskyi@gmail.com</h6>
                        </a> 
                    </div>
                    <div className="mb-6 md:mb-0 text-center mx-auto">
                        <a href="tel:+380960599425">
                            <AiOutlinePhone className='text-4xl mb-2 mx-auto'/>
                            <h6 className="font-medium">+380-96-059-9425</h6>
                        </a>     
                    </div>
                    <div className="text-center mx-auto">
                        <a href="https://telegram.me/@sikedone">
                            <FaTelegramPlane className='text-4xl mb-2 mx-auto'/>
                            <h6 className="font-medium">@sikedone</h6>
                        </a>
                    </div>
                </div>
                        
          </div>
        </div>
      </section>
    );
};

export default Contact;