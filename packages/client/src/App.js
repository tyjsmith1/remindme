import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <header className='text-center p-5'>
        <h1 className='text-4xl font-bold text-blue-600'>Welcome to RemindMe 👋</h1>
        <p className='text-gray-700 mt-2'>
          Never miss a beat in today's fast-paced world. Keep track of important tasks and commitments effortlessly.
        </p>
      </header>
      <div className='bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-lg'>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
            <input type='email' id='email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' placeholder='you@example.com' required/>
          </div>
          <div className='mb-4'>
            <label htmlFor='reminder' className='block text-sm font-medium text-gray-700'>What do you want to be reminded you of?</label>
            <input type='text' id='reminder' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' placeholder='ex. Dentist appointment in 1 hour! 🦷' required/>
          </div>
          <div className='mb-6'>
            <label htmlFor='time' className='block text-sm font-medium text-gray-700'>When do you want to be reminded?</label>
            <input type='datetime-local' id='time' className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required/>
          </div>
          <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Set Reminder!
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
