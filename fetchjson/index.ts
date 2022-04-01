import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

axios.get(url)
  .then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const complete = todo.complete;

    console.log(`
      id: ${id}, 
      title: ${title}, 
      complete: ${complete}
    `)
  })
  .catch(err => {
    console.log(err);
  })
