import { ScaleLoader } from "react-spinners";
import { setSetBacks } from "../../../../redux/plot";
import { addRoomToPlot, addWallToRoom, updateRoomData, updateWall } from "../../../../redux/rooms";
import { store } from "../../../../redux/store";
import { getStatusClassNames } from "antd/es/_util/statusUtils";

export async function generateE2() {
  const state = store.getState();
  const { plotLength, plotBreadth } = state.plot;
  if (plotLength <= plotBreadth) {
    generateTypeA();
  } else {
    generateTypeB();
  }
}
function generateTypeA() {
  const state = store.getState();
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot;

  if (plotBreadth >= 15 && plotBreadth <= 20) {
    //Breadth range = 15-25
    setTimeout(() => {
      const bed1Length = builtLength * 1.0;
      const bed1Breadth = builtBreadth * 0.55;
      store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
      store.dispatch(updateRoomData({ id: "nw", roomType: "bedroom", length: bed1Length, breadth: bed1Breadth }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
      store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
      const toilet1Length = builtLength * 0.35;
      const toilet1Breadth = builtBreadth * 0.4;

      store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));
      store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet1Length, breadth: toilet1Breadth, position: { bottom: 0, left: 0 } }));
      store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
      store.dispatch(updateWall({ id: "toilet-nw-front", hasDoor: true }));

      //living
      const livingLength = builtLength * 0.55;
      const livingBreadth = builtBreadth * 0.45;

      store.dispatch(addRoomToPlot({ position: "ne", roomType: "living" }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "living", length: livingLength, breadth: livingBreadth }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "living", position: { bottom: 0, right: 0 } }));

      //drawing
      // const drawingLength = builtLength * 0.54
      // const drawingBreadth = builtBreadth * 0.25

      //   store.dispatch(addRoomToPlot({ position: '', roomType: 'drawing' }))
      //   store.dispatch(updateRoomData({ id: '', roomType: 'drawing', length: drawingLength, breadth: drawingBreadth,
      //   position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 } }))
      //   store.dispatch(addWallToRoom({ side: 'front', status: true, roomType: 'drawing', id: 'ne' }))
    }, 100);

    setTimeout(() => {
      //kitchen
      const kitchenLength = builtLength * 0.47;
      const kitchenBreadth = builtBreadth * 0.453;

      store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
      store.dispatch(updateRoomData({ id: "se", roomType: "kitchen", length: kitchenLength, breadth: kitchenBreadth, position: { bottom: 0, left: 0 } }));
      store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "se" }));
      store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.2 * kitchenBreadth, hasOpening: true }));

      //dining
      const diningLength = builtLength * 0.35;
      const diningBreadth = builtBreadth * 0.15;

      store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
      store.dispatch(updateRoomData({ id: "se", roomType: "dining", length: diningLength, breadth: diningBreadth }));
      store.dispatch(updateRoomData({ id: "se", roomType: "dining", position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)) } }));
    }, 100);

    //staircase
    setTimeout(() => {
      const stairCaseLength = builtLength * 0.3;
      const stairCaseBreadth = builtBreadth * 0.35;
      store.dispatch(addRoomToPlot({ position: "se", roomType: "stairCase" }));
      store.dispatch(updateRoomData({ id: "se", roomType: "stairCase", length: stairCaseLength, breadth: stairCaseBreadth, position: { bottom: 0, left: 0 } }));

      //parking

      const parkingLength = builtLength * 0.4;
      const parkingBreadth = builtBreadth * 0.35;
      store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "parking", length: parkingLength, breadth: parkingBreadth, position: { bottom: 0, right: 0 } }));
      store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "ne" }));
      store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "ne" }));
    }, 100);
  }

  if (plotBreadth >= 21 && plotBreadth <= 24) {
    //Breadth range = 22-35
    setTimeout(() => {
      const bed1Length = builtLength * 0.5;
      const bed1Breadth = builtBreadth * 0.5;

      store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "bedroom", length: bed1Length, breadth: bed1Breadth, position: { top: 0, left: 0 } }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
      store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "bedroom", id: "ne" }));

      const toilet2Length = builtLength * 0.49;
      const toilet2Breadth = builtBreadth * 0.15;

      store.dispatch(updateRoomData({ id: "ne", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth, position: { top: 0, left: 0 } }));
      store.dispatch(addRoomToPlot({ position: "ne", roomType: "toilet" }));
      store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "ne" }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
      store.dispatch(updateWall({ id: "toilet-ne-front", hasDoor: false }));
      store.dispatch(updateWall({ id: "toilet-ne-right", hasDoor: false }));

      const bed2Length = builtLength * 0.5;
      const bed2Breadth = builtBreadth * 0.5;
      store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
      store.dispatch(updateRoomData({ id: "nw", roomType: "bedroom", length: bed2Length, breadth: bed2Breadth }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
      store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));

      const livingLength = builtLength * 0.6;
      const livingBreadth = builtBreadth * 0.5;
      store.dispatch(updateRoomData({ id: "sw", roomType: "living", length: livingLength, breadth: livingBreadth, position: { bottom: 0, right: 0 } }));
      store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
      store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
      store.dispatch(updateWall({ id: "living-sw-front", openingLength: 0.6 * livingLength, hasOpening: true }));
    }, 100);

    setTimeout(() => {
      const kitchenLength = builtLength * 0.4;
      const kitchenBreadth = builtBreadth * 0.5;
      store.dispatch(updateRoomData({ id: "se", roomType: "kitchen", length: kitchenLength, breadth: kitchenBreadth, position: { bottom: 0, left: 0 } }));
      store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
      store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "se" }));
      store.dispatch(updateWall({ id: "kitchen-se-right", openingLength: 0.3 * kitchenBreadth, hasOpening: true }));

      const poojaLength = builtLength * 0.15;
      const poojaBreadth = builtBreadth * 0.15;
      store.dispatch(updateRoomData({ id: "ne", roomType: "pooja", length: poojaLength, breadth: poojaBreadth, position: { top: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 } }));
      store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
      store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "" }));
      store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "pooja", id: "" }));

      const commonToiletLength = builtLength * 0.19;
      const commonToiletBreadth = builtBreadth * 0.3;
      store.dispatch(updateRoomData({ id: "ne", roomType: "commonToilet", length: commonToiletLength, breadth: commonToiletBreadth }));
      store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "commonToilet", position: { top: Math.floor(bed2Breadth) * scale, right: 0 } }));

      store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "ne" }));
      store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "ne" }));
      store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "ne" }));
      store.dispatch(updateWall({ id: "commonToilet-ne-left", hasDoor: true }));

      const diningLength = builtLength * 0.25;
      const diningBreadth = builtBreadth * 0.15;

      store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
      store.dispatch(updateRoomData({ id: "", roomType: "dining", length: diningLength, breadth: diningBreadth }));
      store.dispatch(updateRoomData({ id: "", roomType: "dining", position: { left: Math.floor((kitchenLength - diningBreadth) * parseInt(scale)), bottom: 0 } }));
    }, 100);

    setTimeout(() => {
      const parkingLength = builtLength * 0.521;
      const parkingBreadth = builtBreadth * 0.18;
      store.dispatch(updateRoomData({ id: "ne", roomType: "parking", length: parkingLength, breadth: parkingBreadth }));
      store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));
      store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
      store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));

      const staircaseLength = builtLength * 0.4;
      const stairCaseBreadth = builtBreadth * 0.17;
      store.dispatch(updateRoomData({ id: "se", roomType: "stairCase", length: staircaseLength, breadth: stairCaseBreadth }));
      store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    }, 100);
  }
  if (plotBreadth >= 25 && plotBreadth <= 29) {
    //Breadth range = 25-29

    const bed1Length = builtLength * 0.5;
    const bed1Breadth = builtBreadth * 0.33;
    const bed2Length = builtLength * 0.5;
    const bed2Breadth = builtBreadth * 0.41;
    const bed3Length = builtLength * 0.38;
    const bed3Breadth = builtBreadth * 0.294;
    const livingLength = builtLength * 0.65;
    const livingBreadth = builtBreadth * 0.3;
    const kitchenLength = builtLength * 0.35;
    const kitchenBreadth = builtBreadth * 0.26;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.12;
    const parkingLength = builtLength * 0.35;
    const parkingBreadth = builtBreadth * 0.25;
    const staircaseLength = builtLength * 0.45;
    const stairCaseBreadth = builtBreadth * 0.21;
    const toilet1Length = builtLength * 0.0;
    const toilet1Breadth = builtBreadth * 0.0;
    const toilet2Length = builtLength * 0.31;
    const toilet2Breadth = builtBreadth * 0.11;
    const sitoutLength = builtLength * 0.15;
    const sitoutBreadth = builtBreadth * 0.2;
    const commonToiletLength = builtLength * 0.18;
    const commonToiletBreadth = builtBreadth * 0.25;
    const diningLength = builtLength * 0.4;
    const diningBreadth = builtBreadth * 0.16;
    const drawingLength = builtLength * 0.5;
    const drawingBreadth = builtBreadth * 0.29;
    const extraBathLength = builtLength * 0.4;
    const extraBathBreadth = builtBreadth * 0.14;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { top: Math.floor(bed1Breadth) * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, left: Math.floor(toilet2Length) * scale + setbacks.left * scale + 8 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + 20 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed2Breadth * parseInt(scale)), left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { bottom: Math.floor(parkingBreadth) * parseInt(scale), left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          position: { top: Math.floor(bed1Breadth + bed3Breadth) * parseInt(scale), right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(kitchenBreadth) * parseInt(scale), left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "drawing", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));

    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.4 * kitchenBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.5 * sitoutBreadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-sw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-ne-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "living-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-right", hasDoor: true }));
  }
  if (plotBreadth >= 30 && plotBreadth <= 34) {
    //Breadth range = 30-34
    const bed1Length = builtLength * 0.55;
    const bed1Breadth = builtBreadth * 0.4;
    const bed2Length = builtLength * 0.45;
    const bed2Breadth = builtBreadth * 0.47;
    const livingLength = builtLength * 0.55;
    const livingBreadth = builtBreadth * 0.3;
    const drawingLength = builtLength * 0.55;
    const drawingBreadth = builtBreadth * 0.3;
    const kitchenLength = builtLength * 0.45;
    const kitchenBreadth = builtBreadth * 0.25;
    const poojaLength = builtLength * 0.13;
    const poojaBreadth = builtBreadth * 0.1;
    const parkingLength = builtLength * 0.36;
    const parkingBreadth = builtBreadth * 0.2;
    const staircaseLength = builtLength * 0.3;
    const stairCaseBreadth = builtBreadth * 0.15;
    const toilet1Length = builtLength * 0.15;
    const toilet1Breadth = builtBreadth * 0.18;
    const toilet2Length = builtLength * 0.2;
    const toilet2Breadth = builtBreadth * 0.12;
    const sitoutLength = builtLength * 0.17;
    const sitoutBreadth = builtBreadth * 0.25;
    const commonToiletLength = builtLength * 0.17;
    const commonToiletBreadth = builtBreadth * 0.17;
    const diningLength = builtLength * 0.4;
    const diningBreadth = builtBreadth * 0.26;
    const extraBathLength = builtLength * 0.32;
    const extraBathBreadth = builtBreadth * 0.15;
    const extraBath1Length = builtLength * 0.35;
    const extraBath1Breadth = builtBreadth * 0.15;

    //add rooms
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(livingBreadth) * scale, right: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth) * parseInt(scale) + 9, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "sitout",
          position: { bottom: Math.floor(parkingBreadth * parseInt(scale)), right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          position: { bottom: Math.floor(parkingBreadth * parseInt(scale) + sitoutBreadth * parseInt(scale)), right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(kitchenBreadth * parseInt(scale)), left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { left: 0, top: Math.floor(bed2Length * parseInt(scale)) + setbacks.back * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { right: 0, top: Math.floor((bed1Length - extraBath1Breadth) * parseInt(scale) + setbacks.back * scale) }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "drawing", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.2 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.6 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-se-front", openingLength: 0.5 * poojaLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "toilet-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet- -right", hasDoor: true }));
  }
  if (plotBreadth >= 35 && plotBreadth <= 37) {
    //Breadth range = 35-37
    const bed1Length = builtLength * 0.48;
    const bed1Breadth = builtBreadth * 0.4;
    const bed2Length = builtLength * 0.45;
    const bed2Breadth = builtBreadth * 0.4;
    const bed3Length = builtLength * 0.38;
    const bed3Breadth = builtBreadth * 0.3;
    const livingLength = builtLength * 0.7;
    const livingBreadth = builtBreadth * 0.27;
    const kitchenLength = builtLength * 0.28;
    const kitchenBreadth = builtBreadth * 0.25;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.12;
    const parkingLength = builtLength * 0.45;
    const parkingBreadth = builtBreadth * 0.15;
    const staircaseLength = builtLength * 0.34;
    const stairCaseBreadth = builtBreadth * 0.19;

    const toilet2Length = builtLength * 0.31;
    const toilet2Breadth = builtBreadth * 0.11;
    const sitoutLength = builtLength * 0.4;
    const sitoutBreadth = builtBreadth * 0.07;
    const commonToiletLength = builtLength * 0.15;
    const commonToiletBreadth = builtBreadth * 0.205;
    const diningLength = builtLength * 0.3;
    const diningBreadth = builtBreadth * 0.15;
    const drawingLength = builtLength * 0.34;
    const drawingBreadth = builtBreadth * 0.33;
    const extraBathLength = builtLength * 0.35;
    const extraBathBreadth = builtBreadth * 0.16;
    const mediaLength = builtLength * 0.18;
    const mediaBreadth = builtBreadth * 0.2;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "media" }));
    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { right: 0, bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale + 1 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed2Breadth) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { right: 0, top: Math.floor(bed1Breadth) * scale + setbacks.left * scale + 8 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: 0, left: Math.floor(kitchenLength) * scale + 9 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "pooja",
          position: { right: Math.floor(extraBathLength) * scale - setbacks.left * scale, top: Math.floor(bed1Breadth) * scale + 8 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth }));
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: 0, left: Math.floor(bed1Length) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(kitchenBreadth + diningBreadth) * parseInt(scale), right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(kitchenBreadth + stairCaseBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { top: Math.floor(bed2Breadth) * parseInt(scale) + 9, left: 0 }
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));

    store.dispatch(updateWall({ id: "kitchen-se-right", openingLength: 0.4 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-front", openingLength: 0.4 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-back", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-ne-back", hasDoor: true }));
    store.dispatch(updateWall({ id: "drawing-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: true }));
  }
  if (plotBreadth >= 38 && plotBreadth <= 41) {
    //Breadth range = 38-41
    //bedroom3
    const bed1Length = builtLength * 0.46;
    const bed1Breadth = builtBreadth * 0.4;
    const bed2Length = builtLength * 0.45;
    const bed2Breadth = builtBreadth * 0.39;
    const bed3Length = builtLength * 0.4;
    const bed3Breadth = builtBreadth * 0.3;
    const livingLength = builtLength * 0.47;
    const livingBreadth = builtBreadth * 0.3;
    const kitchenLength = builtLength * 0.41;
    const kitchenBreadth = builtBreadth * 0.18;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.12;
    const parkingLength = builtLength * 0.45;
    const parkingBreadth = builtBreadth * 0.15;
    const stairCaseLength = builtLength * 0.4;
    const stairCaseBreadth = builtBreadth * 0.14;
    
    const sitoutLength = builtLength * 0.12;
    const sitoutBreadth = builtBreadth * 0.15;
    const commonToiletLength = builtLength * 0.2;
    const commonToiletBreadth = builtBreadth * 0.14;
    const diningLength = builtLength * 0.15;
    const diningBreadth = builtBreadth * 0.2;
    const drawingLength = builtLength * 0.35;
    const drawingBreadth = builtBreadth * 0.3;
    const extraBathLength = builtLength * 0.15;
    const extraBathBreadth = builtBreadth * 0.19;
    const extraBath1Length = builtLength * 0.15;
    const extraBath1Breadth = builtBreadth * 0.18;
    const extraSitoutLength = builtLength * 0.25;
    const extraSitoutBreadth = builtBreadth * 0.15;
    
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));
        
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));
    

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { top: Math.floor(bed2Breadth + commonToiletBreadth) * scale + 12, left: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed2Breadth) * scale + 12 }
        })
      );
      
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth - poojaBreadth) * parseInt(scale) + 9, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: stairCaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { right: 0, top: (Math.floor(bed1Breadth+livingBreadth) * scale + setbacks.back * scale)}
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,

        })
      );
      
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + setbacks.back * scale }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(kitchenLength) * scale/2.5, left: (Math.floor(kitchenLength) * scale +15) }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,          
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { left: 0, top: (Math.floor(bed2Breadth-extraBathBreadth) * scale + setbacks.back * scale+15)}
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: (Math.floor(bed1Breadth-extraBath1Breadth-poojaBreadth) * scale+setbacks.back*scale+15), right:0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top:0, right:Math.floor(bed1Length)*scale }
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "drawing", id: "ne" }));
    
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "ne" }));
    
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "sitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "se" }));
    

    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.4 * kitchenBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.5 * sitoutBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-back", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-right", hasDoor: true }));
    
  }
  if (plotBreadth >= 42 && plotBreadth <= 46) {
    //Breadth range = 42-46
    const bed1Length = builtLength * 0.45;
    const bed1Breadth = builtBreadth * 0.35;
    const bed2Length = builtLength * 0.45;
    const bed2Breadth = builtBreadth * 0.35;
    const bed3Length = builtLength * 0.4;
    const bed3Breadth = builtBreadth * 0.28;
    const livingLength = builtLength * 0.6;
    const livingBreadth = builtBreadth * 0.25;
    const kitchenLength = builtLength * 0.4;
    const kitchenBreadth = builtBreadth * 0.17;
    const poojaLength = builtLength * 0.14;
    const poojaBreadth = builtBreadth * 0.1;
    const parkingLength = builtLength * 0.5;
    const parkingBreadth = builtBreadth * 0.15;
    const staircaseLength = builtLength * 0.33;
    const stairCaseBreadth = builtBreadth * 0.25;
    const toilet1Length = builtLength * 0.0;
    const toilet1Breadth = builtBreadth * 0.0;
    const toilet2Length = builtLength * 0.324;
    const toilet2Breadth = builtBreadth * 0.11;
    const sitoutLength = builtLength * 0.25;
    const sitoutBreadth = builtBreadth * 0.12;
    const commonToiletLength = builtLength * 0.14;
    const commonToiletBreadth = builtBreadth * 0.2;
    const diningLength = builtLength * 0.16;
    const diningBreadth = builtBreadth * 0.17;
    const drawingLength = builtLength * 0.6;
    const drawingBreadth = builtBreadth * 0.27;
    const extraBathLength = builtLength * 0.33;
    const extraBathBreadth = builtBreadth * 0.16;
    const mediaLength = builtLength * 0.35;
    const mediaBreadth = builtBreadth * 0.16;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "media" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale - setbacks.front * scale + 2, left: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed1Breadth + mediaBreadth) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, left: Math.floor(toilet2Length) * scale + setbacks.left * scale + 8 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth + mediaBreadth) * parseInt(scale), right: Math.floor(commonToiletLength) * scale - setbacks.right * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth }));
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: Math.floor(bed2Breadth) * parseInt(scale) + setbacks.back * scale + 6, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right: 0, top: Math.floor(bed1Breadth) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(drawingBreadth + livingBreadth) * parseInt(scale), right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { left: Math.floor(bed3Length) * scale + 12, bottom: Math.floor(staircaseLength + drawingBreadth / 5) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "media", id: "nw" }));

    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.4 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.5 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-ne-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "living-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-right", hasDoor: false }));
  }
  if (plotBreadth >= 47 && plotBreadth <= 52) {
    //Breadth range = 47-52
    const bed1Length = builtLength * 0.42;
    const bed1Breadth = builtBreadth * 0.4;
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.4;
    const bed3Length = builtLength * 0.42;
    const bed3Breadth = builtBreadth * 0.3;
    const livingLength = builtLength * 0.42;
    const livingBreadth = builtBreadth * 0.22;
    const kitchenLength = builtLength * 0.4;
    const kitchenBreadth = builtBreadth * 0.2;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.06;
    const parkingLength = builtLength * 0.48;
    const parkingBreadth = builtBreadth * 0.2;
    const stairCaseLength = builtLength * 0.46;
    const stairCaseBreadth = builtBreadth * 0.12;
    const toilet1Length = builtLength * 0.0;
    const toilet1Breadth = builtBreadth * 0.0;
    const toilet2Length = builtLength * 0.31;
    const toilet2Breadth = builtBreadth * 0.11;
    const sitoutLength = builtLength * 0.15;
    const sitoutBreadth = builtBreadth * 0.15;
    const commonToiletLength = builtLength * 0.16;
    const commonToiletBreadth = builtBreadth * 0.2;
    const diningLength = builtLength * 0.26;
    const diningBreadth = builtBreadth * 0.13;
    const drawingLength = builtLength * 0.58;
    const drawingBreadth = builtBreadth * 0.25;
    const extraBathLength = builtLength * 0.23;
    const extraBathBreadth = builtBreadth * 0.3;
    const mediaLength = builtLength * 0.35;
    const mediaBreadth = builtBreadth * 0.16;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "stairCase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "media" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed2Breadth) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, left: Math.floor(bed2Length) * scale + setbacks.left * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: stairCaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth }));
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { bottom: Math.floor(bed3Breadth + setbacks.front) * parseInt(scale), left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: Math.floor(bed1Breadth + poojaBreadth) * parseInt(scale) + setbacks.back * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "dining", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));

    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.4 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.5 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: true, doorPosition: 280 }));
    store.dispatch(updateWall({ id: "bedroom-ne-left", hasDoor: true, doorPosition: 280 }));
    store.dispatch(updateWall({ id: "bedroom-sw-back", hasDoor: true, doorPosition: 160 }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "living-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-left", hasDoor: true }));
  }

  if (plotBreadth >= 53 && plotBreadth <= 57) {
    //Breadth range = 53-57
    const bed1Length = builtLength * 0.42;
    const bed1Breadth = builtBreadth * 0.35;
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.35;
    const bed3Length = builtLength * 0.4;
    const bed3Breadth = builtBreadth * 0.22;
    const livingLength = builtLength * 0.65;
    const livingBreadth = builtBreadth * 0.23;
    const kitchenLength = builtLength * 0.4;
    const kitchenBreadth = builtBreadth * 0.16;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.12;
    const parkingLength = builtLength * 0.5;
    const parkingBreadth = builtBreadth * 0.2;
    const stairCaseLength = builtLength * 0.45;
    const stairCaseBreadth = builtBreadth * 0.16;
    const toilet1Length = builtLength * 0.0;
    const toilet1Breadth = builtBreadth * 0.0;
    const toilet2Length = builtLength * 0.31;
    const toilet2Breadth = builtBreadth * 0.11;
    const sitoutLength = builtLength * 0.21;
    const sitoutBreadth = builtBreadth * 0.216;
    const commonToiletLength = builtLength * 0.23;
    const commonToiletBreadth = builtBreadth * 0.18;
    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.15;
    const drawingLength = builtLength * 0.55;
    const drawingBreadth = builtBreadth * 0.2;
    const extraBathLength = builtLength * 0.35;
    const extraBathBreadth = builtBreadth * 0.16;
    const mediaLength = builtLength * 0.35;
    const mediaBreadth = builtBreadth * 0.2;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "stairCase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));
    // store.dispatch(addRoomToPlot({ position: 'ne', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "media" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale + 1, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed2Breadth) * scale + 11 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, left: Math.floor(toilet2Length) * scale + setbacks.left * scale + 8 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(kitchenBreadth + stairCaseBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth * parseInt(scale)), right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: stairCaseLength,
          breadth: stairCaseBreadth
        })
      );
      // store.dispatch(updateRoomData({ id: 'ne', roomType: 'toilet', length: toilet1Length, breadth: toilet1Breadth }))
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth }));
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: Math.floor(bed1Breadth + poojaBreadth) * parseInt(scale) + setbacks.back * scale + 3, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + 12 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: Math.floor(extraBathBreadth) * parseInt(scale), right: Math.floor(bed1Length) * scale + setbacks.right * scale - 6 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));

    store.dispatch(updateWall({ id: "pooja-se-left", openingLength: 0.4 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-left", openingLength: 0.5 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "media-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: true }));
  }

  if (plotBreadth >= 58 && plotBreadth <= 62) {
    //Breadth greater than 58-62
    const bed1Length = builtLength * 0.42;
    const bed1Breadth = builtBreadth * 0.31;
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.25;
    const bed3Length = builtLength * 0.45;
    const bed3Breadth = builtBreadth * 0.23;
    const bed4Length = builtLength * 0.4;
    const bed4Breadth = builtBreadth * 0.2;

    const livingLength = builtLength * 0.6;
    const livingBreadth = builtBreadth * 0.24;
    const kitchenLength = builtLength * 0.45;
    const kitchenBreadth = builtBreadth * 0.18;
    const poojaLength = builtLength * 0.17;
    const poojaBreadth = builtBreadth * 0.06;
    const parkingLength = builtLength * 0.36;
    const parkingBreadth = builtBreadth * 0.27;
    const stairCaseLength = builtLength * 0.36;
    const stairCaseBreadth = builtBreadth * 0.27;

    const sitoutLength = builtLength * 0.25;
    const sitoutBreadth = builtBreadth * 0.12;
    const commonToiletLength = builtLength * 0.185;
    const commonToiletBreadth = builtBreadth * 0.18;
    const diningLength = builtLength * 0.37;
    const diningBreadth = builtBreadth * 0.13;
    const drawingLength = builtLength * 0.34;
    const drawingBreadth = builtBreadth * 0.18;
    const extraBathLength = builtLength * 0.38;
    const extraBathBreadth = builtBreadth * 0.1;

    const extraSitoutLength = builtLength * 0.15;
    const extraSitoutBreadth = builtBreadth * 0.2;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "extraSitout" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: Math.floor(bed2Breadth) * scale + poojaBreadth * scale + 9, left: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: Math.floor(bed1Breadth) * scale + 10 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, right: Math.floor(bed1Length) * scale - setbacks.right * scale - 20 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: 0, right: Math.floor(parkingLength) * scale - 10 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale + 12, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth - poojaBreadth) * parseInt(scale) + 9, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: stairCaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: Math.floor(bed2Breadth) * parseInt(scale), left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: Math.floor(extraBathBreadth) * parseInt(scale), right: Math.floor(bed1Length) * scale + setbacks.right * scale + 3 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(bed1Breadth + poojaBreadth) * scale, right: 0 }
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "se" }));

    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.2 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.5 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-se-back", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-back", hasDoor: true }));

    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "extraBath-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraSitout-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: true }));
  }

  if (plotBreadth >= 63 && plotBreadth <= 67) {
    //Breadth greater than 63-67
    const bed1Length = builtLength * 0.42;
    const bed1Breadth = builtBreadth * 0.25;
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.25;
    const bed3Length = builtLength * 0.4;
    const bed3Breadth = builtBreadth * 0.23;
    const bed4Length = builtLength * 0.4;
    const bed4Breadth = builtBreadth * 0.2;

    const livingLength = builtLength * 0.6;
    const livingBreadth = builtBreadth * 0.25;
    const kitchenLength = builtLength * 0.4;
    const kitchenBreadth = builtBreadth * 0.15;
    const poojaLength = builtLength * 0.15;
    const poojaBreadth = builtBreadth * 0.05;
    const parkingLength = builtLength * 0.45;
    const parkingBreadth = builtBreadth * 0.195;
    const staircaseLength = builtLength * 0.33;
    const stairCaseBreadth = builtBreadth * 0.19;

    const sitoutLength = builtLength * 0.2;
    const sitoutBreadth = builtBreadth * 0.25;
    const commonToiletLength = builtLength * 0.25;
    const commonToiletBreadth = builtBreadth * 0.13;
    const diningLength = builtLength * 0.4;
    const diningBreadth = builtBreadth * 0.13;
    const drawingLength = builtLength * 0.6;
    const drawingBreadth = builtBreadth * 0.18;
    const extraBathLength = builtLength * 0.45;
    const extraBathBreadth = builtBreadth * 0.08;
    const mediaLength = builtLength * 0.35;
    const mediaBreadth = builtBreadth * 0.156;
    const extraSitoutLength = builtLength * 0.25;
    const extraSitoutBreadth = builtBreadth * 0.11;
    const extraBath2Length = builtLength * 0.16;
    const extraBath2Breadth = builtBreadth * 0.15;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { bottom: Math.floor(parkingBreadth + drawingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: Math.floor(bed1Breadth) * scale + poojaBreadth * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { left: 0, bottom: Math.floor(bed3Breadth + parkingBreadth) * scale - setbacks.front * scale + 3 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, right: Math.floor(bed1Length) * scale - setbacks.right * scale - 20 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale + 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed1Breadth - poojaBreadth) * parseInt(scale) + 0, right: Math.floor(extraSitoutLength / 1.5) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: Math.floor(bed2Breadth + mediaBreadth) * parseInt(scale) + setbacks.back * scale + 12, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + 6 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: Math.floor(extraBathBreadth) * parseInt(scale), left: Math.floor(bed2Length) * scale + setbacks.left * scale - 6 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(bed1Breadth) * scale - setbacks.back * scale, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBath2Length,
          breadth: extraBath2Breadth,
          position: { top: Math.floor(bed1Breadth + bed2Breadth) * scale - setbacks.back * scale, right: 0 }
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "drawing", id: "se" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "ne" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "stairCase", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "se" }));

    store.dispatch(updateWall({ id: "kitchen-se-left", openingLength: 0.3 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.3 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true }));

    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-ne-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "living-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: true }));
  }

  if (plotBreadth >= 68 && plotBreadth <= 75) {
    //Breadth greater than 68-75
    const bed1Length = builtLength * 0.42;
    const bed1Breadth = builtBreadth * 0.27;
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.25;
    const bed3Length = builtLength * 0.45;
    const bed3Breadth = builtBreadth * 0.2;
    const bed4Length = builtLength * 0.45;
    const bed4Breadth = builtBreadth * 0.2;

    const livingLength = builtLength * 0.55;
    const livingBreadth = builtBreadth * 0.27;
    const kitchenLength = builtLength * 0.45;
    const kitchenBreadth = builtBreadth * 0.16;
    const poojaLength = builtLength * 0.14;
    const poojaBreadth = builtBreadth * 0.08;
    const parkingLength = builtLength * 0.45;
    const parkingBreadth = builtBreadth * 0.16;
    const staircaseLength = builtLength * 0.35;
    const stairCaseBreadth = builtBreadth * 0.16;

    const sitoutLength = builtLength * 0.2;
    const sitoutBreadth = builtBreadth * 0.15;
    const commonToiletLength = builtLength * 0.2;
    const commonToiletBreadth = builtBreadth * 0.2;
    const diningLength = builtLength * 0.45;
    const diningBreadth = builtBreadth * 0.135;
    const drawingLength = builtLength * 0.55;
    const drawingBreadth = builtBreadth * 0.16;
    const extraBathLength = builtLength * 0.3;
    const extraBathBreadth = builtBreadth * 0.2;
    const mediaLength = builtLength * 0.35;
    const mediaBreadth = builtBreadth * 0.156;
    const extraSitoutLength = builtLength * 0.25;
    const extraSitoutBreadth = builtBreadth * 0.11;
    const extraBath2Length = builtLength * 0.17;
    const extraBath2Breadth = builtBreadth * 0.19;
    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "extraSitout" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { top: Math.floor(bed1Breadth + bed4Breadth) * scale + (extraSitoutBreadth / 2.1) * scale, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: Math.floor(bed1Breadth + extraSitoutBreadth) * scale - setbacks.back * 2.5 * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { left: 0, bottom: Math.floor(bed3Breadth + parkingBreadth) * scale - setbacks.front * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, right: Math.floor(bed1Length) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath2Length,
          breadth: extraBath2Breadth,
          position: { right: 0, bottom: Math.floor(drawingBreadth + parkingBreadth + bed3Breadth / 2) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale + 0, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          position: { top: Math.floor(bed2Breadth + mediaBreadth) * parseInt(scale) + 3, left: Math.floor(sitoutLength) * scale - 15 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          position: { top: Math.floor(bed2Breadth + mediaBreadth) * parseInt(scale) + setbacks.back * scale + 9, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { left: 0, top: Math.floor(bed2Breadth) * scale + 3 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet"
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale }
        })
      );
    }, 100);

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          position: { bottom: Math.floor(stairCaseBreadth + kitchenBreadth) * scale - setbacks.front * scale, left: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(bed1Breadth) * scale - setbacks.back * scale, right: 0 }
        })
      );
    }, 100);

    //Add walls
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "drawing", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "extraBath", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "parking", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "stairCase", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "se" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(updateWall({ id: "kitchen-se-right", openingLength: 0.4 * kitchenBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "sitout-se-right", openingLength: 0.3 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", openingLength: 0.1 * bed1Breadth, hasOpening: false }));

    //Add Doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-ne-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "living-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-back", hasDoor: true }));
  }
}

// length > breadth
function generateTypeB() {
  const state = store.getState();
  const { scale, builtLength, builtBreadth, plotBreadth, plotLength, setbacks } = state.plot;

  if (plotLength >= 20 && plotLength <= 24) {
    //Breadth :20-24
    const bed2Length = builtLength * 0.5;
    const bed2Breadth = builtBreadth * 0.69;

    const livingLength = builtLength * 0.5;
    const livingBreadth = builtBreadth * 0.54;

    const kitchenLength = builtLength * 0.45;
    const kitchenBreadth = builtBreadth * 0.45;

    const parkingLength = builtLength * 0.4;
    const parkingBreadth = builtBreadth * 0.36;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.36;
    const toilet1Length = builtLength * 0.2;
    const toilet1Breadth = builtBreadth * 0.2;

    const commonToiletLength = builtLength * 0.12;
    const commonToiletBreadth = builtBreadth * 0.35;
    const sitoutLength = builtLength * 0.12;
    const sitoutBreadth = builtBreadth * 0.4;

    const diningLength = builtLength * 0.52;
    const diningBreadth = builtBreadth * 0.31;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet1Length, breadth: toilet1Breadth, position: { left: 0, top: 0 } }));

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength * parseInt(scale)), bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { top: Math.floor(commonToiletBreadth) * scale + 9, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { left: Math.floor(kitchenLength) * scale + 12, bottom: 0 }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "kitchen", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "living", id: "sw" }));

    store.dispatch(updateWall({ id: "sitout-se-front", openingLength: 0.4 * sitoutBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "pooja-nw-right", openingLength: 0.1 * livingLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "bedroom-se-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-sw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }
  if (plotLength >= 25 && plotLength <= 29) {
    //Breadth :25-29
    const bed2Length = builtLength * 0.5;
    const bed2Breadth = builtBreadth * 0.99;

    const livingLength = builtLength * 0.5;
    const livingBreadth = builtBreadth * 0.7;

    const kitchenLength = builtLength * 0.25;
    const kitchenBreadth = builtBreadth * 0.35;

    const parkingLength = builtLength * 0.4;
    const parkingBreadth = builtBreadth * 0.35;
    const staircaseLength = builtLength * 0.35;
    const stairCaseBreadth = builtBreadth * 0.35;
    const toilet1Length = builtLength * 0.2;
    const toilet1Breadth = builtBreadth * 0.28;

    const commonToiletLength = builtLength * 0.15;
    const commonToiletBreadth = builtBreadth * 0.28;
    const sitoutLength = builtLength * 0.2;
    const sitoutBreadth = builtBreadth * 0.28;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { left: 0, top: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet1Length, breadth: toilet1Breadth, position: { top: 0, bottom: 0 } }));

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength * parseInt(scale)), bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { left: Math.floor(commonToiletLength) * scale + 18, top: 0 }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "living", id: "sw" }));

    store.dispatch(updateWall({ id: "sitout-sw-front", openingLength: 0.4 * sitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-nw-right", openingLength: 0.1 * livingLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-nw-left", hasDoor: true, doorPosition: 290 }));

    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-right", hasDoor: true }));
  }
  if (plotLength >= 30 && plotLength <= 32) {
    //Breadth :30-32
    const bed2Length = builtLength * 0.4;
    const bed2Breadth = builtBreadth * 0.7;
    const bed3Length = builtLength * 0.35;
    const bed3Breadth = builtBreadth * 0.65;
    const livingLength = builtLength * 0.25;
    const livingBreadth = builtBreadth * 0.65;
    const kitchenLength = builtLength * 0.5;
    const kitchenBreadth = builtBreadth * 0.35;

    const parkingLength = builtLength * 0.4;
    const parkingBreadth = builtBreadth * 0.31;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.3;

    const commonToiletLength = builtLength * 0.15;
    const commonToiletBreadth = builtBreadth * 0.2;
    const sitoutLength = builtLength * 0.11;
    const sitoutBreadth = builtBreadth * 0.2;

    const diningLength = builtLength * 0.33;
    const diningBreadth = builtBreadth * 0.3;
    const extraBathLength = builtLength * 0.1;
    const extraBathBreadth = builtBreadth * 0.3;
    const extraBath1Length = builtLength * 0.1;
    const extraBath1Breadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.1;
    const extraSitoutBreadth = builtBreadth * 0.3;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.3;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "living" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "sitout" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: Math.floor(bed2Length) * scale + 12, top: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength * parseInt(scale)), bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { top: 0, right: Math.floor(bed2Length) * scale + setbacks.right * scale + 9 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { right: Math.floor(bed2Length + commonToiletLength) * scale + 16 + setbacks.right * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { bottom: Math.floor(bed3Breadth) * scale, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: Math.floor(setbacks.back) * scale + 12, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: Math.floor(bed3Breadth) * scale + setbacks.back * scale, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(bed2Breadth) * scale + setbacks.back * scale, right: 0 }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));

    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening

    store.dispatch(updateWall({ id: "sitout-se-front", openingLength: 0.4 * sitoutBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "pooja-nw-right", openingLength: 0.1 * livingLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: true, doorPosition: 240 }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-sw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-nw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraSitout-sw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraSitout-nw-left", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-nw-front", hasDoor: true }));
  }
  if (plotLength >= 33 && plotLength <= 34) {
    //Breadth :33-34
    const bed2Length = builtLength * 0.37;
    const bed2Breadth = builtBreadth * 0.58;
    const bed3Length = builtLength * 0.43;
    const bed3Breadth = builtBreadth * 0.58;

    const livingLength = builtLength * 0.55;
    const livingBreadth = builtBreadth * 0.42;

    const kitchenLength = builtLength * 0.45;
    const kitchenBreadth = builtBreadth * 0.3;

    const parkingLength = builtLength * 0.4;
    const parkingBreadth = builtBreadth * 0.26;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.26;
    const toilet1Length = builtLength * 0.12;
    const toilet1Breadth = builtBreadth * 0.25;
    const poojaLength = builtLength * 0.1;
    const poojaBreadth = builtBreadth * 0.15;

    const commonToiletLength = builtLength * 0.09;
    const commonToiletBreadth = builtBreadth * 0.3;
    const sitoutLength = builtLength * 0.25;
    const sitoutBreadth = builtBreadth * 0.3;

    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.45;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "toilet" }));

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { right: Math.floor(bed2Length) * scale + 9, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { bottom: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength * parseInt(scale)), bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { right: 0, bottom: Math.floor(bed2Breadth) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "toilet",
          length: toilet1Length,
          breadth: toilet1Breadth,
          position: { right: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { left: 0, bottom: Math.floor(kitchenBreadth) * scale }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "se" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));

    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));

    //Add opening

    store.dispatch(updateWall({ id: "sitout-se-front", openingLength: 0.4 * sitoutBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "pooja-nw-right", openingLength: 0.1 * livingLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true, doorPosition: 230 }));
    store.dispatch(updateWall({ id: "bedroom-se-front", hasDoor: true, doorPosition: 275 }));

    store.dispatch(updateWall({ id: "toilet-se-front", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }

  if (plotLength >= 35 && plotLength <= 38) {
    //Breadth :35-38
    const bed2Length = builtLength * 0.35;
    const bed2Breadth = builtBreadth * 0.5;

    const bed4Length = builtLength * 0.37;
    const bed4Breadth = builtBreadth * 0.5;
    const livingLength = builtLength * 0.3;
    const livingBreadth = builtBreadth * 0.5;
    const drawingLength = builtLength * 0.4;
    const drawingBreadth = builtBreadth * 0.5;
    const kitchenLength = builtLength * 0.3;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.09;
    const poojaBreadth = builtBreadth * 0.15;
    const parkingLength = builtLength * 0.4;
    const parkingBreadth = builtBreadth * 0.25;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;
    const toilet1Length = builtLength * 0.11;
    const toilet1Breadth = builtBreadth * 0.11;

    const toilet4Length = builtLength * 0.1;
    const toilet4Breadth = builtBreadth * 0.25;
    const commonToiletLength = builtLength * 0.185;
    const commonToiletBreadth = builtBreadth * 0.35;
    const extraSitoutLength = builtLength * 0.15;
    const extraSitoutBreadth = builtBreadth * 0.3;

    const diningLength = builtLength * 0.14;
    const diningBreadth = builtBreadth * 0.4;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));
    // store.dispatch(addRoomToPlot({ position: 'se', roomType: 'toilet' }))
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "drawing" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { left: Math.floor(commonToiletLength) * scale - setbacks.left * scale + 12, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: Math.floor(drawingLength) * scale + setbacks.right * scale - 18, bottom: 0 }
        })
      );
    }, 100);
    store.dispatch(
      updateRoomData({
        id: "ne",
        roomType: "drawing",
        length: drawingLength,
        breadth: drawingBreadth,
        position: { bottom: 0, right: 0 }
      })
    );
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: Math.floor(bed4Breadth) * scale + 14, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet1Length, breadth: toilet1Breadth, position: { top: 0, bottom: 0 } }));

      store.dispatch(updateRoomData({ id: "sw", roomType: "toilet", length: toilet4Length, breadth: toilet4Breadth, position: { top: 0, left: 0 } }));

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength * parseInt(scale)), bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: Math.floor(bed4Length) * scale + 9 + setbacks.right * scale + 9, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { left: 0, bottom: Math.floor(kitchenBreadth) * scale }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));

    //Add opening

    store.dispatch(updateWall({ id: "extraSitout-ne-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-nw-front", openingLength: 0.4 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: true, doorPosition: 220 }));

    store.dispatch(updateWall({ id: "bedroom-sw-left", hasDoor: true, doorPoistion: 220 }));
    store.dispatch(updateWall({ id: "commonToilet-nw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
  }

  if (plotLength >= 39 && plotLength <= 43) {
    //Breadth :39-43
    const bed2Length = builtLength * 0.35;
    const bed2Breadth = builtBreadth * 0.55;
    const bed3Length = builtLength * 0.28;
    const bed3Breadth = builtBreadth * 0.49;
    const bed4Length = builtLength * 0.3;
    const bed4Breadth = builtBreadth * 0.55;
    const livingLength = builtLength * 0.37;
    const livingBreadth = builtBreadth * 0.42;
    const drawingLength = builtLength * 0.29;
    const drawingBreadth = builtBreadth * 0.45;
    const kitchenLength = builtLength * 0.25;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.06;
    const poojaBreadth = builtBreadth * 0.1;
    const parkingLength = builtLength * 0.38;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;

    const commonToiletLength = builtLength * 0.07;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.15;
    const extraSitoutBreadth = builtBreadth * 0.15;

    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.35;

    const extraBathLength = builtLength * 0.15;
    const extraBathBreadth = builtBreadth * 0.2;
    const extraBath1Length = builtLength * 0.15;
    const extraBath1Breadth = builtBreadth * 0.2;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "ne", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { left: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,

          position: { right: 0, bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: 0, left: Math.floor(bed2Length) * scale + 3 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: 0, top: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale - setbacks.front * scale, right: Math.floor(bed3Length) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { right: 0 * scale, top: Math.floor(drawingLength) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: Math.floor(livingLength) * (scale - 6), top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: 0, left: Math.floor(bed2Length / 1.5 + extraBath1Length) * scale - 9 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: 0, left: Math.floor(bed2Length / 1.5) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { left: Math.floor(kitchenLength) * scale + 6, bottom: 0 }
        })
      );
    }, 100);
    //Add walls

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "kitchen", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "media", id: "" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    //Add opening

    store.dispatch(updateWall({ id: "extraSitout-nw-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-back", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-nw-front", hasDoor: true, doorPosition: 35 }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-sw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: false }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }

  if (plotLength >= 44 && plotLength <= 49) {
    //Breadth :44-49
    const bed2Length = builtLength * 0.3;
    const bed2Breadth = builtBreadth * 0.5;
    const bed3Length = builtLength * 0.35;
    const bed3Breadth = builtBreadth * 0.5;
    const bed4Length = builtLength * 0.25;
    const bed4Breadth = builtBreadth * 0.5;
    const livingLength = builtLength * 0.35;
    const livingBreadth = builtBreadth * 0.43;
    const drawingLength = builtLength * 0.35;
    const drawingBreadth = builtBreadth * 0.43;
    const kitchenLength = builtLength * 0.3;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.08;
    const poojaBreadth = builtBreadth * 0.15;
    const parkingLength = builtLength * 0.26;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;

    const commonToiletLength = builtLength * 0.07;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.07;
    const extraSitoutBreadth = builtBreadth * 0.19;
    const mediaLength = builtLength * 0.2;
    const mediaBreadth = builtBreadth * 0.3;
    const diningLength = builtLength * 0.12;
    const diningBreadth = builtBreadth * 0.3;

    const extraBathLength = builtLength * 0.1;
    const extraBathBreadth = builtBreadth * 0.2;
    const extraBath1Length = builtLength * 0.15;
    const extraBath1Breadth = builtBreadth * 0.15;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.1;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          // position: { left: 0, bottom:0 }
          position: { right: 0, bottom: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale - 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { left: 0, top: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { top: 0, left: Math.floor(livingLength) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: 0, right: Math.floor(bed2Length) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: Math.floor(setbacks.back + extraSitout1Breadth) * scale + 10 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: 0, top: Math.floor(setbacks.back * 2) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: Math.floor(mediaLength) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { bottom: Math.floor(bed4Breadth) * scale, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: 0, right: Math.floor(bed2Length - extraBath1Length) * scale + setbacks.right * scale + 9 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale + 18, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(setbacks.back) * scale, left: setbacks.left * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "media", id: "" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "extraSitout-se-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-back", hasDoor: true, doorPosition: 350 }));
    store.dispatch(updateWall({ id: "bedroom-se-back", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-nw-left", hasDoor: true, doorPosition: 230 }));
    store.dispatch(updateWall({ id: "extraSitout-ne-left", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }

  if (plotLength >= 50 && plotLength <= 54) {
    //Breadth :50-54
    const bed2Length = builtLength * 0.28;
    const bed2Breadth = builtBreadth * 0.5;
    const bed3Length = builtLength * 0.35;
    const bed3Breadth = builtBreadth * 0.5;
    const bed4Length = builtLength * 0.3;
    const bed4Breadth = builtBreadth * 0.45;
    const livingLength = builtLength * 0.35;
    const livingBreadth = builtBreadth * 0.43;
    const drawingLength = builtLength * 0.25;
    const drawingBreadth = builtBreadth * 0.5;
    const kitchenLength = builtLength * 0.3;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.06;
    const poojaBreadth = builtBreadth * 0.11;
    const parkingLength = builtLength * 0.26;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;

    const commonToiletLength = builtLength * 0.07;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.07;
    const extraSitoutBreadth = builtBreadth * 0.19;
    const mediaLength = builtLength * 0.17;
    const mediaBreadth = builtBreadth * 0.3;
    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.2;

    const extraBathLength = builtLength * 0.1;
    const extraBathBreadth = builtBreadth * 0.2;
    const extraBath1Length = builtLength * 0.15;
    const extraBath1Breadth = builtBreadth * 0.15;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.1;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          // position: { left: 0, bottom:0 }
          position: { right: 0, bottom: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { left: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale + 19 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { top: 0, left: Math.floor(bed4Length) * scale + 18 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: Math.floor(mediaBreadth) * scale, right: Math.floor(bed2Length) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: Math.floor(setbacks.back + extraSitout1Breadth) * scale + 10 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: 0, top: Math.floor(setbacks.back * 2) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right: Math.floor(bed2Length) * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { bottom: Math.floor(parkingBreadth + extraSitoutBreadth) * scale + 18, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: 0, right: Math.floor(bed2Length - extraBath1Length) * scale + setbacks.right * scale + 9 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale + 9, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(setbacks.back) * scale, left: setbacks.left * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "extraSitout-se-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-back", hasDoor: true, doorPosition: 370 }));
    store.dispatch(updateWall({ id: "bedroom-se-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-nw-left", hasDoor: true, doorPosition: 290 }));
    store.dispatch(updateWall({ id: "extraSitout-ne-left", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }

  if (plotLength >= 55 && plotLength <= 59) {
    //Breadth :55-59
    const bed2Length = builtLength * 0.28;
    const bed2Breadth = builtBreadth * 0.5;
    const bed3Length = builtLength * 0.35;
    const bed3Breadth = builtBreadth * 0.5;
    const bed4Length = builtLength * 0.3;
    const bed4Breadth = builtBreadth * 0.45;
    const livingLength = builtLength * 0.35;
    const livingBreadth = builtBreadth * 0.43;
    const drawingLength = builtLength * 0.24;
    const drawingBreadth = builtBreadth * 0.5;
    const kitchenLength = builtLength * 0.3;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.06;
    const poojaBreadth = builtBreadth * 0.11;
    const parkingLength = builtLength * 0.26;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;

    const commonToiletLength = builtLength * 0.07;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.07;
    const extraSitoutBreadth = builtBreadth * 0.19;
    const mediaLength = builtLength * 0.17;
    const mediaBreadth = builtBreadth * 0.3;
    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.2;

    const extraBathLength = builtLength * 0.1;
    const extraBathBreadth = builtBreadth * 0.2;
    const extraBath1Length = builtLength * 0.15;
    const extraBath1Breadth = builtBreadth * 0.15;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.1;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { right: 0, bottom: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { top: 0, left: Math.floor(drawingLength) * scale + 30 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale + 19 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: Math.floor(mediaBreadth) * scale, right: Math.floor(bed2Length) * scale + 9 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: Math.floor(setbacks.back + extraSitout1Breadth) * scale + 10 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: 0, top: Math.floor(setbacks.back * 2) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right: Math.floor(bed2Length) * scale + 9, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { bottom: Math.floor(parkingBreadth + extraSitoutBreadth) * scale + 18, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { top: 0, right: Math.floor(bed2Length - extraBath1Length) * scale + setbacks.right * scale + 9 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale + 9, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(setbacks.back) * scale, left: setbacks.left * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "media", id: "" }));

    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: false, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "extraSitout-se-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-back", hasDoor: true, doorPosition: 420 }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-nw-left", hasDoor: true, doorPosition: 300 }));
    store.dispatch(updateWall({ id: "extraSitout-ne-left", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }
  //**size 60x30 - code to execute breadth 30
  if (plotBreadth >= 25 && plotBreadth <= 35) {
  }

  if (plotLength >= 60 && plotLength <= 65) {
    const bed2Length = builtLength * 0.28;
    const bed2Breadth = builtBreadth * 0.5;
    const bed3Length = builtLength * 0.35;
    const bed3Breadth = builtBreadth * 0.5;
    const bed4Length = builtLength * 0.3;
    const bed4Breadth = builtBreadth * 0.45;
    const livingLength = builtLength * 0.31;
    const livingBreadth = builtBreadth * 0.45;
    const drawingLength = builtLength * 0.37;
    const drawingBreadth = builtBreadth * 0.45;
    const kitchenLength = builtLength * 0.28;
    const kitchenBreadth = builtBreadth * 0.35;
    const poojaLength = builtLength * 0.06;
    const poojaBreadth = builtBreadth * 0.11;
    const parkingLength = builtLength * 0.26;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.25;

    const commonToiletLength = builtLength * 0.07;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.07;
    const extraSitoutBreadth = builtBreadth * 0.19;
    const mediaLength = builtLength * 0.17;
    const mediaBreadth = builtBreadth * 0.28;
    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.2;

    const extraBathLength = builtLength * 0.2;
    const extraBathBreadth = builtBreadth * 0.2;
    const extraBath1Length = builtLength * 0.1;
    const extraBath1Breadth = builtBreadth * 0.28;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.1;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { right: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { right: 0, bottom: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { top: 0, left: Math.floor(drawingLength) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { left: 0, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { top: Math.floor(mediaBreadth) * scale, right: Math.floor(bed2Length) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { left: 0 * scale, top: Math.floor(setbacks.back + extraSitout1Breadth) * scale + 10 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { right: 0, top: Math.floor(setbacks.back * 2) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right: Math.floor(bed2Length) * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale, left: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { bottom: 0, right: Math.floor(bed3Length) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { bottom: Math.floor(parkingBreadth + extraSitoutBreadth) * scale + 18, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { bottom: Math.floor(parkingBreadth) * scale + 9, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(setbacks.back) * scale, left: setbacks.left * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "drawing", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "extraSitout-se-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-back", hasDoor: true, doorPosition: 470 }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-nw-left", hasDoor: true, doorPosition: 350 }));
    store.dispatch(updateWall({ id: "extraSitout-ne-left", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }

  if (plotLength >= 66 && plotLength <= 70) {
    //Breadth :60-70
    const bed2Length = builtLength * 0.28;
    const bed2Breadth = builtBreadth * 0.5;
    const bed3Length = builtLength * 0.28;
    const bed3Breadth = builtBreadth * 0.5;
    const bed4Length = builtLength * 0.3;
    const bed4Breadth = builtBreadth * 0.45;
    const livingLength = builtLength * 0.44;
    const livingBreadth = builtBreadth * 0.45;
    const drawingLength = builtLength * 0.3;
    const drawingBreadth = builtBreadth * 0.45;
    const kitchenLength = builtLength * 0.2;
    const kitchenBreadth = builtBreadth * 0.4;
    const poojaLength = builtLength * 0.06;
    const poojaBreadth = builtBreadth * 0.11;
    const parkingLength = builtLength * 0.26;
    const parkingBreadth = builtBreadth * 0.29;
    const staircaseLength = builtLength * 0.308;
    const stairCaseBreadth = builtBreadth * 0.29;

    const commonToiletLength = builtLength * 0.1;
    const commonToiletBreadth = builtBreadth * 0.3;
    const extraSitoutLength = builtLength * 0.14;
    const extraSitoutBreadth = builtBreadth * 0.19;
    const mediaLength = builtLength * 0.17;
    const mediaBreadth = builtBreadth * 0.28;
    const diningLength = builtLength * 0.2;
    const diningBreadth = builtBreadth * 0.2;

    const extraBathLength = builtLength * 0.08;
    const extraBathBreadth = builtBreadth * 0.3;
    const extraBath1Length = builtLength * 0.1;
    const extraBath1Breadth = builtBreadth * 0.25;
    const extraSitout2Length = builtLength * 0.07;
    const extraSitout2Breadth = builtBreadth * 0.25;
    const extraSitout1Length = builtLength * 0.15;
    const extraSitout1Breadth = builtBreadth * 0.1;

    //add rooms

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "parking" }));

    store.dispatch(addRoomToPlot({ position: "sw", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraBath" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "extraSitout" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "extraSitout" }));

    //update dimensions and positions

    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { left: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          position: { top: 0, left: Math.floor(bed2Length) * scale + 9 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { bottom: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { top: 0, right: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { right: Math.floor(bed4Length) * scale + 30, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { bottom: Math.floor(bed4Breadth) * scale, right: Math.floor(mediaLength + commonToiletLength) * scale - setbacks.right * scale - 9 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { left: Math.floor(staircaseLength) * scale, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { right: 0 * scale, bottom: Math.floor(bed4Breadth) * scale + setbacks.front * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "extraSitout",
          length: extraSitoutLength,
          breadth: extraSitoutBreadth,
          position: { top: 0, right: Math.floor(setbacks.right) * scale + 18 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { right: Math.floor(commonToiletLength) * scale - setbacks.right * scale + 12, bottom: Math.floor(bed4Breadth) * scale + 12 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { bottom: Math.floor(stairCaseBreadth) * scale - setbacks.front * scale, left: Math.floor(kitchenLength) * scale }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraBath",
          length: extraBathLength,
          breadth: extraBathBreadth,
          position: { top: Math.floor(extraSitout1Breadth + setbacks.back) * scale, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraBath",
          length: extraBath1Length,
          breadth: extraBath1Breadth,
          position: { left: Math.floor(bed2Length + bed3Length) * scale + setbacks.left * scale, top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "extraSitout",
          length: extraSitout2Length,
          breadth: extraSitout2Breadth,
          position: { bottom: Math.floor(parkingBreadth) * scale, right: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "extraSitout",
          length: extraSitout1Length,
          breadth: extraSitout1Breadth,
          position: { top: Math.floor(setbacks.back) * scale, left: setbacks.left * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));

    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: false, roomType: "drawing", id: "" }));

    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraBath", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraBath", id: "nw" }));

    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "extraSitout", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "extraSitout", id: "nw" }));

    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "extraSitout-se-front", openingLength: 0.4 * extraSitoutBreadth, hasOpening: true }));
    store.dispatch(updateWall({ id: "pooja-ne-front", openingLength: 0.5 * poojaLength, hasOpening: true }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true, doorPosition: 30 }));
    store.dispatch(updateWall({ id: "bedroom-se-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "bedroom-nw-right", hasDoor: true, doorPosition: 350 }));
    store.dispatch(updateWall({ id: "extraSitout-ne-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-nw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "extraBath-sw-front", hasDoor: true }));

    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: true }));
  }

  if (plotLength >= 71 && plotLength <= 80) {
    //Breadth :71-80
    const bed1Length = builtLength * 0.25;
    const bed1Breadth = builtBreadth * 0.35;
    const bed2Length = builtLength * 0.25;
    const bed2Breadth = builtBreadth * 0.46;
    const bed3Length = builtLength * 0.25;
    const bed3Breadth = builtBreadth * 0.4;
    const bed4Length = builtLength * 0.25;
    const bed4Breadth = builtBreadth * 0.4;
    const livingLength = builtLength * 0.25;
    const livingBreadth = builtBreadth * 0.4;
    const drawingLength = builtLength * 0.25;
    const drawingBreadth = builtBreadth * 0.5;
    const kitchenLength = builtLength * 0.22;
    const kitchenBreadth = builtBreadth * 0.31;
    const poojaLength = builtLength * 0.1;
    const poojaBreadth = builtBreadth * 0.14;
    const parkingLength = builtLength * 0.272;
    const parkingBreadth = builtBreadth * 0.31;
    const staircaseLength = builtLength * 0.23;
    const stairCaseBreadth = builtBreadth * 0.17;
    const toilet1Length = builtLength * 0.1;
    const toilet1Breadth = builtBreadth * 0.12;
    const toilet2Length = builtLength * 0.07;
    const toilet2Breadth = builtBreadth * 0.13;
    const toilet3Length = builtLength * 0.08;
    const toilet3Breadth = builtBreadth * 0.22;
    const toilet4Length = builtLength * 0.1;
    const toilet4Breadth = builtBreadth * 0.21;
    const commonToiletLength = builtLength * 0.15;
    const commonToiletBreadth = builtBreadth * 0.16;
    const sitoutLength = builtLength * 0.155;
    const sitoutBreadth = builtBreadth * 0.18;
    const mediaLength = builtLength * 0.14;
    const mediaBreadth = builtBreadth * 0.24;
    const diningLength = builtLength * 0.28;
    const diningBreadth = builtBreadth * 0.3;

    //add rooms
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "bedroom" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "living" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "pooja" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "kitchen" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "staircase" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "parking" }));
    store.dispatch(addRoomToPlot({ position: "ne", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "sw", roomType: "toilet" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "commonToilet" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "sitout" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "media" }));
    store.dispatch(addRoomToPlot({ position: "se", roomType: "dining" }));
    store.dispatch(addRoomToPlot({ position: "nw", roomType: "drawing" }));

    //update dimensions and positions
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "bedroom",
          length: bed1Length,
          breadth: bed1Breadth,
          position: { right: 0, bottom: Math.floor(parkingBreadth) * scale - setbacks.front * (scale - 2) }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "bedroom",
          length: bed2Length,
          breadth: bed2Breadth,
          position: { top: 0, left: Math.floor(bed4Length) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "bedroom",
          length: bed3Length,
          breadth: bed3Breadth,
          // position: { left: 0, bottom:0 }
          position: { top: 0, right: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "bedroom",
          length: bed4Length,
          breadth: bed4Breadth,
          position: { left: 0, top: 0 }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "sw",
          roomType: "living",
          length: livingLength,
          breadth: livingBreadth,
          position: { right: Math.floor(bed1Length) * scale, bottom: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "drawing",
          length: drawingLength,
          breadth: drawingBreadth,
          position: { bottom: Math.floor(livingBreadth) * scale + 8, right: Math.floor(bed1Length) * scale }
        })
      );
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "kitchen",
          length: kitchenLength,
          breadth: kitchenBreadth
        })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "pooja",
          length: poojaLength,
          breadth: poojaBreadth,
          position: { right: Math.floor(bed3Length) * scale, top: 0 }
        })
      );
    }, 100);
    setTimeout(() => {
      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "stairCase",
          length: staircaseLength,
          breadth: stairCaseBreadth,
          position: { bottom: 0, left: 0 }
        })
      );
      store.dispatch(updateRoomData({ id: "nw", roomType: "toilet", length: toilet1Length, breadth: toilet1Breadth, position: { right: 0, top: 0 } }));
      store.dispatch(updateRoomData({ id: "ne", roomType: "toilet", length: toilet2Length, breadth: toilet2Breadth }));
      // position: { left: Math.floor(bed1Length-setbacks.left) *scale, top:0 }}))
      store.dispatch(updateRoomData({ id: "se", roomType: "toilet", length: toilet3Length, breadth: toilet3Breadth, position: { bottom: 0, left: 0 } }));
      // position: { bottom: Math.floor(poojaBreadth) *scale-6, left:0 }}))
      store.dispatch(
        updateRoomData({ id: "sw", roomType: "toilet", length: toilet4Length, breadth: toilet4Breadth, position: { right: 0, top: Math.floor(kitchenBreadth) * scale + setbacks.front * (scale - 6) } })
      );

      store.dispatch(
        updateRoomData({
          id: "ne",
          roomType: "parking",
          length: parkingLength,
          breadth: parkingBreadth,
          position: { right: 0, bottom: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "commonToilet",
          length: commonToiletLength,
          breadth: commonToiletBreadth,
          position: { bottom: Math.floor(kitchenBreadth) * scale + setbacks.front * scale, left: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "nw",
          roomType: "sitout",
          length: sitoutLength,
          breadth: sitoutBreadth,
          position: { right: Math.floor(bed3Length + poojaLength) * scale + setbacks.right * (scale + 3), top: 0 }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "media",
          length: mediaLength,
          breadth: mediaBreadth,
          position: { bottom: 0, left: Math.floor(kitchenLength) * scale }
        })
      );

      store.dispatch(
        updateRoomData({
          id: "se",
          roomType: "dining",
          length: diningLength,
          breadth: diningBreadth,
          position: { left: Math.floor(kitchenLength) * scale, bottom: Math.floor(mediaBreadth) * scale }
        })
      );
    }, 100);
    //Add walls
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "bedroom", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "bedroom", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "pooja", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "kitchen", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "toilet", id: "nw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "toilet", id: "ne" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "se" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "toilet", id: "se" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "front", status: false, roomType: "toilet", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "commonToilet", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: false, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "front", status: true, roomType: "sitout", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "parking", id: "" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "stairCase", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "drawing", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "right", status: true, roomType: "living", id: "sw" }));
    store.dispatch(addWallToRoom({ side: "back", status: true, roomType: "media", id: "" }));
    store.dispatch(addWallToRoom({ side: "left", status: true, roomType: "media", id: "" }));
    //Add opening
    store.dispatch(updateWall({ id: "media-se-right", openingLength: 0.3 * mediaBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "sitout-se-front", openingLength: 0.4 * sitoutBreadth, hasOpening: false }));
    store.dispatch(updateWall({ id: "pooja-nw-right", openingLength: 0.1 * livingLength, hasOpening: false }));
    //Add doors
    store.dispatch(updateWall({ id: "bedroom-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "bedroom-se-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "bedroom-sw-front", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-sw-left", hasDoor: true }));
    store.dispatch(updateWall({ id: "toilet-ne-front", hasDoor: false }));
    store.dispatch(updateWall({ id: "toilet-nw-right", hasDoor: true }));
    store.dispatch(updateWall({ id: "commonToilet-sw-front", hasDoor: false }));
  }
}
