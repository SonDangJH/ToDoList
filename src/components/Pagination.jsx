import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTodosByPage } from '../redux/thunks';
import { todoAmountSelector } from "../redux/selector"

export function Pagination() {
  const dispatch = useDispatch();
  const todoAmount = useSelector(todoAmountSelector);
  const elements = Array(Math.ceil(todoAmount / 7)).fill('element');
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center justify-center -space-x-px gap-1 h-8 text-sm overflow-x-auto">
        {elements.map((_, index) => (
            <li key={index} onClick={()=>{
              dispatch(fetchTodosByPage(index + 1));
            }}>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index + 1}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}