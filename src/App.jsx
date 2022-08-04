import Layout from "./components/Layout";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coupon from "./pages/coupon";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/coupon" element={<Coupon />} exact />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
