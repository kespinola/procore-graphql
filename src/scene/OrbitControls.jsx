import React from 'react'
import React3 from 'react-three-renderer'
import THREE from 'three'
import OrbitControls from 'orbit-controls'

export default class extends React.Component {

  componentDidMount() {
    const controls = OrbitControls({
      position: this.refs.camera.position.toArray(),
      direction: this.refs.camera.getWorldDirection().toArray(),
      distanceBounds: [1, 100],
      distance: 1.5,
    })

    controls.update()
  }

  render() {
    const { width, height, position } = this.props;

    return (
      <perspectiveCamera
        ref="camera"
        name="camera"
        fov={75}
        aspect={width / height}
        near={0.1}
        far={1000}
        position={position}
      />
    )
  }

}
