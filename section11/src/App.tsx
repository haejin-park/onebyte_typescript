import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './component/Editor';
import TodoItem from './component/TodoItem';
import { Todo } from './types';

type Action = 
  {
    type: "CREATE",
    data: { id:number, content: string; }
  } | {
    type: "DELETE", 
    id: number
  };

function reducer(state: Todo[], action:Action) {
  switch(action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE" : {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const onClickAdd = (text:string) => {
    dispatch({
      type:"CREATE",
      data: {
        id:idRef.current++,
        content:text,
      }
    })
  }
  const onClickDelete = (id:number) => {
    dispatch({
      type:"DELETE",
      id:id
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
        <Editor onClickAdd={onClickAdd}>
          <div>
            {todos.map((todo)=> (
              <TodoItem 
                key={todo.id} {...todo} 
                onClickDelete={onClickDelete}
              />
            ))}
          </div>
        </Editor>
    </div>
  );
}

export default App;
