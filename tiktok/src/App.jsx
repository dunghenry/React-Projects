import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import Video from "./components/Video";
import { useEffect, useState } from "react";
import db from "./firebase";
function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      setData(prev => [...prev, item])
    });
  }, []);

  
  return (
    <div
      className="app flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden"
    >
      {
        data.map((item, index) => <Video key={index} data={item} />)
      }
    </div>
  );
}

export default App;
