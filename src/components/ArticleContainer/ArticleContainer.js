import "./ArticleContainer.scss"
import NewsCard from '../NewsCard/NewCard'

const ArticleContainer = ( {articles} ) => {
  if (articles.length === 0) { 
    return (
      <div className='no-articles-message'>
        <p className='no-articles-user'>
          There are no articles that match your search criteria. Please try
          searching for another topic! 
        </p>
      </div>
    );
  }


  const articleCards = articles.map((article, index) => {
    const { id, title, urlToImage, description, publishedAt, content, author, url} = article;

    return (
      <NewsCard
        key={id || index}
        index={index}
        title={title}
        image={urlToImage}
        description={description}
        date={publishedAt}
        content={content}
        author={author}
        url={url}
      />
    );
  });

  return <main className='article-container'>{articleCards}</main>; //
};

export default ArticleContainer