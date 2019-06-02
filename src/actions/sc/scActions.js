import actions from "./scConstants";

export const addSC = data => {
  return {
    type: actions.ADD_SC,
    data
  };
};

export const removeSC = data => {
  return {
    type: actions.REMOVE_SC,
    data
  };
};
