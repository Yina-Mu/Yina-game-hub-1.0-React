import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <ButtonGroup spacing="6" size="lg">
      <Button colorScheme="teal">Submit</Button>
      <Button colorScheme="blue" variant="outline">
        Cancel
      </Button>
    </ButtonGroup>
  );
}

export default App;
