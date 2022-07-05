import {  useRef, useState } from 'react'
import Form from './Form/Form'
import List from './List/List'
import "./contact.css"

const Contacts = () => {

    const filterRef = useRef();

    const [contacts, setContacts] = useState([
    {
        fullName: "Mehmet",
        phoneNumber: "123"
                            },
    {
        fullName: "Ahmet",
        phoneNumber: "456"
                            },
    {
        fullName: "Fatma",
        phoneNumber: "789"
                            },
]);

    // useEffect(() => {
    //     console.log(contacts);
    // }, [contacts]);
    
    
  return (
    <div className='container'>
     <h1>Contacts</h1>
     <List contacts={contacts} filterRef={filterRef}/>
     <Form contacts={contacts} setContacts={setContacts} filterRef={filterRef}/>
    </div>
  )
}

export default Contacts;

