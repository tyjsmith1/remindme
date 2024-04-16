import './styles/App.css';
import Header from './components/Header';
import InputFormContainer from './components/InputFieldContainer'
import GetTest from './components/GetTest';

function App() {

  return (
    <div className='min-h-screen bg-parchment flex flex-col items-center justify-center font-typewriter text-gray-800'>
      <Header/>
      <InputFormContainer />
      <GetTest/>
    </div>
  );
}

export default App;
