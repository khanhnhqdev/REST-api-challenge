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
    <div className='create-object-form'>
        <h2>Create Issue</h2>
        <form className='vertical-form' onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="title">ID</label>
                <input type="text" name="id" placeholder="ID" onChange={handleChange} />
            </div>

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            </div>
            
            <div class="form-group">
                <label for="title">Description</label>
                <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            </div>

            <div class="form-group">
                <button type="submit">Create</button>
            </div>
            
        </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

export default CreateIssue;
