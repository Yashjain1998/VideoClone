import React from 'react';
import Feed from './components/Feed';
import VideoDetails from "./components/VideoDetails";
import Header from "./components/Header";
import { AppContext } from "./context/contextApi";
import { BrowserRouter,Route,Routes} from 'react-router-dom';



function App(){
  return(
  <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
    </AppContext>
  );
};

export default App;
