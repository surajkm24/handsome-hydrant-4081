import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/Navbar/Navbar"
import BestPractice from "../Pages/Blogs/BestPractice"
import BlogDetail from "../Pages/Blogs/BlogDetail"
import BlogPage from "../Pages/Blogs/BlogPage"
import Productivity from "../Pages/Blogs/Productivity"
import RemoteWork from "../Pages/Blogs/RemoteWork"
import Resource from "../Pages/Blogs/Resource"
import HomePage from "../Pages/Home/HomePage"
import Integration from "../Pages/Integrations/Integration"
import SignupPage from "../Pages/LoginSignup/Signup/SignupPage"
import CreateNewAcc from "../Pages/LoginSignup/CreateNewAcc/CreateNewAcc"
import Login from "../Pages/LoginSignup/Login/Login"
export const AllRoutes = () => {
    return(
    <Routes> 
            <Route path="/" element={<HomePage/>} />
            <Route path="/blog" element={<BlogPage />} /> 
            <Route path="/productivity" element={<Productivity/>} />
            <Route path="/remotework" element={<RemoteWork/>} />
            <Route path="/practice" element={<BestPractice/>} />
            <Route path="/resources" element={<Resource/>} />
            <Route path="/blog/blog-details" element={<BlogDetail/>} />
            <Route path="/integrations" element={<Integration/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/create-new-acc" element={<CreateNewAcc />}></Route>
   </Routes>
    
    )
}
