import React from 'react';
import styles from './index.module.css';

const VideoComponent = () => {
  return (
    <div className={styles.videoBox}>
      <div>동영상</div>
      <div>
        <div>아이콘</div>
        <ul className={styles.videoInfo}>
          <li>제목</li>
          <li>페이지명</li>
          <li>조회수</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoComponent;
