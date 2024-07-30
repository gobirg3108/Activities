import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const response = await api.get('/urls/all');
      setUrls(response.data);
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>All URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url => (
            <tr key={url._id}>
              <td>{url.shortUrl}</td>
              <td>{url.longUrl}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
