import { withLDProvider } from "launchdarkly-react-client-sdk";
import HelloWorld from "./HelloWorld"; //We will add this code in the next step

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
      </header>
    </div>
  );
}
// Update the export default to use your environment-specific client ID and a sample context:
export default withLDProvider({
  clientSideID: "6531716b00cad612d8b0f034",
  context: {
    kind: "user",
    key: "example_user",
    name: "Example user",
    email: "User@example.com",
  },
})(App);
