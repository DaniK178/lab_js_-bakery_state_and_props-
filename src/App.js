import NavBar from "./NavBar";
import Title from "./Title";
import RecipeContainer from "./containers/RecipeContainer";
import Search from "./Search";


function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeContainer />
        <Search />
        
      </main>
    </>
  );
}

export default App;
