import Image from "next/image"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image 
            src='https://links.papareact.com/0fm'
            alt='Banner background image'
            fill={true}
            style={{objectFit: "cover"}}
            priority={true}
        />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg font-semibold">Not sure where to go? Perfect.</p>

            <button className="text-purple-500 bg-white px-10 py-4 my-4 shadow-lg hover:shadow-2xl rounded-large active:scale-90 transition duration-150">I am flexible</button>
        </div>
    </div>
  )
}

export default Banner