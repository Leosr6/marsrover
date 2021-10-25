import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";

interface ICommandInput {
  executeCommand: (line: string) => void;
}

export const CommandInput = ({
  executeCommand,
}: ICommandInput): JSX.Element => {
  const [commandLine, setCommandLine] = useState<string>("");

  useEffect(() => {
    setCommandLine("");
  }, []);

  const onClickExecute = (): void => {
    if (commandLine) {
      executeCommand(commandLine);
    } else {
      alert("Please enter a command line");
    }
  };

  return (
    <VStack spacing="5%" alignItems="start" w="100%">
      <FormControl>
        <FormLabel>Command Line</FormLabel>
        <Input
          value={commandLine}
          onChange={(e) => setCommandLine(e.target.value)}
          placeholder="Enter a command line"
        />
      </FormControl>
      <Button colorScheme="telegram" onClick={onClickExecute}>
        Execute
      </Button>
    </VStack>
  );
};
