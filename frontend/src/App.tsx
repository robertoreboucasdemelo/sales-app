import Footer from "components/footer";
import NavBar from "components/navbar";
import DataTable from "components/datatable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Sales App</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
