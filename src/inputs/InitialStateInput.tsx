import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Orientations } from "../MarsRover/MarsRover.interface";

interface IInitialStateInput {
  setInitialState: (x: number, y: number, orientation: Orientations) => void;
}

export const InitialStateInput = ({
  setInitialState,
}: IInitialStateInput): JSX.Element => {
  const [positionX, setPositionX] = useState<string>("");
  const [positionY, setPositionY] = useState<string>("");
  const [orientation, setOrientation] = useState<Orientations>(
    Orientations.North
  );

  useEffect(() => {
    setPositionX("");
    setPositionY("");
    setOrientation(Orientations.North);
  }, []);

  const onSetInitialPosition = (): void => {
    if (positionX && positionY && orientation) {
      setInitialState(parseInt(positionX), parseInt(positionY), orientation);
    } else {
      alert("Please enter the position and orientation");
    }
  };

  return (
    <VStack spacing="5%" alignItems="start">
      <FormControl>
        <FormLabel>Initial X Position</FormLabel>
        <Input
          type="number"
          value={positionX}
          onChange={(e) => setPositionX(e.target.value)}
          placeholder="Enter the initial X position"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Initial Y Position</FormLabel>
        <Input
          type="number"
          value={positionY}
          onChange={(e) => setPositionY(e.target.value)}
          placeholder="Enter the initial Y position"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Initial Orientation</FormLabel>
        <Input
          maxLength={1}
          value={orientation}
          onChange={(e) => setOrientation(e.target.value as Orientations)}
          placeholder="Enter the initial orientation (N, E, S, W)"
        />
      </FormControl>
      <Button colorScheme="telegram" onClick={onSetInitialPosition}>
        Next
      </Button>
    </VStack>
  );
};
