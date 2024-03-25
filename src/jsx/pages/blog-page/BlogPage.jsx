import Lottie from "react-lottie-player"
import blogsBackgroud from "../../../animations/main-page/blogs-wave.json"
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import '../../../css/pages/blog-page/BlogPageStyle.css';
import {useState} from "react";

const BlogPage = () => {
    const [paginationNumber, setPaginationNumber] = useState(0);

    const {
        data,
        isLoading,
        isError
    } = useQuery({
        queryFn: async () => {
            const {data} = await axios.get('https://utsmm.liara.run/api/blogs');
            return data.entities.blogs;
        }
    });

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
            <div className={'blogs-pagination-holder'}>
                <div className={'blog-holder'}>
                    {
                        (isLoading)
                            ? <h1>Loading</h1>
                            : (isError)
                                ? <h1>An Error Has Happened</h1>
                                : data.slice(0,10).map((item, index) => (
                                    <Link to={`/blog/${item.slug}`} key={index}>
                                        <img className={'blog-img'} src={item.image} alt={item.short_description} />
                                        <h1 className={'blog-title'}>{item.title}</h1>
                                        <p className={'blog-p'}>{item.short_description}</p>
                                    </Link>
                                ))
                    }
                </div>
                {
                    (!isLoading && !isError && !data.length > 10)
                        ? (
                            <div className={'pagination-holder'}>
                                <div className={'pagination'}>
                                    {
                                        [...Array(data.length/10)].map((item, index) => (
                                            <>
                                                {
                                                    (index > 4)
                                                        ? <div className={'pagination-item'}>...</div>
                                                        : <button
                                                            onClick={() => setPaginationNumber(index)}
                                                            className={'pagination-item'}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : false
                }
            </div>
        </main>
    )
}

export default BlogPage