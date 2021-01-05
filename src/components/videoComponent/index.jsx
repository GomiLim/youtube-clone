import React, { useRef } from 'react';
import styles from './index.module.css';

//modules
import styled from 'styled-components';
import { useContentize } from '../../modules/pagesize';
const ChannelTitleStyle = styled.li`
  ${(props) =>
    props.width < 1400 &&
    `width: ${props.width / 4}px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`}
`;
const VideoBoxStyle = styled.div`
  flex-shrink: 0.5;
  flex-basis: 23%;
  display: inline-block;
  margin-right: 1rem;

  ${(props) => props.width < 1700 && `flex-shrink: 0.5;flex-basis: 29%;`}
  ${(props) => props.width < 800 && `flex-shrink: 0.5;flex-basis: 45%;`}
  ${(props) => props.width < 600 && `flex-shrink: 0.5;flex-basis: 80%;`}
`;
const VideoComponent = ({ data, getVideoData }) => {
  const mainContentList = useRef();
  const width = useContentize(mainContentList);
  console.log(width);
  return (
    <div ref={mainContentList} className={styles.videoBoxWrapper}>
      {data &&
        data.map((video, index) => {
          const videoInfo = video.snippet;
          return (
            <VideoBoxStyle
              className={styles.videoBox}
              width={width}
              key={`video-${index}`}
              onClick={() => getVideoData(video)}
            >
              <div>
                <img src={videoInfo.thumbnails.medium.url} alt={videoInfo.title} />
              </div>
              <div>
                <div>아이콘</div>
                <ul className={styles.videoInfo}>
                  <ChannelTitleStyle width={width}>{videoInfo.localized.title}</ChannelTitleStyle>
                  <li>{videoInfo.channelTitle}</li>
                </ul>
              </div>
            </VideoBoxStyle>
          );
        })}
    </div>
  );
};

export default VideoComponent;
