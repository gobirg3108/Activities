import React, { useState } from 'react';
import { api } from '../../utils/api';

const CreateUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/urls/create', { longUrl });
    setLongUrl('');
    setShortUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Short URL</h2>
      <label>
        Long URL:
        <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateUrl;
