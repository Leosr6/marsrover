export enum Orientations {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

export type Command = "L" | "R" | "M";

export const OrientationOrder = [
  Orientations.North,
  Orientations.East,
  Orientations.South,
  Orientations.West,
];
