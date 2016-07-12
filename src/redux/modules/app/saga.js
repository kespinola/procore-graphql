import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { constants, actions } from './'

const { INIT } = constants

export default function* (args) {
  yield* takeLatest([INIT], (type) => { })
}
