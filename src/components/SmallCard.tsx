import Image from "next/image"
import { Location } from "./ExploreNearby"

function SmallCard(props: Location) {
    const { img, location, distance } = props
  return (
    <div className="flex items-center gap-4 m-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
        {/* Left part */}
        <div className="relative h-16 w-16">
            <Image
                src={img}
                alt={location}
                fill
                className="rounded-lg"
            />
        </div>

        {/* Right part */}
        <div>
            <h2>{location}</h2>
            <h3>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard