import appSaga from './app';

export default function* () {
  yield* appSaga();
}
