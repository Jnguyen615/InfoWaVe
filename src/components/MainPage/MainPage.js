import './MainPage.scss';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import SearchBar from '../SearchBar/SearchBar';
import ScrollButton from '../ScrollButton/ScrollButton';
import { useState } from 'react'

const MainPage = ({ articles, setFilteredNews }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
  setSearchTerm(term)
  setFilteredNews(term)
}

const filteredNews = articles.filter(article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase()),
);
  return (
    <main className="main-page">
     <Header /> 
     <SearchBar onSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
     <ArticleContainer articles={filteredNews} /> 
     <ScrollButton />
    </main>
  );
};

export default MainPage;
