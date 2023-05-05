import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page';
import CategoryPage from './pages/category-page';
import CategoryDetailPage from './pages/category-details-page';
import { useDispatch, useSelector } from 'react-redux';
import useApi from './hooks/useApi';
import { SET_CATEGORİES, setCategoryAction } from './redux/categoryReducer';

function App() {
  const dispatch = useDispatch()

  const categoryState = useSelector((state) => state.categoryState);
  const api = useApi();

  useEffect(()=>{
    api
    .get("https://api.adoptez1artisan.com/public/categories/listMainCategories")
    .then(response =>{
  
       dispatch(setCategoryAction(response.data.data))
      console.log(response,">>>> res ")
  
      dispatch({
        type:SET_CATEGORİES,
        payload: response.data.data
      })
    })
    .catch(err => {
  console.log(err,"<<<<< err")
    })
  
     console.log(categoryState,">>>>> categotyState")
  }, [])
 
  return (
    <BrowserRouter>
      <div >
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='category'>
            <Route index element={<CategoryPage />} />


            <Route path='details'>
              <Route path=':slug' element={<CategoryDetailPage/>} />
            </Route>
          </Route>


        </Routes>
        <Footer />
        {/* <Main/> */}
      </div>
    </BrowserRouter>
  );
}

export default App
