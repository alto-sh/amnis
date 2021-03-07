// @ts-ignore
const streamsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.push(action.payload);
    default:
      return state;
  }
};

export default streamsReducer;
