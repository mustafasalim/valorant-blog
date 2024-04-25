import { useQuery } from "react-query"
import { getWeapons } from "../../services/valorant-services"
import { motion } from "framer-motion"

function Weapons() {
  const { data, isLoading, isError } = useQuery("weapons", async () =>
    getWeapons()
  )
  console.log(data)

  return (
    <section className="w-full h-full bg-[#ECE8E1] flex flex-col items-center">
      <motion.div className="fixed top-10 right-10 flex flex-col">
        <span className="text-6xl font-thin">Arsenal</span>
        <div className="w-full h-0.5 bg-red-500"></div>
      </motion.div>
      {data &&
        data.map((item: any, index: number) => (
          <div
            style={{ scrollSnapAlign: "center" }}
            className="w-full flex items-center justify-center"
          >
            <div className="w-[800px] p-2">
              <div className="w-full h-[900px] relative flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: [null, 1.03, 1.03] }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className="w-[700px] h-[200px] flex items-center justify-center  relative overflow-hidden"
                >
                  <img
                    className="w-full h-full absolute top-0 left-0 right-0 object-contain"
                    src={item.displayIcon}
                    alt=""
                  />
                </motion.div>
                <div className="absolute top-0 font-semibold uppercase text-9xl flex whitespace-nowrap ">
                  <span
                    style={{
                      WebkitTextStroke: "1.5px #000",
                      color: "transparent",
                      fontSize: "7rem",
                    }}
                  >
                    {item.displayName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Weapons
