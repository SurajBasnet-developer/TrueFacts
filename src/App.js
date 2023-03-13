import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Facts from "./components/Facts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Facts />
    </QueryClientProvider>
  );
}

export default App;
