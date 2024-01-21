import './MainPage.scss';
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import NavBar from '../NavBar/NavBar';
import ScrollButton from '../ScrollButton/ScrollButton';

const MainPage = ({ articles }) => {
  return (
    <main className="main-page">
     <Header /> 
     <NavBar />
     <ArticleContainer articles={articles}/> 
     <ScrollButton />
    </main>
  );
};

export default MainPage;
