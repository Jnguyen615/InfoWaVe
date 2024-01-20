import './MainPage.scss';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer';

const MainPage = ({ articles }) => {
  return (
    <main className="main-page">
     <Header /> 
     <ArticleContainer articles={articles}/> 
    </main>
  );
};

export default MainPage;
