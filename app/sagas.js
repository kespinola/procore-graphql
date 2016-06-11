import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { constants, actions } from './reducer';

function* handleInit() {
  yield put(actions.foo());
}

export default function* loadMarkup() {
  yield* takeLatest(
    [
      constants.init,
    ],
    handleInit
  );
}
