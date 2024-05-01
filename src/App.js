import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PodcastGrid } from './components/PodcastGrid';
import { PodcastDetail } from './components/PodcastDetail';
import { Episode } from './components/Episode';
import { data as api } from './database/data';
import { useEffect, useState } from 'react';


function App() {

  const [podcastList, setPodcastList] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    api().then((data) => {
      setPodcastList(data)
    }).finally(()=> setLoading(false))

  }, [])


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/' element={<PodcastGrid podcastList={podcastList} loading={loading}/>} />

        <Route path='podcast/:podcastID' element={<PodcastDetail />} />

        <Route path='podcast/:podcastID/episode/:episodeID' element={<Episode />} />

      </Routes>



    </BrowserRouter>
  );
}

export default App;
