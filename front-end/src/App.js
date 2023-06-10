import React from 'react'
import { Layout } from 'antd'
import { Content, Header, Footer as AFooter } from 'antd/es/layout/layout'
import Navigation from './pages/navigation/Navigation'
import RoutesPage from './RoutesPage'
import Footer from './pages/footer/Footer'

const App = () => {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Content style={{minHeight:'80vh', paddingBlock:'10px'}}>
        <RoutesPage />
      </Content>
      <AFooter style={{backgroundColor: '#999'}} >
        <Footer />
      </AFooter>
    </Layout>
  )
}

export default App