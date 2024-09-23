import React, { useState } from 'react';
import axios from 'axios';

function ReadIssue() {
  const [id, setId] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3000/issues/${id}`);
      setResponse(res.data);
    } catch (err) {
      setResponse('Error fetching issue');
    }
  };

  return (
    <div>
      <h2>Read Issue</h2>
      <form className='vertical-form' onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="title">ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Issue ID" />
            </div>
            <div class="form-group">
                <button type="submit">Read</button>
            </div>
      </form>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
}

export default ReadIssue;
