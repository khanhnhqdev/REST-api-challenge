import React, { useState } from 'react';
import axios from 'axios';

function UpdateIssue() {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({ title: '', description: '' });
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
      const res = await axios.put(`http://localhost:3000/issues/${id}`, formData);
      setResponse(res.data);
    } catch (err) {
      setResponse('Error updating issue');
    }
  };

  return (
    <div>
      <h2>Update Issue</h2>
      <form className='vertical-form' onSubmit={handleSubmit}>

        <div class="form-group">
            <label for="title">ID</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Issue ID" />
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
            <button type="submit">Update</button>
        </div>
      </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

export default UpdateIssue;
