import Category from "./categories/category";
import Footer from "./footer/footer";
import Header from "./header/header";
import Latest from "./latest/latest";
import Pregnancy from "./pregnancy/pregnancy";
import Special from "./special/special";


function App() {
  return (
    <div className="app p-0 m-0">
      <Header />
      <Latest/>
      <Category />
      <Pregnancy />
      <Special />
      <Footer />
      


       

    </div>
  
   

    
  );
}

export default App;
