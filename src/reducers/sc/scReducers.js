import actions from "../../actions/sc/scConstants";

let initialState = [
  { id: 1, name: "sample class 1" },
  { id: 2, name: "sample 2" }
];

let id = 100;

const scReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_SC:
      id++;
      return [...state, { id, name: action.data }];
    default:
      return state;
  }
};

export default scReducers;
