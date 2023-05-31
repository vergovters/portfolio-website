import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (selectedOption:any) => {
    const selectedLanguage = selectedOption.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  const options = [
    { value: 'en', label: <img className='h-[15px]' src="https://cdn.shopify.com/s/files/1/0394/9549/files/greatBritainFlag.png?14628611761359576135" alt="" /> },
    { value: 'ua', label: <img className='h-[15px]' src="https://www.vdio.com/wp-content/uploads/2017/04/national-flag-of-Ukraine-1000x600.png" alt="" /> }
  ];

  const defaultValue = options.find((option) => option.value === i18n.language);

  return (
    <div className='ml-[5px]'>
      <Select options={options} onChange={handleLanguageChange} isSearchable={false} defaultValue={defaultValue} />
    </div>
  );
};

export default LanguageToggle;