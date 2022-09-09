import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import UsersList from "./pages/UsersList/UsersList";
import UserItemPage from "./pages/UserItemPage/UserItemPage";

function App() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/users' element={<UsersList/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
