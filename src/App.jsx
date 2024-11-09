import { useContext, useEffect, useRef, useState } from 'react'
import { Header } from './Components/Header'
import { createApi } from 'unsplash-js'
import { Masonry } from '@mui/lab'
import "./App.css"
import { Card } from './Components/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { SearchProvider } from './context/SearchProvider'
import { SearchContext } from './context/searchContext'

function App() {

  const api = createApi({
    accessKey: "YKhKzn5dPZjklb3ioIYmAA2UhCGvPeDp3F9B0AfZVRo"
  })

  const { searchQuery } = useContext(SearchContext);
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(true)
  let index = useRef(1)

  useEffect(() => {

    index.current = 1;
    setHasMore(true)

      api.search
      .getPhotos({query: searchQuery, perPage: 30, page: index.current}).then(result => {
          setData(result.response.results);
      })
      .catch(() => {
          console.log("something went wrong!")
      })
  },[searchQuery])

  const moreData = () => {
    index.current += 1

    if (index.current > 3){
      setHasMore(false)
    }

    
    api.search
      .getPhotos({query: searchQuery, perPage: 30, page: index.current}).then(result => {
          setData(data.concat(result.response.results));
          console.log(data)
      })
      .catch(() => {
          console.log("something went wrong!")
      })
  }

  return (
    <>
      
        <Header/>
        <InfiniteScroll dataLength={data.length} hasMore={hasMore} next={moreData} style={{ overflow: "none"}}>
          <Masonry columns={{ xs: 2, sm: 3, md: 5}} spacing={{ xs: 2, sm: 4, md: 5}}>
          {data ? (
            data.length > 0 ? (
              data.map((item, index) => <Card key={index} item={item} />)
            ) : (
              <h3 className='mt-4'>No result found</h3>
            )
          ) : (
            <h3 className='mt-4'>Loading...</h3>
          )}
          </Masonry>
        </InfiniteScroll>
    </>
  )
}

export default App

