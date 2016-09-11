import * as React from 'react'
import * as THREE from 'three'
import { connect } from 'react-redux'

export interface IBoxGeometryProps {
  width: number;
  height: number;
  depth: number;
  widthSegments?: number,
  heightSegments?: number,
  depthSegments?: number,
}

const BoxGeometry = ({
  width,
  height,
  depth,
}: IBoxGeometryProps) => (
  <span>width: {width}, height: {height}, width: {depth}</span>
)

const mapStateToProps = (state: Object, props: IBoxGeometryProps): Object => ({

})

const mapDispatchToProps = (state: Object, props: IBoxGeometryProps): Object => ({

})

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BoxGeometry)

export default BoxGeometry
