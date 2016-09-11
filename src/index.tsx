import './index.scss'

import * as React from 'react'
import { render } from 'react-dom'

import { BoxGeometry, Mesh } from './three'

render(
  <div>
    <Mesh>
      <BoxGeometry width={1} height={1} depth={1} />
    </Mesh>
  </div>,
  document.getElementById('root')
)
