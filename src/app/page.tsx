import Image from 'next/image'
import Header from '../components/Header'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>

      <main>
        <section>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        </section>
      </main>
    </>
      
  )
}
 