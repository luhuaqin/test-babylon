import { useNavigate } from 'react-router-dom';

import { routes } from '../../router';
import styles from './index.module.less';

const Home = () => {
  const navigate = useNavigate();
  const handleDrop = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.homePage}>
      <h1>BABYLON 我的3D之旅</h1>
      <div className={styles.dropContainer}>
        {
          routes.map((item, index) => item.path !== '/home' && item.path !== '/' && (
            <div key={index} className={styles.dropBox} onClick={() => handleDrop(item.path)}>
              {item.name}
              <p>去看看</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
