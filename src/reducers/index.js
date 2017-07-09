import { ADD_PROGRAM } from '../actions';

const schedulerInitialState = {
  programs: []
};

const schedulerApp = (state = schedulerInitialState, action) => {
  switch(action.type) {
    case ADD_PROGRAM:
      const newPrograms = makeNewPrograms(state.programs, action.program);

      return Object.assign({}, state, {
        programs: newPrograms
      });
    default:
      return state;
  }
}

const makeNewPrograms = (oldPrograms, program) => {
  const date = program.date;
  const section = program.section;

  let newPrograms = Object.assign({}, oldPrograms);
  if (newPrograms[date] === undefined) {
    newPrograms[date] = {};
  }
  if (newPrograms[date][section] === undefined) {
    newPrograms[date][section] = [];
  }

  newPrograms[date][section] = [...newPrograms[date][section], program];

  return newPrograms;
}

export default schedulerApp;
