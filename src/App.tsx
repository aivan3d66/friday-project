import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import {ROUTE_PATH} from "./components/common/constants";
import {Auth} from "./components/Auth/Auth";
import {Profile} from "./components/Profile/Profile";
import {Error404} from "./components/Error404/Error404";
import {PasswordInput} from "./components/PasswordInput/PasswordInput";
import {PasswordRecovery} from "./components/PasswordRecovery/PasswordRecovery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={ROUTE_PATH.AUTH}
          element={<Auth/>}
        />
        <Route
          path={ROUTE_PATH.PROFILE}
          element={<Profile/>}
        />
        <Route
          path={ROUTE_PATH.ERROR}
          element={<Error404/>}
        />
        <Route
          path={ROUTE_PATH.PASSWORD_INPUT}
          element={<PasswordInput/>}
        />
        <Route
          path={ROUTE_PATH.PASSWORD_RECOVERY}
          element={<PasswordRecovery/>}
        />
      </Routes>
    </div>
  );
}

export default App;
