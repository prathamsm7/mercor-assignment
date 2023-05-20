import { FcDocument } from 'react-icons/fc';
import TitleBar from './TitleBar';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineDriveFileMove } from 'react-icons/md';
import { BsCloudCheck } from 'react-icons/bs';

const MainToolbar = () => {
  return (
    <div className='w-full p-3 flex  min-h-[110px]'>
      <FcDocument size={44} className='fill-[#00bfff] hover:bg-transparent' />
      <div>
        <div className='flex items-center gap-3'>
          <input
            type='text'
            placeholder='Untitled document'
            defaultValue='Untitled document'
            className='bg-transparent'
          />
          <AiOutlineStar size={18} />
          <MdOutlineDriveFileMove size={18} />
          <BsCloudCheck size={18} />
        </div>
        <div className='flex gap-4 text-sm options'>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Tools</span>
          <span>Extensions</span>
          <span>Help</span>
        </div>
      </div>
      <TitleBar />
    </div>
  );
};

export default MainToolbar;
