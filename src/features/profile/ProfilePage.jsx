import Navbar from "../home/components/Navbar/Navbar"
import ProfilePageContent from "./components/ProfilePageContent"

const ProfilePage = ({ id }) => {
    if (id == 'me') {
        return <div>
            <Navbar />
            <ProfilePageContent />
        </div>
    }

    return <div>CandidateInfo</div>
}

export default ProfilePage