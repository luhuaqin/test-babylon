import {
  AbstractEngine, ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3
} from '@babylonjs/core';

export const createScene = (
  engine: Engine | AbstractEngine, canvas: undefined | React.ReactNode
) => {
  // 创建场景
  const scene = new Scene(engine);

  // 添加相机，并绑定点击事件
  const camera = new ArcRotateCamera(
    'camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    new Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  // 添加灯光
  new HemisphericLight(
    'light1',
    new Vector3(1, 1, 0),
    scene
  );
  new HemisphericLight(
    'light2',
    new Vector3(0, 1, -1),
    scene
  );

  // 添加一个物体
  new (MeshBuilder as any).CreateSphere(
    'sphere',
    { diameterY: 0.5 },
    scene
  );

  return scene;
};