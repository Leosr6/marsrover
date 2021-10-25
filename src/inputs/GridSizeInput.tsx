import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";

interface IGridSizeInput {
  setGridSize: (x: number, y: number) => void;
}

export const GridSizeInput = ({ setGridSize }: IGridSizeInput): JSX.Element => {
  const [gridSizeX, setGridSizeX] = useState<string>("");
  const [gridSizeY, setGridSizeY] = useState<string>("");

  useEffect(() => {
    setGridSizeX("");
    setGridSizeY("");
  }, []);

  const onSetGridSize = (): void => {
    if (gridSizeX && gridSizeY) {
      setGridSize(parseInt(gridSizeX), parseInt(gridSizeY));
    } else {
      alert("Please enter both dimensions");
    }
  };

  return (
    <VStack spacing="5%" alignItems="start">
      <FormControl>
        <FormLabel>Grid Width</FormLabel>
        <Input
          type="number"
          value={gridSizeX}
          onChange={(e) => setGridSizeX(e.target.value)}
          placeholder="Enter the grid X dimension"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Grid Height</FormLabel>
        <Input
          type="number"
          value={gridSizeY}
          onChange={(e) => setGridSizeY(e.target.value)}
          placeholder="Enter the grid Y dimension"
        />
      </FormControl>
      <Button colorScheme="telegram" onClick={onSetGridSize}>
        Next
      </Button>
    </VStack>
  );
};
