import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { throttle } from 'lodash/fp'

export default (wait = 100) => (Component) => compose(
  withState('size', 'setSize', { width: 0, height: 0 }),
  withHandlers({
    onResize: ({ setSize }) => e => {
      setSize({ width: e.target.innerWidth, height: e.target.innerHeight })
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.setSize({ width: window.innerWidth, height: window.innerHeight })
      this.throttledResize = throttle(wait, this.props.onResize)
      window.addEventListener('resize', this.throttledResize)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.throttledResize)
    },
  }),
)(({ size }) => (
  <Component {...size} />
))
