import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    const text = "developer".split("").map((char, i) => (
        <span
          key={i}
          style={{
            transform: `rotate(${i * 5}deg)`,
            left: "50%",
            fontSize: "1.2em",
            transformOrigin: "0 200px",
          }}
        >
            {char}
        </span>
      )).join("");

      const styles = {
        text: {

        },
        roundBorder: {

        },
        picture: {
            
        }
      }

    return (
        <div className="py-16 max-w-[760px] mt-[200xp] sm:skew-y-0" id='about'>
            <div className="container m-auto px-6">

            <div className="lg:flex justify-between items-center">
                    <div className="lg:w-5/12">
                        <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80"
                            className="rounded transform scale-80 sm:scale-100"
                            alt=""
                        />
                      
                    </div>
                <div className="lg:w-6/12 lg:p-0 p-7">
                    <h6 className='text-blue-700 text-sm font-bold'>ABOUT ME</h6>
                    <h1 className="text-xl font-bold leading-tight mb-3 capitalize"> {t("about_intro")} 👋 </h1>
                    <p className="text-sm">  {t("about")} </p>

                </div>
                    
                </div>
            </div>
        </div>
    );
};

