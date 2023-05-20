import './App.css';
import Sidebar from './Components/Sidebar';
import TextEditor from './Components/TextEditor';
import MainToolbar from './Components/MainToolbar';

function App() {
  return (
    <div className='container bg-[#f9fbfd] h-screen overflow-hidden'>
      <MainToolbar />
      <div className='flex h-[calc(100%-110px)] relative'>
        <TextEditor />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
