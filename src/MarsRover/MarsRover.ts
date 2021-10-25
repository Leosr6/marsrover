import { OrientationOrder, Command, Orientations } from "./MarsRover.interface";

export class MarsRover {
  public positionX = 0;
  public positionY = 0;
  public orientationIndex = 0;
  public limitX: number;
  public limitY: number;

  constructor(limitX: number, limitY: number) {
    this.limitX = limitX;
    this.limitY = limitY;
  }

  public moveMarsRover = (): boolean => {
    const orientation = OrientationOrder[this.orientationIndex];
    switch (orientation) {
      case "N":
        if (this.positionY >= this.limitY) return false;
        this.positionY += 1;
        break;
      case "S":
        if (this.positionY <= 0) return false;
        this.positionY -= 1;
        break;
      case "E":
        if (this.positionX >= this.limitX) return false;
        this.positionX += 1;
        break;
      case "W":
        if (this.positionX <= 0) return false;
        this.positionX -= 1;
        break;
    }
    return true;
  };

  public turnMarsRoverLeft = (): void => {
    const { orientationIndex } = this;
    this.orientationIndex =
      orientationIndex === 0
        ? OrientationOrder.length - 1
        : orientationIndex - 1;
  };

  public turnMarsRoverRight = (): void => {
    const { orientationIndex } = this;
    this.orientationIndex =
      orientationIndex === OrientationOrder.length - 1
        ? 0
        : orientationIndex + 1;
  };

  public parseCommandLine = (line: string): void => {
    for (let command of line) {
      switch (command as Command) {
        case "L":
          this.turnMarsRoverLeft();
          break;
        case "R":
          this.turnMarsRoverRight();
          break;
        case "M": {
          this.moveMarsRover();
          break;
        }
      }
    }
  };

  public setMarsRoverInitialState = (
    positionX: number,
    positionY: number,
    orientation: Orientations
  ): void => {
    this.positionX = positionX;
    this.positionY = positionY;
    this.orientationIndex = OrientationOrder.indexOf(orientation);
  };
}
