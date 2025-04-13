import "./App.css";
import "@ds/tokens/css/theme.css";
import "@ds/css/dist/base.css";
import { DsButton, DsInput } from "@ds/react";

function App() {
   return (
      <form>
         <DsInput label="Name" required placeholder="John Doe" />
         <DsInput
            type="email"
            label="Email"
            required
            placeholder="john.doe@example.com"
         />
         <DsButton type="submit">Send</DsButton>
      </form>
   );
}

export default App;
