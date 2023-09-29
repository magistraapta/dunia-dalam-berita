import Image from 'next/image'
import Navbar from './components/Navbar'
import Content from './components/Content'
import ContentWrapper from './components/ContentWrapper'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <ContentWrapper/>
      
    </main>
  )
}
