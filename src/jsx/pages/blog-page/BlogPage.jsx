import Lottie from "react-lottie-player"
import blogsBackgroud from "../../../animations/main-page/blogs-wave.json"

const BlogPage = () => {
    return (
        <main className="blog-page">
            <div className="intro">
                <div className="background">
                    <Lottie
                        className="wave"
                        animationData={blogsBackgroud}
                        play
                        loop/>
                </div>
                <div className="left">
                    <img src={
                        window.location.origin + "/18.svg"
                    } alt=""/>

                </div>
                <div className="right">
                    <h1>SMM PANEL BLOGS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam sapiente harum
                        molestias? Architecto distinctio aperiam assumenda est minima numquam vero deserunt nobis, error
                        magni maiores recusandae, velit tempora. Esse.</p>
                </div>
            </div>
        </main>
    )
}

export default BlogPage