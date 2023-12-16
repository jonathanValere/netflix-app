import "./App.css";
import movieDatas from "../src/assets/movies_netflix.json";
// import Section from "./components/Section";

function App() {
  return (
    <>
      <header>Netflix</header>
      <main>
        {movieDatas.map((cat, index) => {
          return (
            <section key={index}>
              {/* Afficher les catégories */}
              <h2>{cat.category}</h2>
              {/* Afficher les images */}
              <div>
                {cat.images.map((movie, index) => {
                  // console.log(index, movie);
                  return <img key={index} src={movie} alt="image movie" />;
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default App;
