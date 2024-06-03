import { useEffect, useRef } from 'react';
import { Engine } from '@babylonjs/core';

import BackToHome from '../../components/backToHome';
import { createScene } from './createScene';
import styles from './index.module.less';

const SecondTry = () => {
  const boxRef = useRef(); // 正方体
  const planeRef = useRef(); // 平面
  const sphereRef = useRef(); // 球
  const groundRef = useRef(); // 地面

  useEffect(() => {
    // 正方体
    const boxEngine = new Engine(boxRef.current, true);
    const boxScene = createScene(boxEngine, boxRef.current, 'BOX');
    // 最后一步调用engine的runRenderLoop方案，执行scene.render()，让3d场景渲染起来
    boxEngine.runRenderLoop(() => {
      boxScene.render();
    });

    // 平面
    const planeEngine = new Engine(planeRef.current, true);
    const planeScene = createScene(planeEngine, planeRef.current, 'PLANE');
    planeEngine.runRenderLoop(() => {
      planeScene.render();
    });

    // 球
    const sphereEngine = new Engine(sphereRef.current, true);
    const sphereScene = createScene(sphereEngine, sphereRef.current, 'SPHERE');
    sphereEngine.runRenderLoop(() => {
      sphereScene.render();
    });

    // 地面
    const groundEngine = new Engine(groundRef.current, true);
    const groundScene = createScene(groundEngine, groundRef.current, 'GROUND');
    groundEngine.runRenderLoop(() => groundScene.render());

    window.addEventListener('resize', () => {
      boxEngine.resize();
      planeEngine.resize();
      sphereEngine.resize();
      groundEngine.resize();
    });
    return () => {
      boxEngine.resize();
      planeEngine.resize();
      sphereEngine.resize();
      groundEngine.resize();
    };
  }, []);
  return (
    <div className={styles.secondPage}>
      <BackToHome />
      <div className={styles.boxContainer}>
        <canvas id="canvasRender" ref={boxRef} />
        <canvas id="canvasRender" ref={planeRef} />
        <canvas id="canvasRender" ref={sphereRef} />
        <canvas id="canvasRender" ref={groundRef} />
      </div>
    </div>
  );
};

export default SecondTry;
