import WordTables from "components/React/Comps/HiWords/HiWords"
import css from "../pages/ComponentsHome.module.css"


const ComponentsHome = () => {
   return (<>
   <h1 className={css.color}>Home</h1>
   
   <WordTables/>
   </>)
}

export default ComponentsHome