import Action from "../../types/Action";
import Cabinet from "../../types/Cabinet";
import ClassroomEventsDays from "../../types/ClassroomEventsDays";
import ACTION from "./ACTION";

function getCabinets(oid: string): Action {
  return {
    type: ACTION.GET_CABINETS,
    payload: oid,
  };
}

function setCabinets(cabinets: Cabinet[]): Action {
  return {
    type: ACTION.SET_CABINETS,
    payload: cabinets,
  };
}

function selectCabinet(cabinet: Cabinet): Action {
  return {
    type: ACTION.SELECT_CABINET,
    payload: cabinet,
  };
}

function deselectCabinet(id: string): Action {
  return {
    type: ACTION.DESELECT_CABINET,
    payload: id,
  };
}

function getCabinetTimetable(
  cabinetIndex: number,
  cabinetOid: string,
  startDate: Date,
  endDate: Date
): Action {
  return {
    type: ACTION.GET_CABINET_TIMETABLE,
    payload: {
      cabinetIndex: cabinetIndex,
      cabinetOid: cabinetOid,
      startDate: startDate,
      endDate: endDate,
    },
  };
}

function setCabinetTimetable(classroomEventsDays: ClassroomEventsDays): Action {
  return {
    type: ACTION.SET_CABINET_TIMETABLE,
    payload: classroomEventsDays,
  };
}

const cabinetAC = {
  getCabinets: getCabinets,
  setCabinets: setCabinets,

  selectCabinet: selectCabinet,
  deselectCabinet: deselectCabinet,

  getCabinetTimetable: getCabinetTimetable,
  setCabinetTimetable: setCabinetTimetable,
};

export default cabinetAC;