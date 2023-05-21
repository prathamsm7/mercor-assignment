import calendar from '../assets/google-calendar.png';
import keep from '../assets/google-keep.png';
import tasks from '../assets/tasks.png';
import contact from '../assets/google-contacts.png';
import maps from '../assets/map.png';

const Sidebar = () => {
  return (
    <div className='w-16 flex flex-col absolute right-0 -top-[45px] h-[calc(100%+50px)]'>
      <div className='flex flex-col gap-y-9 items-center py-3 google-apps'>
        <img src={calendar} />
        <img src={keep} />
        <img src={tasks} />
        <img src={contact} />
        <img src={maps} />
      </div>
      <span className='w-10/12 mx-auto h-[1px] bg-gray-200 my-3'></span>
      <div className='flex flex-col justify-between items-center h-full'>
        <span className='text-2xl'>+</span>
        <span className='text-2xl'>&#9002;</span>
      </div>
    </div>
  );
};

export default Sidebar;
