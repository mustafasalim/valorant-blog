import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

interface ImageProps {
  image: string
}

function Image({ image }: ImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className="h-screen flex justify-center items-center relative scroll-snap-align-center perspective-500">
      <div
        className="w-[800px] h-[900px] relative max-h-90vh m-20 overflow-hidden"
        ref={ref}
      >
        <img
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
          src={image}
        />
      </div>
      <motion.h2 style={{ y }}>{`#001`}</motion.h2>
    </section>
  )
}

export default Image
