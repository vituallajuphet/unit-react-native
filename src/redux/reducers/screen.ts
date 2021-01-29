import { LOAD_STARTED } from "../actionTypes";

const initialState = {
  screenStart: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_STARTED: {
      const { data } = action.payload;
      console.log("state", data)
      return {
        ...state,
        screenStart: data,

      };
    }
    default:
      return state;
  }
}
