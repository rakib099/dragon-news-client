import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    const {image_url} = categoryNews;
    useTitle("Category");

    return (
        <div>
            <h2>This Category has {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard 
                    key={news._id} 
                    news={news}
                    />)
            }
        </div>
    );
};

export default Category;