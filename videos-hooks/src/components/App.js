import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import { YOUTUBE_API_KEY } from '../config';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('cars');
  }, []);

  const onTermSubmit = async (term) => {
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
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList
            onVideoSelect={() => {
              setSelectedVideo(videos);
            }}
            videos={videos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
