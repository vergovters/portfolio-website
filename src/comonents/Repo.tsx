import {FaGithub} from 'react-icons/fa'
import {GoLinkExternal} from 'react-icons/go'
import React from 'react';
import "../assets/hover.css"
import { StringMap } from 'i18next';

interface RepoProps {
    item: {
        img: string,
        title: string,
        description: string,
        github: string,
        page: string,
        tech: string
    },
    index: number;
}

const Repo: React.FC<RepoProps> = ({ item, index }) => {
    const isPaired: number = index % 2;



    return (
      <div>
      {isPaired === 0 ? (
        <div className="py-5 max-w-[750px] mt-[20px] cursor-pointer">
          <div className="container m-auto px-6">
            <div className="lg:flex justify-between items-center">
            <div className="image-wrap">
                <img
                    src={item.img}
                    className="image"
                    alt=""
                />
            </div>
              <div className="lg:w-5/12 lg:p-0 text-center">
                <h1 className="text-xl font-bold leading-tight mb-5 capitalize">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold text-gray-500">
                  {item.description}
                </p>
                <p className="font-bold mt-[10px] text-sm">{item.tech}</p>
                <div className="flex flex-row justify-center mt-6 text-sm text-center font-semibold">
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    Code <FaGithub className="mr-2 text-xl ml-1" />
                  </a>
                  <a href={item.page} target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    Live Demo<GoLinkExternal className="mr-2 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-5 max-w-[750px] mt-[20px] cursor-pointer ">
          <div className="container m-auto px-6 ">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-5/12 lg:p-0 text-center order-2 lg:order-1">
                <h1 className="text-xl font-bold leading-tight mb-5 capitalize">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold text-gray-500">
                  {item.description}
                </p>
                <p className="font-bold mt-[10px] text-sm">{item.tech}</p>
                <div className="flex flex-row justify-center mt-6 text-sm text-center font-semibold">
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    Code <FaGithub className="mr-2 text-xl ml-1" />
                  </a>
                  <a href={item.page} target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    Live Demo<GoLinkExternal className="mr-2 text-xl" />
                  </a>
                </div>
              </div>
              <div className="image-wrap">
                <img
                    src={item.img}
                    className="image"
                    alt=""
                />
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default Repo;