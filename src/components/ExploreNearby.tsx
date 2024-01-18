import { locations } from '../data/locations.js'
import SmallCard from './SmallCard';

export interface Location {
    img: string,
    location: string,
    distance: string,
    id?: number
}
   
export default function ExploreNearby() {
    const data: Location[] = locations;
   
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.map((item) => (
                    <SmallCard 
                        key={item.id}
                        img={item.img}
                        distance={item.distance}
                        location={item.location}
                    />
                ))}
            </div>
        </>
    )
  }