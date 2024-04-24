import { useScroll, useSpring } from "framer-motion"
import { useQuery } from "react-query"
import { motion } from "framer-motion"
import { getAgents } from "../../services/valorant-services"
import Image from "../../components/ui/image"
import ParallaxText from "../../components/ui/paralax-text"
import AgentsSkillsCard from "../../components/shread/agents-skill-card"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md"

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
  console.log(isLoading)
  console.log(isError)

  //istege gore aktif edilebilir
  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="bg-[#ECE8E1] "
      >
        <motion.div className="fixed top-10 right-10 flex flex-col">
          <span className="text-6xl font-thin">AGENTS</span>
          <div className="w-full h-0.5 bg-red-500"></div>
        </motion.div>
        {data &&
          data.map((item: any) => (
            <div
              style={{ scrollSnapAlign: "center" }}
              className="relative flex items-center justify-center overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: [null, 1.03, 1.03], x: 100 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="z-30 ml-56 cursor-pointer "
              >
                <Image image={item.fullPortrait} />
              </motion.div>
              <motion.div
                animate={{ x: 20 }}
                transition={{
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
                className="text-4xl absolute top-5 "
              >
                <MdOutlineKeyboardDoubleArrowLeft />
              </motion.div>

              <AgentsSkillsCard
                backgroundColor={item.backgroundGradientColors[1]}
                backgroundImage={item.background}
              />
              <div className="absolute z-20 ">
                <ParallaxText
                  textColor={item.backgroundGradientColors[3]}
                  baseVelocity={5}
                >
                  {item.displayName}
                </ParallaxText>
                <ParallaxText
                  textColor={item.backgroundGradientColors[3]}
                  baseVelocity={-5}
                >
                  {item.displayName}
                </ParallaxText>
              </div>
            </div>
          ))}
      </motion.div>
      <motion.div
        className="z-50 fixed bottom-0 left-0 right-0 top-0 h-2 bg-[#0F1923] "
        style={{ scaleX }}
      />
    </>
  )
}

export default Agents
