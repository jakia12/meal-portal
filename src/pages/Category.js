import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { getCategoryNews } from '../util/api';


const Category = () => {
    const catNews = useLoaderData();


    return (
        <div>
            <h2 className="fw-bold fs-4 my-16">This category has {catNews.length}</h2>

            {
                catNews.map((news) => (
                    <NewsCard
                        key={news._id}
                        news={news}
                    />
                ))
            }

        </div>
    )
}

export default Category;
export const loader = async ({ params }) => {
    const catId = await params.id;
    console.log(catId);

    return getCategoryNews(catId);
}
