import { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { createApi } from 'unsplash-js'

function App() {

  const api = createApi({
    accessKey: "YKhKzn5dPZjklb3ioIYmAA2UhCGvPeDp3F9B0AfZVRo"
  })

  const [data, setData] = useState()

  useEffect(() => {
      api.search
      .getPhotos({query: "car"}).then(result => {
          setData(result.response.results);
      })
      .catch(() => {
          console.log("something went wrong!")
      })
  },[])


  return (
    <>
      <Header/>
      {data.map((item, index) => (
        <img key={index} src={item.urls.small} alt={item.alt_description}/>
      ))}
    </>
  )
}

export default App
