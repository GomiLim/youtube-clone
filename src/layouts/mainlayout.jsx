import React, { useEffect, useState } from 'react';

//assets
import styles from './main.module.css';
import logo from '../assets/logo.png';

//components
import SideNav from '../components/sideNav';

//modules
import { faVideo, faTh, faBell, faUserCircle, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '../modules/pagesize';

const MainLayout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const browserWidth = useWindowSize();
  const menuToggle = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  useEffect(() => {
    browserWidth < 800 && setVisible(false);
  }, [browserWidth]);

  return (
    <>
      <header>
        <div className={styles.sideNavBox}>
          <div className={styles.sideNav} onClick={menuToggle}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ transform: visible ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            />
          </div>
          <a href="./main" target="_self">
            <img src={logo} alt="유튜브 로고" className={styles.logo} />
          </a>
        </div>
        <div className={styles.searchBox}>
          <input type="test" name="search_video" id="search_video" placeholder="검색" />
          <button className={styles.serchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <ul className={styles.subNave}>
          <li>
            <FontAwesomeIcon icon={faVideo} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTh} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCircle} />
          </li>
        </ul>
      </header>
      <section className={styles.contents}>
        <SideNav visible={visible} browserWidth={browserWidth} />
        <div>{children}</div>
      </section>
    </>
  );
};

export default MainLayout;
