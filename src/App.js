import Button from "./components/main-components/Button";

function App() {
  return (
    <>
      <div className="wrapper" style={{color: "white"}}>
        <Button type="primary">Button</Button>
        <Button type="secondary">Button</Button>
        <Button type="secondary" color="green">Button</Button>
        <Button type="secondary" color="grey">Button</Button>
        <Button type="primary" size="small" color="red">Button</Button>
        <Button type="primary" size="small" color="green">Button</Button>
        <Button type="primary" size="small" color="violet">Button</Button>
        <Button type="primary" size="small" color="grey">Button</Button>
        <Button isDisabled={true}>Disabled</Button>
      </div>
    </>
  );
}

export default App;
