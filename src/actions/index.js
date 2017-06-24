export const ADD_PROGRAM = 'ADD_PROGRAM';

export const addProgram = program => {
    return {
        type: ADD_PROGRAM,
        program
    };
}