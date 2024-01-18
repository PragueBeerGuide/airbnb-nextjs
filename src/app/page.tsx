import ExploreNearby from '@/components/ExploreNearby';
import Header from '../components/Header'
import Banner from '@/components/Banner'

type ExploreData = {
  "img": string,
  "location": string,
  "distance": string,
};

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className="font-semibold text-2xl mb-8">Explore Nearby</h2>
          <ExploreNearby />
        </section>

        <section className='pt-6'>
          <h2 className="font-semibold text-2xl mb-8">Live Anywhere</h2>
        </section>
      </main>
    </>
      
  )
}
 
