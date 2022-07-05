import React, { useEffect, useState } from 'react';
import "./list.css";

const List = ( { contacts, filterRef } ) => {

    useEffect(() => {
    const inputFilter = document.querySelector("input[type=text]");
    inputFilter.focus();
    }, [contacts]);

    const [filterText, setFilterText] = useState("");
    
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLowerCase()));
    });

    return (
    <div>
        <input ref={filterRef} type="text" placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <ul className='list'>
            { filtered.map((contact, index) => (
           
           <li key={index} className='items'>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
           </li>
            
        ))}
        </ul>
        <h4>
           Total Contacts: { filtered.length }
        </h4>
    </div>
  )
}

export default List;