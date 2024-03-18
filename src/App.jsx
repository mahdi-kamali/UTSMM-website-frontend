import {lazy, useState} from "react"
import {Suspense} from "react"
import CommentPage from './jsx/pages/comment/commentPage';

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
import "./css/loaders/loaders.css"

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
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// Tools Components
import PopUopContainer from "./jsx/pop-ups/PopUopContainer";


// Primaries
import Header from "./jsx/primaries/header/Header";
import Footer from "./jsx/primaries/footer/Footer";
import PagesLoaders from "./jsx/loaders/PagesLoaders"

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

    return (<div className="App">
            <BrowserRouter>
                <Header
                    userPanelMenuState={userPanelMenuState}
                    setUserPanelMenuState={setUserPanelMenuState}
                    mainMenuState={mainMenuState}
                    setMainMenuState={setMainMenuState}
                />
                <Routes>
                    <Route
                        path='/'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <MainPage/>
                        </Suspense>}
                    />
                    <Route
                        path='/fake'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <PagesLoaders/>
                        </Suspense>}
                    />
                    <Route
                        path='/home'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <MainPage/>
                        </Suspense>}
                    />
                    <Route
                        path='/auth/:link'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <AuthPage/>
                        </Suspense>}
                    />
                    <Route
                        path='/auth/'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <AuthPage/>
                        </Suspense>}
                    />
                    <Route
                        path='/services'
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <ServicesPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/faqs"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <FAQsPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/blog"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <BlogPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/blog/:blogID"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <BlogDetailPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/about-us"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <AboutUsPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/contact-us"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <ContactUsPage/>
                        </Suspense>}
                    />
                    <Route
                        path="/admin/dashboard"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <AdminDashboard/>
                        </Suspense>}
                    />
                    <Route
                        path="/user/dashboard/:page"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <UserDashboard
                                userDashboardMenuState={userPanelMenuState}
                                setUserDashboardMenuState={setUserPanelMenuState}
                            />
                        </Suspense>}
                    />
                    <Route
                        path="/user/dashboard/"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <UserDashboard
                                userDashboardMenuState={userPanelMenuState}
                                setUserDashboardMenuState={setUserPanelMenuState}
                            />
                        </Suspense>}
                    />
                    <Route
                        path="/user/dashboard/"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <UserDashboard
                                userDashboardMenuState={userPanelMenuState}
                                setUserDashboardMenuState={setUserPanelMenuState}
                            />
                        </Suspense>}
                    />
                    <Route
                        path="/comment"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <CommentPage />
                        </Suspense>}
                    />
                    <Route
                        path="/*"
                        element={<Suspense fallback={<PagesLoaders/>}>
                            <ErrorPage/>
                        </Suspense>}
                    />
                </Routes>
                <Footer/>
                <PopUopContainer/>
            </BrowserRouter>
        </div>);
}

export default App;

