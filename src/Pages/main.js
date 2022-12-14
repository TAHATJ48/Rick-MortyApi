import React from 'react'
import styled from 'styled-components'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Episodes from '../Components/Episodes'
import Episode from '../Components/Episodes/episode'
import Status from '../Components/Characters/status' 
import Random from '../Components/Characters/random'  
import ProviderStore from '../Components/Store/Store'
const Main = () => {
  return (
    <ProviderStore>
        <Routes>
          <Route path='/Rick-MortyApi/' element={<Episodes/>} />
          <Route path='/Rick-MortyApi/episode/:id' element={<Episode/>} />
          <Route path='/Rick-MortyApi/characters' element={<Status/>} />
          <Route path='/Rick-MortyApi/random' element={<Random/>} />
        </Routes>
    </ProviderStore>
  )
}

const MainWrapper = styled.main`
  max-width: 140rem;
  margin: 0 auto;
  padding: 4rem;
`

export default Main
