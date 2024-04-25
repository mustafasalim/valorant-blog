import { useRef } from "react"
import { motion } from "framer-motion"

interface ImageProps {
  image: string
}
function Image({ image }: ImageProps) {
  const ref = useRef(null)

  return (
    <motion.section className="h-screen group flex justify-center items-center relative perspective-500">
      <div
        className="w-[800px] h-[900px] relative max-h-90vh m-20 overflow-hidden "
        ref={ref}
      >
        <img
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover "
          src={image}
        />
      </div>
    </motion.section>
  )
}

export default Image
