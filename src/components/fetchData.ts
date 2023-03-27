export default async function fetchData() {
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-26&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`);
    return await res.json();
}