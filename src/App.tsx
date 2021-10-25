import { useState } from "react";
import "./App.css";
import {
  VStack,
  HStack,
  Tabs,
  TabPanels,
  TabPanel,
  Image,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { GridSizeInput } from "./inputs/GridSizeInput";
import { InitialStateInput } from "./inputs/InitialStateInput";
import { CommandInput } from "./inputs/CommandInput";
import { MarsRover } from "./MarsRover/MarsRover";
import {
  OrientationOrder,
  Orientations,
} from "./MarsRover/MarsRover.interface";
import Logo from "./logo.png";

enum InputSteps {
  GridSize = 0,
  InitialState = 1,
  Command = 2,
}

function App() {
  const [activeTab, setActiveTab] = useState<InputSteps>(InputSteps.GridSize);
  const [marsRover, setMarsRover] = useState<MarsRover>();
  const [marsRoverState, setMarsRoverState] = useState<string>("");

  const setGridSize = (x: number, y: number): void => {
    const marsRover = new MarsRover(x, y);
    setMarsRover(marsRover);
    setActiveTab(InputSteps.InitialState);
  };

  const setInitialState = (
    x: number,
    y: number,
    orientation: Orientations
  ): void => {
    marsRover?.setMarsRoverInitialState(x, y, orientation);
    setActiveTab(InputSteps.Command);
    setMarsRoverState("");
  };

  const executeCommand = (commandLine: string): void => {
    marsRover?.parseCommandLine(commandLine);
    const { positionX, positionY, orientationIndex } = marsRover!;
    const orientation = OrientationOrder[orientationIndex];
    setMarsRoverState(
      `Position X: ${positionX}, Position Y: ${positionY}, Orientation: ${orientation}`
    );
  };

  return (
    <VStack spacing="5%" h="100vh" justifyContent="center" bgColor="#213a63">
      <VStack spacing="5%" h="60%" bgColor="white" p="3%">
        <Image alt="logo" src={Logo} />
        <Tabs index={activeTab} w="100%" isLazy>
          <TabPanels>
            <TabPanel tabIndex={InputSteps.GridSize}>
              <GridSizeInput setGridSize={setGridSize} />
            </TabPanel>
            <TabPanel tabIndex={InputSteps.InitialState}>
              <InitialStateInput setInitialState={setInitialState} />
            </TabPanel>
            <TabPanel tabIndex={InputSteps.Command}>
              <VStack spacing="5%" alignItems="start">
                <CommandInput executeCommand={executeCommand} />
                <Textarea value={marsRoverState} readOnly={true} />
                <HStack>
                  <Button
                    colorScheme="red"
                    onClick={() => setActiveTab(InputSteps.GridSize)}
                  >
                    Reset to start
                  </Button>
                  <Button
                    colorScheme="teal"
                    onClick={() => setActiveTab(InputSteps.InitialState)}
                  >
                    Reset to position
                  </Button>
                </HStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </VStack>
  );
}

export default App;
