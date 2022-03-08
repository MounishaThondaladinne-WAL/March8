import './App.css';
import TodoMainApp from './AssignmentMarch3/TodoMainApp';
import './AssignmentMarch3/TodoApp.css'
import Product from './ExamMarch4/Product';
import ShowProducts from './ExamMarch4/ShowProducts';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import ForumComponent from './AssignmentMarch7/ForumComponent';
import Todos from './AssignmentMarch1/Todoapp';
import MyComponent from './Table';
import SortTable from './SortTable';
import PaginationTable from './PaginationTable';
function App() {
  return (
    <div>
      {/*<Todos/>
      <BrowserRouter>
      <Link to ="/">Product App</Link><br/>
      <Link to ="/showproduct">Show Products</Link>
      <Routes>
      <Route path="/" element={<Product/>}>
      </Route>
      <Route path="/showproduct" element={<ShowProducts/>}/>
      </Routes>
      </BrowserRouter>
      <ForumComponent/>*/}
      <MyComponent/>
      <SortTable/>
      <PaginationTable/>
    </div>
  );
}
export default App;
