import { createSlice } from "@reduxjs/toolkit";

const initialCurrency = JSON.parse(localStorage.getItem("currency")) || {
  currency: "USD",
  symbol: "$",
};

const currencies = {
  EUR: { currency: "EUR", symbol: "€" },
  JPY: { currency: "JPY", symbol: "¥" },
  GBP: { currency: "GBP", symbol: "£" },
  RUB: { currency: "RUB", symbol: "₽" },
  AED: { currency: "AED", symbol: "د.إ" },
  USD: { currency: "USD", symbol: "$" },
};

const projectSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    currency: initialCurrency,
    currencyList: Object.keys(currencies),
    isDrawerOpen: false,
    error: null,
    isLoading: false,
  },
  reducers: {
    setProjects: (state, action) => {
      state.data = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = currencies[action.payload] || currencies.USD;
      localStorage.setItem("currency", JSON.stringify(state.currency));
    },
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProjects, setCurrency, setIsDrawerOpen, setError, setIsLoading } = projectSlice.actions;
export default projectSlice.reducer;
