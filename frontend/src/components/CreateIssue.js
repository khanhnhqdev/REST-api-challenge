import React, { useState } from 'react';
import axios from 'axios';

export const CreateIssue = () => {
  const [formData, setFormData] = useState({ id: '', title: '', description: '' });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:3000/issues', formData);
        setResponse(res.data);
    } catch (err) {
        setResponse('Error creating issue');
    }
  };

  return (
    <div>
        <h2>Create Issue</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="ID" onChange={handleChange} />
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            <button type="submit">Create</button>
        </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

export default CreateIssue;
