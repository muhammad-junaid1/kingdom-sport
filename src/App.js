import Main from "./components/Main";
import useMediaQuery from "./useMediaQuery";

function App() {
  const checkMediaQuery = useMediaQuery('(max-width: 500px)')
  return (
    <>
        <Main checkMediaQuery={checkMediaQuery}/>
    </>
  );
}

export default App;
