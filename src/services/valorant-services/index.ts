import { api } from "../../config/api"

export const getAgents = async () => {
  const response = await api({
    method: "get",
    url: "/agents",
    params: {
      isPlayableCharacter: true,
    },
  })
  return response.data.data
}

export const getWeapons = async () => {
  const response = await api({
    method: "get",
    url: "/weapons",
  })
  return response.data.data
}
