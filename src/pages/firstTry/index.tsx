
import { Engine } from '@babylonjs/core';
import React, { useEffect, useRef } from 'react';

import './index.less';
import { createScene } from './createScene';
import BackToHome from '../../components/backToHome';

function FirstTry() {
  const canvasRef = useRef();

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    console.log('first');
  
    const scene = createScene(engine, canvasRef.current);
  
    // 最后一步调用engine的runRenderLoop方案，执行scene.render()，让3d场景渲染起来
    engine.runRenderLoop(() => {
      scene.render();
    });
    window.addEventListener('resize', () => engine.resize());
    return () => engine.resize();
  }, []);

  return (
    <>
      <BackToHome />
      <canvas id="canvasRender" ref={canvasRef} />
    </>
  );
}

export default FirstTry;
