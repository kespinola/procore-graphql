import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { constants, actions } from '../modules/app';

const { APP_INIT } = constants;
const { connectClient } = actions;

function* handleAppInit() {
  yield put(connectClient());
}

export default function* () {
  yield* takeLatest([APP_INIT], handleAppInit);
}
