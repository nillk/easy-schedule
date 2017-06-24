import { ADD_PROGRAM } from '../actions';

const schedulerInitialState = {
  programs: []
};

const schedulerApp = (state = schedulerInitialState, action) => {
  switch(action.type) {
    case ADD_PROGRAM:
      const newPrograms = [...state.programs, action.program];
      return Object.assign({}, state, {
        programs: newPrograms 
      });
    default:
      return state;
  }
}

export default schedulerApp;