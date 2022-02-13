import axios from "axios";

export const fetchColors = () => {
  axios
    .get("https://61995d4b9022ea0017a7ae3f.mockapi.io/colors")
    .then((data) => {
      setColors(data.data);
    });
};

export const setColors = (colors) => ({
  type: "SET_COLORS",
  payload: colors,
});
