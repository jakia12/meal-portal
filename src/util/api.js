


//get single news
export const getCategoryNews = async (id) => {
    const res = await fetch(`https://news-server-sigma.vercel.app/api/category/${id}`);
    const data = await res.json();
    //console.log(data);
    return data;
}

//get news details

export const getNewsDetails = async (id) => {
    const res = await fetch(`https://news-server-sigma.vercel.app/api/news/${id}`);
    const data = await res.json();
    console.log(data)
    return data;
}