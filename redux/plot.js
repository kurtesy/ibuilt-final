import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: "2BHK",
  facing: "N",
  isGeneratingPlot: false,
  plotLength: 0, //45
  plotBreadth: 0,
  plotArea: 0,
  scale: 25,
  rotation: 0,
  icons: false,
  setbacks: {
    front: 4.6,
    back: 1.6,
    left: 1.6,
    right: 1.6
  },
  builtLength: 0,
  builtBreadth: 0,
  builtArea: 0,
  rooms: { nw: [], ne: [], sw: [], se: [] }
};

const plotSlice = createSlice({
  name: "plot",
  initialState,
  reducers: {
    setSetBacks: (state, action) => {
      state.setbacks = action.payload.setbacks;
    },
    setPlotDetails: (state, action) => {
      if (action.payload.length) state.plotLength = action.payload.length;
      if (action.payload.breadth) state.plotBreadth = action.payload.breadth;
      if (action.payload.scale) state.scale = scale;
      if (action.payload.type) state.type = type;
      if (action.payload.setbacks) state.setbacks = setbacks;
      state.plotArea = parseFloat(parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2);
    },
    setBuiltup: (state, action) => {
      state.builtLength = parseFloat(action.payload.builtLength).toFixed(2);
      state.builtBreadth = parseFloat(action.payload.builtBreadth).toFixed(2);
      state.builtArea = parseFloat(parseFloat(action.payload.builtLength) * parseFloat(action.payload.builtBreadth)).toFixed(2);
    },
    changeScale: (state, action) => {
      state.scale = action.payload.scale;
    },
    increaseScale: (state) => {
      return state.scale++;
    },
    toggleIcons: (state) => {
      state.icons = !state.icons;
    },
    decreaseScale: (state) => {
      return state.scale--;
    },
    updateType: (state, action) => {
      state.type = action.payload.type;
    },
    updateFacing: (state, action) => {
      state.facing = action.payload.facing;
    },
    addRooom: (state, action) => {
      const { location, data } = action.payload;
      data.forEach((room) => {
        state.rooms[location.toString()].push(room);
      });
    },
    removeRoom: (state, action) => {
      const { location, id } = action.payload;
      const filteredRooms = state.rooms[location.toString()].filter((room) => room.id !== id);
      state.rooms[location.toString()] = filteredRooms;
    },
    toggleGeneratePlot: (state, action) => {
      state.isGeneratingPlot = action.payload.isGenerating;
    },
    saveCurrentPlotState: (state, action) => {
      const type = state.type;
      const facing = state.facing;
      const plotLength = state.plotLength;
      const plotBreadth = state.plotBreadth;
      const scale = state.scale;
      const setbacks = state.setbacks;

      window.localStorage.setItem("type", JSON.stringify(type));
      window.localStorage.setItem("facing", JSON.stringify(facing));
      window.localStorage.setItem("plotLength", JSON.stringify(plotLength));
      window.localStorage.setItem("plotBreadth", JSON.stringify(plotBreadth));
      window.localStorage.setItem("scale", JSON.stringify(scale));
      window.localStorage.setItem("setbacks", JSON.stringify(setbacks));
    },
    restorePreviousPlotState: (state, action) => {
      const { type, facing, plotLength, plotBreadth, scale, setbacks } = action.payload;
      if (type) state.type = type;
      if (facing) state.facing = facing;
      if (plotLength) state.plotLength = plotLength;
      if (plotBreadth) state.plotBreadth = plotBreadth;
      if (scale) state.scale = scale;
      if (setbacks) state.setbacks = setbacks;
    },
    saveCode: (state) => {
      state.isGeneratingPlot = true;
    },
    setPlotRotation: (state, action) => {
      state.rotation = action.payload.rotation;
    },
    resetPlot: (state) => {
      return initialState;
    }
  }
});
export const {
  setPlotDetails,
  setBuiltup,
  changeScale,
  updateType,
  updateFacing,
  addRooom,
  removeRoom,
  toggleGeneratePlot,
  saveCurrentPlotState,
  restorePreviousPlotState,
  increaseScale,
  decreaseScale,
  saveCode,
  setPlotRotation,
  setSetBacks,
  resetPlot,
  toggleIcons
} = plotSlice.actions;
export default plotSlice.reducer
