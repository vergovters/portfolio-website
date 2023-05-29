import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Stack } from './UI/Stack';
import { TextSpan } from './UI/TextSpan';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
  const sentence = "Front-End React Developer".split("")
  const { t } = useTranslation();

  return (
    <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 mx-auto max-w-[860px] mt-4 sm:mt-0" id="home">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="text-5xl font-bold text-center md:text-left mt-5 sm:hidden">
            {sentence}
          </h4>
          <h4 className="text-5xl font-bold text-center md:text-left mt-5 hidden sm:block">
            {sentence.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </h4>
          <div className="dark:text-gray-400 mt-4">{t('intro')}<span role="img" aria-label="pin">📌</span></div>
          <div className='flex flex-row mt-5'><a href="https://github.com/IlliaProgrammer"><FaGithub className='mr-2 text-xl'/></a><BsLinkedin className='text-xl'/></div>
        </div>
        <img src="https://i.pinimg.com/564x/1b/47/a4/1b47a40a95f424bf2787f68ba6742857.jpg" alt="" className="self-center flex-shrink-0 w-[300px] h-[300px] border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
      </div>
      <div className='flex flex-row justify-center md:justify-start mt-5 sm:mt-10'>
        <p className='text-sm font-bold mr-3'>Tech Stack</p>
        <Stack logo="https://toppng.com/uploads/preview/vertical-line-png-vertical-line-sv-11563234014farlztge0p.png"/>
        <Stack logo="https://e7.pngegg.com/pngimages/66/60/png-clipart-web-development-cascading-style-sheets-css3-computer-icons-css-miscellaneous-blue-thumbnail.png"/>
        <Stack logo="https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png"/>
        <Stack logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"/>
        <Stack logo="https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png"/>
        <Stack logo="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"/>
        <Stack logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"/>
      </div>
    </div>
  );
};
