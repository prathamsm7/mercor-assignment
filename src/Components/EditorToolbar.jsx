import { BiUndo, BiRedo, BiPaintRoll } from 'react-icons/bi';

import {
  AiOutlinePrinter,
  AiOutlineItalic,
  AiOutlineBold,
  AiOutlineUnderline,
  AiOutlineFontColors,
  AiOutlineHighlight,
  AiOutlineMore,
  AiOutlineUp,
} from 'react-icons/ai';
import {
  MdSpellcheck,
  MdOutlineLink,
  MdOutlineImage,
  MdOutlineAddComment,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatLineSpacing,
  MdModeEditOutline,
} from 'react-icons/md';

const EditorToolbar = () => {
  return (
    <div className='w-[98%] ml-4 mr-0 h-10 bg-[#edf2fa] rounded-full relative -top-12 flex items-center px-3 gap-2 editor-toolbar'>
      <BiUndo size={20} title='Undo' />
      <BiRedo size={20} title='Redo' />
      <AiOutlinePrinter size={20} title='Print' />
      <MdSpellcheck size={20} title='Spelling and Grammer Check' />
      <BiPaintRoll size={20} title='Pain Format' />
      <select
        value='100%'
        className='bg-transparent outline-blue-600'
        title='Zoom'
      >
        <option value='50%'>50%</option>
        <option value='75%'>75%</option>
        <option value='90%'>90%</option>
        <option value='100%'>100%</option>
        <option value='125%'>125%</option>
      </select>
      <span className='w-[1px] h-[60%] bg-gray-300 my-3'></span>
      <select
        value='Normal Text'
        className='bg-transparent outline-blue-600'
        title='Styles'
      >
        <option value='Normal Text1'>Normal Text 1</option>
        <option value='Normal Text2'>Normal Text 2</option>
        <option value='Normal Text3'>Normal Text 3</option>
        <option value='Normal Text4'>Normal Text 4</option>
        <option value='Normal Text5'>Normal Text 5</option>
      </select>
      <select
        value='Arial '
        className='bg-transparent outline-blue-600'
        title='Font'
      >
        <option value='Arial'>Arial</option>
        <option value='Verdana'>Verdana</option>
        <option value='Roboto'>Roboto </option>
        <option value='Impact'>Impact</option>
      </select>
      <span className='w-[1px] h-[60%] bg-gray-300 my-3'></span>
      <button className='font-bold' title='Decrease Font Size'>
        -
      </button>
      <select
        value='11 '
        className='bg-transparent outline-blue-600'
        title='Font'
      >
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='14'>14</option>
        <option value='16'>16</option>
        <option value='18'>18</option>
        <option value='24'>24</option>
        <option value='30'>30</option>
      </select>
      <button className='font-bold' title='Increase Font Size'>
        +
      </button>
      <span className='w-[1px] h-[60%] bg-gray-300 my-3'></span>
      <AiOutlineItalic />
      <AiOutlineBold />
      <AiOutlineUnderline />
      <AiOutlineFontColors />
      <AiOutlineHighlight />
      <span className='w-[1px] h-[60%] bg-gray-300 my-3'></span>
      <MdOutlineLink />
      <MdOutlineAddComment />
      <MdOutlineImage />
      <span className='w-[1px] h-[60%] bg-gray-300 my-3'></span>
      <MdOutlineFormatAlignLeft />
      <MdOutlineFormatLineSpacing />
      <AiOutlineMore />

      <div className='flex items-center gap-1 absolute right-5'>
        <MdModeEditOutline />
        <span className='w-[1px] h-5 bg-gray-300 my-3'></span>
        <AiOutlineUp height='10px' width='10px' />
      </div>
    </div>
  );
};

export default EditorToolbar;
