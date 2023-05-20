import { RxCounterClockwiseClock } from 'react-icons/rx';
import { MdOutlineInsertComment, MdLockOutline } from 'react-icons/md';
import { SiGooglemeet } from 'react-icons/si';
import { FaUserCircle } from 'react-icons/fa';

const TitleBar = () => {
  return (
    <div className='w-2/5 flex justify-end items-center gap-10 absolute right-5 top-2'>
      <RxCounterClockwiseClock size={20} />
      <MdOutlineInsertComment size={20} />
      <SiGooglemeet size={20} />
      <button className='rounded-full bg-[#c2e7ff] w-[100px] h-[40px] flex items-center justify-evenly font-semibold'>
        <MdLockOutline size={16} />
        Share
      </button>
      <FaUserCircle size={32} />
    </div>
  );
};

export default TitleBar;
