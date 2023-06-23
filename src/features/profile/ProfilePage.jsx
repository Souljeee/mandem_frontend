import Navbar from "../home/components/Navbar/Navbar"
import ProfilePageContent from "./components/ProfilePageContent"
import { myData } from "../profile/data/profileData.data"
import LikesStorage from "../likes/data/likes.data"
import { useLocation, useParams } from "react-router-dom"

const ProfilePage = ({ id }) => {
    if (id == 'me') {
        let userJson = localStorage.getItem('currentUser')
    
        let userSaved = JSON.parse(userJson)
        
        return <div>
            <Navbar />
            <ProfilePageContent profileInfo={userSaved}/>
        </div>
    }

    const likedId  = useParams()

    let likedProfile = new LikesStorage().getLikesById(likedId.id)

    return <div>
        <Navbar />
        <ProfilePageContent profileInfo={likedProfile} />
    </div>
}

export default ProfilePage