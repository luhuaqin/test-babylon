import {
  AbstractEngine, ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3
} from '@babylonjs/core';

type MESH_TYPE = 'BOX' | 'PLANE' | 'SPHERE' | 'GROUND';  // 正方体|平面｜球体｜地面

const handleMeshType = (scene: Scene, meshType: MESH_TYPE) => {
  if(meshType === 'BOX') {
    new (MeshBuilder as any).CreateBox(
      'box',
      {size: 2},
      scene
    );
  }else if(meshType === 'PLANE') {
    new (MeshBuilder as any).CreatePlane(
      'plane',
      {size: 2},
      scene
    );
  }else if(meshType === 'SPHERE') {
    new (MeshBuilder as any).CreateSphere(
      'sphere',
      { diameter: 2 },
      scene
    );
  }else if(meshType === 'GROUND') {
    new (MeshBuilder as any).CreateGround(
      'ground',
      { width: 6, height: 6, subdivisions: 2 },
      scene
    );
  }
};

export const createScene = (
  engine: Engine | AbstractEngine, canvas: undefined | React.ReactNode, meshType: MESH_TYPE
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
    new Vector3(2, 1, 2),
    scene
  );
  new HemisphericLight(
    'light2',
    new Vector3(0, 1, -1),
    scene
  );

  handleMeshType(scene, meshType);

  camera.position = new Vector3(1, 5, -10);

  return scene;
};
