import Nav_bar from './Nav_bar';
import Header from './Header';
import Carrousel from './Carrousel';
import Carr_data from './Carr_data';

export default function App() {
  return(
    <div>
      <Nav_bar />
      <Header />
      {Carr_data.map(carr => {
        return(
          <Carrousel 
            category= {carr.catergory}
            title= {carr.title}
            id= {carr.id}
            key= {carr.id}
          />
        )
      })}
      
    </div>
    
  )
}