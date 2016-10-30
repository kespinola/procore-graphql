import React from 'react'
import React3 from 'react-three-renderer'
import THREE from 'three'

import windowSize from '../decorators/windowSize.jsx'
import OrbitControls from './OrbitControls.jsx'

@windowSize(10)
export default class Scene extends React.Component {

  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  }

  constructor(props, context) {
    super(props, context)

    this.cameraTarget = new THREE.Vector3(0, 0, 0)
    this.cameraPosition = new THREE.Vector3(0, 1, 5)

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.

    this.state = {
      cubeRotation: new THREE.Euler(),
    }
  }

  onAnimate = () => {
    // we will get this callback every frame

    // pretend cubeRotation is immutable.
    // this helps with updates and pure rendering.
    // React will be sure that the rotation has now updated.
    this.setState({
      cubeRotation: new THREE.Euler(
        this.state.cubeRotation.x + 0.05,
        this.state.cubeRotation.y + 0.05,
        0
      ),
    })
  }

  render() {
    const {
      props: { width, height },
      state: { cubeRotation },
      cameraPosition,
      onAnimate,
    } = this

    const camera = <perspectiveCamera
      ref="camera"
      name="camera"
      fov={75}
      aspect={width / height}
      near={0.1}
      far={1000}
      position={cameraPosition}
    />

    return (<React3 {...{ mainCamera: 'camera', width, height, onAnimate, antialias: true }}>
      <scene>
        {camera}
        <axisHelper />
        <OrbitControls {...{ width, height, position: cameraPosition, camera: camera }} />
        <mesh {...{ rotation: cubeRotation }}>
          <sphereGeometry {...{ radius: 1, widthSegments: 10, heightSegments: 10 }} />
          <meshBasicMaterial {...{ color: 0xff0000, wireframe: true }} />
        </mesh>
      </scene>
    </React3>)
  }
}
