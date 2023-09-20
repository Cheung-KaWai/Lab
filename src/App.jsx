import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Layout } from "./components/Layout";
import { Router } from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
