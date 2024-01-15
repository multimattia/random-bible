import "./App.css";
import { ExampleFetch } from "./ExampleFetch";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="max-w-screen-lg mx-auto pt-10">
          <div className="flex flex-col align-middle gap-8">
            <ExampleFetch />
          </div>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
