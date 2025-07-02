import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";

// Components
import { Navbar } from "./Components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:genreId" element={<Movies />} />
            <Route path="/tv_show/:genreId" element={<TvShows />} />
            <Route path="/about/:showFormat/:id" element={<About />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
