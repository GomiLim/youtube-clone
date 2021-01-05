import React, { useState, useEffect } from 'react';
import VideoComponent from '../../components/videoComponent';
import VideoDetaile from '../../components/videoDetaile';
import axios from 'axios';

//module
import styled from 'styled-components';

//layout
import Mainlayout from '../../layouts/mainlayout';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState('');
  const [isList, setIsList] = useState(true);
  const ContentLayout = styled.div`
    padding: 10px 20px;
    box-sizing: border-box;
  `;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=kr&key=AIzaSyAc7yH7Fr2Qt4mHnes5rs2thNCB4otuHt4',
        );
        setData(response.data.items);
      } catch (e) {}
    };

    fetchUsers();
  }, []);

  const getVideoData = (target) => {
    setVideoData(target);
    setIsList(false);
  };

  return (
    <Mainlayout>
      <ContentLayout>
        {isList ? (
          <VideoComponent data={data} getVideoData={getVideoData} setVideoData={setVideoData} />
        ) : (
          <VideoDetaile videoData={videoData} />
        )}
      </ContentLayout>
    </Mainlayout>
  );
};

export default MainPage;
