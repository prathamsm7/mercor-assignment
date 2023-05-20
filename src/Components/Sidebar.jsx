import { SiGooglekeep, SiGooglemaps, SiGooglecalendar } from 'react-icons/si';

import { CgGoogleTasks } from 'react-icons/cg';
import { IoIosContact } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='w-16 flex flex-col absolute right-0 -top-[55px] h-[calc(100%+50px)]'>
      <div className='flex flex-col gap-y-9 items-center py-3'>
        <SiGooglecalendar size={24} />
        <SiGooglekeep size={24} />
        <CgGoogleTasks size={24} />
        <IoIosContact size={24} />
        <SiGooglemaps size={24} />
      </div>
      <span className='w-10/12 mx-auto h-[1px] bg-gray-200 my-3'></span>
      <div className='flex flex-col justify-between items-center h-full'>
        <AiOutlinePlus size={24} />
        <AiOutlineRight size={24} />
      </div>
    </div>
  );
};

export default Sidebar;
