import BlogCard, {blogCard} from './BlogCard';

interface blogListProps{
    name: string;
    blogList: blogCard[];
}

const BlogSideCardList = ({name,blogList} : blogListProps) => {
    
    return (<div className="blog-side-bar">
        <h4>{name}</h4>
        <div className="blog-side-bar__list">
            {blogList.map((blog,index) => <BlogCard key={index} blog={blog} type="small" />)}
        </div>
    </div>)
}

export default BlogSideCardList;