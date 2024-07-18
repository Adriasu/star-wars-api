import React from "react";
//import StarWarsApi from './components/StarWarsApi'
import StarWarsUserList from "./components/StarWarsUserList";

const App = () => {
  return (
    <div
      className={`flex flex-col pt-16 
        bg-[url('https://static.vecteezy.com/system/resources/thumbnails/024/663/695/original/3d-particle-background-free-video.jpg')] bg-center bg-no-repeat bg-cover `}
    >
      <StarWarsUserList />
    </div>
  );
};

export default App;
