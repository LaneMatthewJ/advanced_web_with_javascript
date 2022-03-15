import agent from '../util/agent'
import superagent from 'superagent'
const backendURL = process.env.API_URL


export const getAllXfilesCharacters = async () => {
  try {
    const xfilesAllCharacters = `http://localhost:5000/parksAndRec`
    const response = await agent.get(xfilesAllCharacters)
console.log("RESPONSE! ", response.text)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}