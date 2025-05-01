import {SelectUsageExample} from "@/_SelectUsageExample.tsx";

function App() {
  return <div className="p-8 h-screen">
    <SelectUsageExample />
    <p>Default text</p>
    <p className="text-red">Red text</p>
    <p className="text-green">Green green</p>
  </div>;
}

export default App;
