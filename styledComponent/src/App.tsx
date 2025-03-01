import { Button, Container, Input } from "./StyledComponents";

function App() {
  return (
    <>
      <Container>
        <Button variant="default">default</Button>
        <Button variant="primary">primary</Button>
        <Button variant="success">success</Button>
        <Button variant="warning">warning</Button>
      </Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input variant="default" placeholder="default" />
        <Input
          style={{ marginTop: "10px" }}
          variant="success"
          placeholder="success"
        />
      </div>
    </>
  );
}

export default App;
