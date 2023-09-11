import React from 'react'
import {BiTime} from 'react-icons/bi'
import logo1 from '../../icons/js.png'
import logo2 from '../../icons/mongo.png'
import logo3 from '../../icons/react.png'

const Data = [
  {
    id: 1,
    image : logo1,
    title : 'Web Developer',
    time : 'Now',
    location : 'Canada',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio.',
    company : 'Javascript Co.'
  },
  {
    id: 2,
    image : logo2,
    title : 'Web Designer',
    time : 'Now',
    location : 'USA',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio.',
    company : 'React Co.'
  },
  {
    id: 3,
    image : logo3,
    title : 'React Developer',
    time : '14hrs',
    location : 'Bangladesh',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio.',
    company : 'React Co.'
  },
  {
    id: 4,
    image : logo3,
    title : 'Vue Developer',
    time : '4hrs',
    location : 'India',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio.',
    company : 'Vue Co.'
  },
  {
    id: 5,
    image : logo3,
    title : 'Vue Developer',
    time : '4hrs',
    location : 'India',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, distinctio.',
    company : 'Vue Co.'
  },
]

const Jobs = () => {
  return (
    <div>
        <div className='jobContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center py-10'>
 
       {
        Data.map(({id,image,title,time,location,desc,company}) => {
          return(
            <div key={id} className="group group/item singleJob max-w-[400px] h-[320px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] text-textColor font-semibold  group-hover:text-white'>{title}</h1>
              <span className='flex items-center gap-1 text-[#ccc]'>
                <BiTime/>{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="" className='w-[10%]'/>
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>
            <button className='btn text-textColor block w-full border-[2px]  hover:bg-white hover:text-black'>Apply Now</button>
          </div>
          )

        })
       }

        </div>
    </div>
  )
}

export default Jobs
