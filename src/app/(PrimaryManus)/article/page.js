import Blogs from "@/components/Article/Blogs";


const BASE_URL = "http://localhost:3000/"

const getData = async () => {
  const res = await fetch(`${BASE_URL}news.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch data from api");

  };
  return res.json();
};

export default async function page() {
  const blogs = await getData();
  
  return (
    <div>
      <Blogs blogs={blogs}/>
    </div>
  )
}
