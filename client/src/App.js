import './App.css';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Client from './components/Client';
import AddClientModal from './components/AddClientModal';


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header></Header>
        <div className='container'>
          <AddClientModal></AddClientModal>
          <Client></Client>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
