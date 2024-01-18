import Image from "next/image"
interface PropertyImg {
  img: string,
  title: string,
}

function MediumCard(props: PropertyImg) {
  const { img, title} = props
  return (
    <div>
      <div className="relative h-80 w-80">
        <Image 
          src={img}
          alt={"Cover image of " + title}
          fill
        />
      </div>
      <h3>{title}</h3>
    </div>
  )
}

export default MediumCard