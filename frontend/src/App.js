import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              component={NotesListPage}
              element={<NotesListPage />}
            />
            <Route
              path="/note/:id"
              exact
              component={NotePage}
              element={<NotePage />}
            />
            <Route
              path="*"
              component={NotFoundPage}
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
