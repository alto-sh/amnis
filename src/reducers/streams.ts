// @ts-ignore
const streamsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.push("d");
    default:
      return state;
  }
};

export default streamsReducer;
