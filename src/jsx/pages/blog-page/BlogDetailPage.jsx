import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import '../../../css/pages/blogs-page/BlogsPageStyle.css';

export default function BlogDetailPage() {
  const location = useLocation();
  const pathname = location.pathname;
  const lastRoute = pathname.substring(pathname.lastIndexOf('/') + 1);

  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryFn: async () => {
      const {data} = await axios.get('https://utsmm.liara.run/api/blogs');
      return data.entities.blogs.find(item => item.slug === lastRoute)
    }
  });

  return (
      <section className={'blog-page'}>
        <main>
          {
            (isLoading)
                ? <h1>Loading</h1>
                : (isError)
                    ? <h1>There was an error</h1>
                    : (
                        <>
                          <img className="poster" src={data.image} alt={data.short_description}/>
                          <h1 className={'title'}>{data.title}</h1>
                          <p className={'content'}>{data.short_description}</p>
                        </>
                    )
          }
        </main>
      </section>
  )
}
