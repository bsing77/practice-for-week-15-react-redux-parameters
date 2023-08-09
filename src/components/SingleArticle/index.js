import './SingleArticle.css';
import { loadArticles } from '../../store/articleReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



  const SingleArticle = ({articles}) => { // we need to prop drill {articles}
  // const dispatch = useDispatch();
  // const articles = useSelector(state=>state.articleState.entries);

  // useEffect(() => {
  //   dispatch(loadArticles());
  // }, [dispatch]);

  const {id} = useParams(); // we get {id} from the key in ArticleList 
  // const [oneArticle, setOneArticle] = useState(); 
  
  // useEffect (() => {
  //   setOneArticle(articleChoice); 
  // console.log(id)
  // })
  const articleChoice = articles.find(article => article.id === id);  
  // console.log(articleChoice)
  
  return (
    <div className='singleArticle'>
  
      <h1>{articleChoice.title}</h1>
      <img
        src = {articleChoice.imageUrl}
        alt={articleChoice.title}
      />
      <p>
       {articleChoice.body}
      </p>
    </div>
  );
};

export default SingleArticle;