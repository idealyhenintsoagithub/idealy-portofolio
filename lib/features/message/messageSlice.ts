import { createAppSlice } from "@/lib/createAppSlice";

export const messageSlice = createAppSlice({
  name: "messageSlice",
  initialState: {},
  reducers: (create) => ({
    createMessage: create.reducer((state) => {

    }),
  }),
  selectors: {},
});

export const { createMessage } = messageSlice.actions;