import { useParams } from "react-router-dom"

const DogDetails = () => {
      // useEffect(() => {
  //     HTTP запит, якщо потрібно
  // } [])

    const {dogId} = useParams()
    
return <>DogDetails: {dogId}</>
}


export default DogDetails