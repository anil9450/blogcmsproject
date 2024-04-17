import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <>
      <div className='bg-dark text-center py-2 shadow-lg'>
        <h1 className='text-white'>React & CMS Blog App</h1>
      </div>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/create' element={<CreateBlog />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
