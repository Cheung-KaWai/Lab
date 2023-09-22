import { Layout } from "./components/Layout";
import { Router } from "./router/Router";
import { MouseCursor } from "./components/MouseCursor";

function App() {
  return (
    <>
      <Layout>
        <MouseCursor />
        <Router />
      </Layout>
    </>
  );
}

export default App;
