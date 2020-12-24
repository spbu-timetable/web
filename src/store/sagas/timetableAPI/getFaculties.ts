import timetableAPI from ".";
import { call, put, takeEvery } from "redux-saga/effects";
import ACTION from "../../actionCreators/ACTION";
import facultyAC from "../../actionCreators/facultyAC";

async function getFaculties() {
  return await timetableAPI
    .get("/study/divisions")
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerGetFaculties() {
  const data = yield call(getFaculties);
  if (data !== undefined) {
    yield put(facultyAC.setFaculties(data));
  }
}

function* watchGetFaculties() {
  yield takeEvery(ACTION.GET_FACULTIES, workerGetFaculties);
}

export default watchGetFaculties;
