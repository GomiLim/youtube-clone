import React from 'react';
import YouTube from 'react-youtube';

//assets
import styles from './index.module.css';

//component
import VideoComponent from '../videoComponent';

const VideoDetaile = ({ videoData }) => {
  console.log(videoData);
  const opts = {
    width: 640,
    height: 600,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <section className={styles.videoBox}>
        <div className={styles.videoInfo}>
          <YouTube videoId={videoData.id} opts={opts} style={{ width: '100%' }} />
          <div>
            <div>
              {videoData.snippet.tags.slice(0, 4).map((tags) => (
                <span key={tags}>#{tags}</span>
              ))}
            </div>
            <p>{videoData.snippet.title}</p>
            <p>{videoData.snippet.description}</p>
          </div>
        </div>
        <div className={styles.reple}>
          <p>너무 좋아용</p>
        </div>
      </section>
      <section className={styles.relativeList}>
        <VideoComponent />
      </section>
    </>
  );
};

export default VideoDetaile;
