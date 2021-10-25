import { MarsRover } from "./MarsRover";
import { OrientationOrder, Orientations } from "./MarsRover.interface";

describe("Mars Rover class test", () => {
  let marsRoverInstance: MarsRover;

  beforeEach(() => {
    marsRoverInstance = new MarsRover(5, 5);
  });

  it("should set mars rover initial position and orientation", () => {
    const positionX = 1;
    const positionY = 1;
    const orientation = Orientations.North;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(orientation)
    );
  });

  it("should move mars rover one position", () => {
    const positionX = 1;
    const positionY = 1;
    const orientation = Orientations.South;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.moveMarsRover();
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY - 1);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(orientation)
    );
  });

  it("should not move mars rover if limit has been reached", () => {
    const positionX = 5;
    const positionY = 1;
    const orientation = Orientations.East;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.moveMarsRover();
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(orientation)
    );
  });

  it("should not move mars rover if bottom limit has been reached", () => {
    const positionX = 1;
    const positionY = 0;
    const orientation = Orientations.South;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.moveMarsRover();
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(orientation)
    );
  });

  it("should turn mars rover to the 180 degrees to the left", () => {
    const positionX = 1;
    const positionY = 1;
    const orientation = Orientations.North;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.turnMarsRoverLeft();
    marsRoverInstance.turnMarsRoverLeft();
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(Orientations.South)
    );
  });

  it("should turn mars rover to the 270 degrees to the right", () => {
    const positionX = 1;
    const positionY = 1;
    const orientation = Orientations.West;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.turnMarsRoverRight();
    marsRoverInstance.turnMarsRoverRight();
    marsRoverInstance.turnMarsRoverRight();
    expect(marsRoverInstance.positionX).toEqual(positionX);
    expect(marsRoverInstance.positionY).toEqual(positionY);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(Orientations.South)
    );
  });

  it("should move mars rover to position 1 2 N", () => {
    const positionX = 1;
    const positionY = 2;
    const orientation = Orientations.North;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.parseCommandLine("LMLMLMLMM");
    expect(marsRoverInstance.positionX).toEqual(1);
    expect(marsRoverInstance.positionY).toEqual(3);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(Orientations.North)
    );
  });

  it("should move mars rover to position 5 1 E", () => {
    const positionX = 3;
    const positionY = 3;
    const orientation = Orientations.East;
    marsRoverInstance.setMarsRoverInitialState(
      positionX,
      positionY,
      orientation
    );
    marsRoverInstance.parseCommandLine("MMRMMRMRRM");
    expect(marsRoverInstance.positionX).toEqual(5);
    expect(marsRoverInstance.positionY).toEqual(1);
    expect(marsRoverInstance.orientationIndex).toEqual(
      OrientationOrder.indexOf(Orientations.East)
    );
  });
});
