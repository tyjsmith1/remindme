import InputField from './InputField';
import { useFormInput } from '../hooks/useFormInput';

function InputFieldContainer(){
    const email = useFormInput('')
    const reminder = useFormInput('')
    const time = useFormInput('')

    const reminderSubmissionObject = {
        email: email.value,
        reminder: reminder.value,
        time: time.value
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting', reminderSubmissionObject);

        fetch('http://localhost:5555/reminders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reminderSubmissionObject)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)

            const deliveryTime = new Date(time.value).toUTCString();
            fetch('http://localhost:5555/send-reminder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userEmail: email.value,
                    subject: "Scheduled Reminder",
                    text: "Hey there! Just a reminder for: " + reminder.value,
                    html: `<h1>Reminder: ${reminder.value}</h1>`,
                    deliveryTime
                })
            })
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    return(
        <div className='bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-lg'>
            <form onSubmit={handleSubmit}>
                <InputField id='email' type='email' label='Email Address' placeholder='you@example.com' {...email}/>
                <InputField id='reminder' type='text' label='What do you want to be reminded of?' placeholder='ex. Dentist appointment in 1 hour! 🦷' {...reminder} />
                <InputField id='time' type='datetime-local' label='When do you want to be reminded?' placeholder='' {...time} />
                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Set Reminder!
                </button>
            </form>
        </div>
)}

export default InputFieldContainer