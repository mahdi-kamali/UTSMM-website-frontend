
import { lazy, useState } from "react"

import {Suspense} from "react"

// Application styles
import "./css/global/global.css"
import "./css/style/style.css"
import "./css/dashboard/dashboard.css"
import "./css/dashboard/admin/adminDashboard.css"
import "./css/pop-up/pop-up.css"
import "./css/accordion/accordion.css"
import "./css/select-box/selectBox.css"
import "./css/field-box/field-box.css"
import "./css/table/table.css"
import "./css/animation/animations.css"


// Pages Styles 
import "./css/pages/main-page/MainPageStyle.css"
import "./css/pages/auth-page/AuthPageStyle.css"
import "./css/pages/faqs-page/FaqsPageStyle.css"
import "./css/pages/blogs-page/BlogsPageStyle.css"
import "./css/pages/about-us-page/AboutUsPageStyle.css"
import "./css/pages/contact-us-page/ContactUsPageStyle.css"
import "./css/pages/services-page/ServicesPageStyle.css"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';



// React SeelctBox
import 'react-select-search/style.css'



// ProgressBar
import "react-sweet-progress/lib/style.css";
import 'react-circular-progressbar/dist/styles.css';


// React Time Line
import 'react-vertical-timeline-component/style.min.css';



// React Drop Down
import 'react-dropdown/style.css';




//react-responsive-pagination
import 'react-responsive-pagination/themes/classic.css';




// React Routers
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// Tools Components
import PopUopContainer from "./jsx/pop-ups/PopUopContainer";



// Primaries 
import Header from "./jsx/primaries/header/Header";
import Footer from "./jsx/primaries/footer/Footer";
const LoadingIndicator = ()=>{
  return <h1>loading...</h1>
}




// Pages
// import other dependencies...

const MainPage = lazy(() => import("./jsx/pages/main-page/MainPage"));
const ServicesPage = lazy(() => import('./jsx/pages/services-page/ServicesPage'));
const AuthPage = lazy(() => import("./jsx/pages/auth/AuthPage"));
const ErrorPage = lazy(() => import("./jsx/pages/404/ErrorPage"));
const BlogDetailPage = lazy(() => import("./jsx/pages/blog-page/BlogDetailPage"));
const ContactUsPage = lazy(() => import("./jsx/pages/contact-us-page/ContactUsPage"));
const AboutUsPage = lazy(() => import("./jsx/pages/about-us-page/AboutUsPage"));
const BlogPage = lazy(() => import("./jsx/pages/blog-page/BlogPage"));
const FAQsPage = lazy(() => import("./jsx/pages/Faq-page/FAQsPage"));
const AdminDashboard = lazy(() => import("./jsx/dashboards/admin/AdminDashboard"));
const UserDashboard = lazy(() => import("./jsx/dashboards/user/UserDashboard"));

function App() {
  const [mainMenuState, setMainMenuState] = useState(false);
  const [userPanelMenuState, setUserPanelMenuState] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingIndicator />}>
          <Header
            userPanelMenuState={userPanelMenuState}
            setUserPanelMenuState={setUserPanelMenuState}
            mainMenuState={mainMenuState}
            setMainMenuState={setMainMenuState}
          />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/home' element={<MainPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path='/auth/:link' element={<AuthPage />} />
            <Route path='/auth/' element={<AuthPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogID" element={<BlogDetailPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route
              path="/user/dashboard/:page"
              element={
                <UserDashboard
                  userDashboardMenuState={userPanelMenuState}
                  setUserDashboardMenuState={setUserPanelMenuState}
                />
              }
            />
            <Route
              path="/user/dashboard/"
              element={
                <UserDashboard
                  userDashboardMenuState={userPanelMenuState}
                  setUserDashboardMenuState={setUserPanelMenuState}
                />
              }
            />
          </Routes>
          <Footer />
          <PopUopContainer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

