import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "framer-motion/dom"

interface ParallaxProps {
  children: any
  baseVelocity: number
  textColor: string
  fontSize: string
}

function ParallaxText({
  children,
  baseVelocity = 100,
  textColor,
  fontSize,
}: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(50, -10, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <div className="overflow-hidden w-full tracking-tight leading-4 m-0 whitespace-nowrap flex flex-no-wrap">
      <motion.div
        className="font-semibold uppercase text-9xl flex whitespace-nowrap  "
        style={{ x }}
      >
        <span
          style={{
            WebkitTextStroke: `1.5px #${textColor}`,
            color: "transparent",
            fontSize: `${fontSize}rem`,
          }}
          className=" block mr-24 "
        >
          {children}{" "}
        </span>
        <span
          style={{
            WebkitTextStroke: `1.5px #${textColor}`,
            color: "transparent",
            fontSize: `${fontSize}rem`,
          }}
          className=" block mr-24 "
        >
          {children}{" "}
        </span>
        <span
          style={{
            WebkitTextStroke: `1.5px #${textColor}`,
            color: "transparent",
            fontSize: `${fontSize}rem`,
          }}
          className=" block mr-24 "
        >
          {children}
        </span>
        <span
          style={{
            WebkitTextStroke: `1.5px #${textColor}`,
            color: "transparent",
            fontSize: `${fontSize}rem`,
          }}
          className=" block mr-24 "
        >
          {children}{" "}
        </span>
      </motion.div>
    </div>
  )
}

export default ParallaxText
