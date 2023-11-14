import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Cake } from "./pages/Cake";
import { Home } from "./pages/Home";
import { Soda } from "./pages/Soda";
import { Total } from "./pages/Total";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/blog" element={<Blog />} />
        <Route path="/total/:numOne/:numTwo" element={<Total />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
