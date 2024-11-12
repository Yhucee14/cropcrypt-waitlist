import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Community from "./routes/Community";
import JoinWaitlist from "./routes/JoinWaitlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/community" element={<Community />} />
        <Route path="/waitlist" element={<JoinWaitlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
