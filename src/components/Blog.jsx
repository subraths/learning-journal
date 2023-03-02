const Blog = ({ img, date, title, body }) => (
  <article className="blog">
    <img src={img} className="blog-img" />
    <p className="blog-date">{date}</p>
    <h3 className="blog-title">{title}</h3>
    <p className="blog-body">{body}</p>
  </article>
);

export default Blog;
