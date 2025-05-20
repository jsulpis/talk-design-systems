import "./App.css";
import "@ds/tokens/css/theme.css";
import "@ds/css/dist/base.css";
import { DsButton, DsInput } from "@ds/react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <h1>
        <img src={reactLogo} alt="React" />
        Login
      </h1>
      <form>
        <DsInput label="Name" required placeholder="John Doe" />
        <DsInput type="email" label="Email" required placeholder="john.doe@example.com" />
        <DsButton type="submit">Login</DsButton>
      </form>
    </>
  );
}

export default App;
