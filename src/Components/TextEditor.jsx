import { useState } from 'react';
import EditorToolbar from './EditorToolbar';
import { AiOutlineMenu } from 'react-icons/ai';

const TextEditor = () => {
  const [text, setText] = useState('Hello World !');

  return (
    <div className='w-[calc(100%-60px)] bg-[#f9fbfd] '>
      <EditorToolbar />
      <div className='w-full flex justify-center overflow-y-auto h-full -mt-6 relative textarea border-t border-l ml-3 pt-3 border-gray-400'>
        <AiOutlineMenu className='sticky mr-3 top-0' size={20} />
        <textarea
          className='bg-white w-4/5 h-screen border border-gray-300 outline-none pt-16 px-12'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
