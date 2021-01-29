import { LOAD_STARTED } from "./actionTypes";

export const load_started = (starts: boolean) => ({
  type: LOAD_STARTED,
  payload: {
    data:starts
  }
});

