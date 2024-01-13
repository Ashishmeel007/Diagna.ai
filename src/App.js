import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/topBar";
import Sidebar from "./pages/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Line from "./pages/line";
import PatientList from "./pages/dashboard";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" >
          <Sidebar isSidebar={isSidebar} />
          <main className="content"  style={{ marginLeft: isSidebar ? '260px' : '70px' }}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/" element={<PatientList/>} />
            <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;