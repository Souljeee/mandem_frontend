import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../features/home/Home"
import LikesPage from "../features/likes/LikesPage"
import ProfilePage from "../features/profile/ProfilePage"
import HomeProvider from "../features/home/provider/HomeProvider"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeProvider><Home /></HomeProvider>} />
            <Route path='/likes' element={<LikesPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route element={<div>Page Not Found</div>} path='*' />
        </Routes>
    </BrowserRouter>
}

export default Router