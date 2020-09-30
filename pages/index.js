import React from 'react'
import Layout from '../components/Layout/Layout'
import Colecciones from '../components/Main/Colecciones'
import MasVendido from '../components/Main/MasVendidos'
import Slider from '../components/Main/Slider'
import Productos from '../components/Main/Productos'

const Home = () => {
  return (
    <Layout>
      <Slider />
      <MasVendido />
      <Colecciones />
      <Productos />
    </Layout>
  )
}

export default Home;
