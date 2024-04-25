import { motion } from "framer-motion"
import { useState } from "react"
interface AgentsSkillsCard {
  backgroundColor: string
  backgroundImage: string
  skills: [] | any
  agentDescription: string
}

function AgentsSkillsCard(props: AgentsSkillsCard) {
  const { backgroundColor, backgroundImage, skills, agentDescription } = props
  const [skillsDetail, setSkillsDetail] = useState<[] | any>([])

  return (
    <div className=" absolute left-0 z-40 group transition-colors cursor-pointer">
      <div className="relative w-full">
        <img
          style={{
            backgroundColor: `#${backgroundColor}`,
          }}
          src={backgroundImage}
          alt=""
        />

        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 4, left: 0 }}
          className="hidden group-hover:flex flex-col absolute bottom-0 top-0 left-48 z-50 text-[#ECE8E1] w-full  bg-black/90  h-full items-center justify-center "
        >
          <div className="w-[500px] mb-5  flex flex-col gap-y-2">
            <div className="font-medium text-5xl text-[#CF3D4B]">
              LIFE STORY
            </div>
            <span className="font-normal text-xl">{agentDescription}</span>
          </div>
          <div className="w-[500px] flex items-center justify-center  gap-x-4">
            {skills.map((item: any, index: number) => (
              <div
                key={index}
                onMouseOver={() => setSkillsDetail([skills[index]])}
                className="w-full opacity-70  hover:opacity-100 group transition-all flex items-center justify-between"
              >
                <motion.div
                  whileHover={{ backgroundColor: `#${backgroundColor}` }}
                  className={`w-20 h-20 overflow-hidden border  p-2 `}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.displayIcon}
                    alt=""
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="w-[500px] h-[200px] flex flex-col items-center gap-y-2  mt-5">
            {skillsDetail &&
              skillsDetail.map((item: any, index: number) => (
                <>
                  <div className="w-full text-3xl flex items-center justify-center">
                    <span className="w-full font-medium text-[#CF3D4B]">
                      {item.slot}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      ease: "linear",

                      repeatType: "reverse",
                      duration: 1,
                    }}
                    key={index}
                    className=" flex flex-col gap-y-4 "
                  >
                    <div className="text-xl font-normal">
                      {item.description}
                    </div>
                  </motion.div>
                </>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AgentsSkillsCard
