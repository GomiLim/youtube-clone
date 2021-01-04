import React from 'react';
import styles from './index.module.css';
import styled from 'styled-components';

import { faHome, faFire, faBox, faHistory, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNavStyle = styled.div`
  overflow: hidden;
  width: ${(props) => (props.visible ? '500px' : '75px')};
  // transition: 0.2s;
  p {
    margin: 0;
    display: ${(props) => (props.visible ? 'inline-block' : 'none')};
  }
`;
const SideNav = ({ visible }) => {
  return (
    <SideNavStyle className={styles.sideMenu} visible={visible}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <p>홈</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFire} />
          <p>인기</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
          <p>구독</p>
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faBox} />
          <p>보관함</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faHistory} />
          <p>시청기록</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          <p>좋아요 표시한 동영상</p>
        </li>
      </ul>
    </SideNavStyle>
  );
};

export default SideNav;
