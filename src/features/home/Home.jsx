import Navbar from "../home/components/Navbar/Navbar"
import CandidateInfo from "../home/components/сandidate_info/CandidateInfo"
import About from "../home/components/about_candidate/About" 
import ChoisingButtons from "../home/components/choising_buttons/ChoisingButtons"
import styles from "./Home.module.css"

function Home() {
  return (
    <div>
      <Navbar />
      <CandidateInfo />
      <ChoisingButtons />
      <About />
    </div>
  )
}

export default Home
