import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Home from "../features/home/Home"
import LikesPage from "../features/likes/LikesPage"
import ProfilePage from "../features/profile/ProfilePage"
import HomeProvider from "../features/home/provider/HomeProvider"
import LikesProvider from "../features/likes/providers/LikesProvider"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={
                    <HomeProvider>
                        <LikesProvider>
                            <Home />
                        </LikesProvider>
                    </HomeProvider>
                }
            />
            <Route
                path='/likes'
                element={
                    <LikesProvider>
                        <LikesPage />
                    </LikesProvider>
                }
            />
            <Route path='/profile/:id' element={<ProfilePage id={useParams().id}/>} />
            <Route path='/profile' element={<ProfilePage id={'me'}/>} />
            <Route element={<div>Page Not Found</div>} path='*' />
        </Routes>
    </BrowserRouter>
}

export default Router