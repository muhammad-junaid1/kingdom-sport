import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="wrapper" style={{color: "white", marginTop: 20}}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="secondary" color="green">Secondary</Button>
      <Button type="secondary" color="grey">Secondary</Button>
      <Button type="primary" color="red" size="small">Small</Button>
      <Button type="primary" color="green" size="small">Small</Button>
      <Button type="primary" color="grey" size="small">Small</Button>
      <Button type="primary" color="violet" size="small">Small</Button>
      <Button isDisabled={true}>Disabled</Button>
      <Button betButton={true}>
        <p>1x</p>
        <h3>4.75</h3>
      </Button>
      <Navbar/>
      </div>
    </>
  );
}

export default App;
