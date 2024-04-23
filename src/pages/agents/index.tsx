import { useScroll, useSpring } from "framer-motion"
import { useQuery } from "react-query"
import { motion } from "framer-motion"
import { getAgents } from "../../services/valorant-services"
import Image from "../../components/ui/image"
import ParallaxText from "../../components/ui/paralax-text"

function Agents() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { data, isLoading, isError } = useQuery(
    "agents",
    async () => await getAgents()
  )

  console.log(data)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="bg-white"
      >
        {data &&
          data.map((item: any) => (
            <div className="relative flex items-center justify-center overflow-hidden">
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.8 }}
                className="z-30 ml-56 cursor-pointer"
              >
                <Image image={item.fullPortrait} />
              </motion.div>
              <div className=" bg-red-500 absolute left-0 z-50">
                <img
                  src={item.background}
                  alt=""
                />
              </div>
              <div className="absolute z-20 ">
                <ParallaxText baseVelocity={5}>{item.displayName}</ParallaxText>
                <ParallaxText baseVelocity={-5}>
                  {item.displayName}
                </ParallaxText>
              </div>
            </div>
          ))}
      </motion.div>
      <motion.div
        className="fixed left-0 right-0 h-5 bg-var(--accent) bottom-100"
        style={{ scaleX }}
      />
    </>
  )
}

export default Agents
