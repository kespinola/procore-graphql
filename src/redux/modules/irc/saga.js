import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { constants, actions } from './'

const { CONNECT } = constants

const onConnect = (a,b,c) => {
  console.log(a,b,c);
}

export default function* (a,b,c,d) {
  console.log(a,b,c,d)
  yield* takeLatest([CONNECT], onConnect)
}
