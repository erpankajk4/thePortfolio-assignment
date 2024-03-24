// index.js
import { store } from "./app/store";
import { Provider } from "react-redux";
<Provider store={store}>
  <App />
</Provider>;
// store.js
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
  },
});
// features/reduces/AccountcounterSlice.js
const initialState = {
  amount: 10, // const amount= useSelector(state=>state.account.amount);
};
export const getUserAccount = createAsyncThunk(
  //  onClick={()=>dispatch(getUserAccount(id))}
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      //   const dispatch = useDispatch();  onClick={()=>dispatch(increment())}
      state.amount += 1; //immer library
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      // onClick={()=>dispatch(incrementByAmount(value))}
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});
export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
// bonusSlice.js
import { createAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  points: 11,
};
const incrementByAmount = createAction("account/incrementByAmount");
export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1;
      }
    });
  },
});
