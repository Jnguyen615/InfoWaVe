import './MainPage.scss';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import NavBar from '../NavBar/NavBar';

const MainPage = ({ articles }) => {
  return (
    <main className="main-page">
     <Header /> 
     <NavBar />
     <ArticleContainer articles={articles}/> 
    </main>
  );
};

export default MainPage;
