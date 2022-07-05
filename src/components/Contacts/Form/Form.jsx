import React, { useEffect, useRef, useState } from "react";

const Form = ({ contacts, setContacts, filterRef }) => {

    const initialValues = {fullName: "", phoneNumber: ""}
    const [form, setForm] = useState(initialValues);
    const fullNameRef = useRef();

    useEffect(() => {
        setForm(initialValues);
    }, [contacts]);
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
     if (form.fullName === "" || form.phoneNumber === "") {
        alert("Please fill in the blanks");
        fullNameRef.current.focus();
        return false;
     }
        setContacts([...contacts, form]);
        filterRef.current.focus();
     }

   return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={fullNameRef} name="fullName" value={form.fullName} placeholder="Full Name" onChange={handleChange} />
      </div>
      <div>
        <input type="text" name="phoneNumber" value={form.phoneNumber} placeholder="Phone Number" onChange={handleChange}/>
      </div>
      <div className="btn">
      <button type="submit">Add</button>
      </div>
      </form>
    </div>
  );
};

export default Form;
