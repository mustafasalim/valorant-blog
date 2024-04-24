import { motion } from "framer-motion"
interface AgentsSkillsCard {
  backgroundColor: string
  backgroundImage: string
}

function AgentsSkillsCard(props: AgentsSkillsCard) {
  const { backgroundColor, backgroundImage } = props
  return (
    <div className=" absolute left-0 z-40 group transition-colors cursor-pointer">
      <div className="relative">
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
          className="hidden group-hover:block absolute bottom-0 top-0 left-48 z-50 text-white  bg-black/65 w-full h-full"
        >
          fwfawfawfawfafawfawa
        </motion.div>
      </div>
    </div>
  )
}

export default AgentsSkillsCard
