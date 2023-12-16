import "./App.css";
import movieDatas from "../src/assets/movies_netflix.json";

function App() {
  // console.log(movieDatas);
  const listCategories = movieDatas.map((cat, index) => {
    // Affiche les catégories
    return <h2 key={index}>{cat.category}</h2>;
    // console.log(index, cat);
    // cat.images.map((movie, index) => {
    //   console.log(index, movie);
    // });
  });

  return (
    <>
      <header>Netflix</header>
      <main>
        <section>{listCategories}</section>
      </main>
    </>
  );
}

export default App;
