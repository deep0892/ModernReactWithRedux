import { useState, useEffect } from 'react';

import youtube from './../apis/youtube';
import { YOUTUBE_API_KEY } from '../config';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: YOUTUBE_API_KEY,
        type: 'video',
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
