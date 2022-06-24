import { ApolloProvider } from "@apollo/client";
import { BrowserRouter} from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./Pages/Event";
import Router from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

// import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// //gql é uma função do graphQL que permite fazer a requisição com destaque e diferenciação para cada query realizada
// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

// function App() {
//   const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

//   // useEffect(() => {
//   //   	client.query({
//   //       query: GET_LESSONS_QUERY
//   //     }).then(response => console.log(response.data))
//   // }, [])

//   return (
//     <ul>
//       {data?.lessons.map(lesson => {
//         return <li key={lesson.id}>{lesson.title}</li>
//       })}
//     </ul>
//   )
// }

// export default App;
