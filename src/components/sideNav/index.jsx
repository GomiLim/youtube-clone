import React from 'react';
import styles from './index.module.css';
import styled from 'styled-components';

import { faHome, faFire, faBox, faHistory, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNavStyle = styled.div`
  overflow: hidden;
  width: ${(props) => (props.visible ? '20rem' : '4.5rem')};
  transition: 0.2s;

  ul {
    width: 20rem;
  }
`;
const SideNav = ({ visible, browserWidth }) => {
  return (
    <SideNavStyle className={styles.sideMenu} visible={visible} browserWidth={browserWidth}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />홈
        </li>
        <li>
          <FontAwesomeIcon icon={faFire} />
          인기
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
          구독
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faBox} />
          보관함
        </li>
        <li>
          <FontAwesomeIcon icon={faHistory} />
          시청기록
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          좋아요 표시한 동영상
        </li>
      </ul>
    </SideNavStyle>
  );
};

export default SideNav;
