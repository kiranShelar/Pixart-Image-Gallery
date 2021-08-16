import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Gallery from './components/Gallery'
import Input from './components/Input'
import { CircularProgress } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import Navbar from './components/Navbar'



const App = () => {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setformData] = useState('')
  const [page, setPage] = useState()

  const imageData = async (input, page)=>{
    setLoading(true)
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${!input ? 'dark' : input}&per_page=20&client_id=${process.env.REACT_APP_UNSPLASH_PUBLIC_KEY}`)
    const data = response.data;
    console.log(data);
    setPhotos(data)
    setLoading(false)
  }

  const handleChange = (event)=>{
    setformData(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    imageData(formData)
  }

  const pageChange = (event,value)=>{
    setPage(value)
    imageData(formData, value)
  }

  useEffect(()=>{
    imageData()
  },[])

  if (loading) return <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', height : '100vh'}}><CircularProgress size={100} pos/></div>

  return (
    <>
    <Navbar />
    <Container>
      <Input change={handleChange} submit={handleSubmit}/>
      <div style={{display:'flex', justifyContent:'center', margin:'1rem 0'}}>
        <Pagination
          page={page} 
          onChange={pageChange} 
          count={10} 
          variant="outlined" 
          color="primary" 
          size='large'
       />
      </div>
      <Gallery photos={photos.results} />
    </Container>
    </>
  )
}

export default App

