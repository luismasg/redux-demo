import userReducer from "./user";

export default {
  user: userReducer,
  data: (state = "jose", action) => {
    if (action.type === "algo") {
      return "juan";
    }
    return "pepe";
  },
  estamadre: s => {
    return "2";
  }
};
