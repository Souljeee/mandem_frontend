import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../features/home/Home"
import LikesPage from "../features/likes/LikesPage"
import ProfilePage from "../features/profile/ProfilePage"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/likes' element={<LikesPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route element={<div>Page Not Found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
}

export default Router