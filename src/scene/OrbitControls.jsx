import React from 'react'
import React3 from 'react-three-renderer'
import THREE from 'three'
import OrbitControls from 'orbit-controls'

export default class extends React.Component {

  componentDidMount() {
    console.log(this.props.camera)
    const controls = OrbitControls(this.props.camera)

    console.log(controls)

    // controls.update()
  }

  render() {
    const { width, height, position } = this.props

    return (
      <mesh>
        <sphereGeometry {...{ radius: 3, widthSegments: 5, heightSegments: 5 }} />
        <meshBasicMaterial {...{ color: 0x00ff00, wireframe: true }} />
      </mesh>
    )
  }

}
