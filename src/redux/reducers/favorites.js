import { ADD } from "redux/types/favorites";

export default function favorites(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.repository];
    default:
      return state;
  }
}
