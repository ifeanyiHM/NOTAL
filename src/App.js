import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteProvider } from "./context/NoteContext";
import { Suspense, lazy } from "react";

import "./Styles/App.css";
import Spinner from "./components/Spinner";
import InvalidPage from "./components/InvalidPage";

const Journal = lazy(() => import("./journal_component/Journal"));
const Create = lazy(() => import("./components/Create"));
const Note = lazy(() => import("./components/Note"));

function App() {
  return (
    <NoteProvider>
      <div>
        <Suspense fallback={<Spinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Journal />} />
              <Route path="/create" element={<Create />} />
              <Route path="/note" element={<Note />} />
              <Route path="*" element={<InvalidPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </NoteProvider>
  );
}

export default App;
