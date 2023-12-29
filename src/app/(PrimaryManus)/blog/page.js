
import BlogDetail from '@/components/Article/BlogDetail';
import { getBlogView } from '@/helper';

export default async function page({searchParams}) {
    const blogId = searchParams?.id;
    const id = Number(blogId);
    const blog = await getBlogView(id)
  return (
    <div>
       <BlogDetail blog={blog} />
    </div>
  )
}
