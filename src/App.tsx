import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/education" element={<Education />}></Route>
      <Route path="/experience" element={<Experience />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
