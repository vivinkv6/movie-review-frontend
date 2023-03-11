import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Spinner from "react-bootstrap/Spinner";
import SearchCards from "../components/SearchCards";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState("");
  const getMovies = async () => {
    setLoading(true);
    const res = await fetch(import.meta.env.VITE_BACKEND_URL);
    const data = await res.json();
    console.log(data);
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [movie]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {loading ? <Spinner className="mt-5" animation="border" /> : ""}
          </div>
          <div className="col-md-4 mt-5">
            <SearchCards setMovie={setMovie} movie={movie} />
          </div>
          {movie.length == 0
            ? movies.map((value) => {
                return (
                  <>
                    <Cards
                      key={value.id}
                      title={value.title}
                      description={value.description}
                      createdAt={value.createdAt}
                      rating={value.rating}
                    />
                  </>
                );
              })
            : movies
                .filter((value) => value.title == movie)
                .map((value) => {
                  return (
                    <>
                      <Cards
                        key={value.id}
                        title={value.title}
                        description={value.description}
                        createdAt={value.createdAt}
                        rating={value.rating}
                      />
                    </>
                  );
                })}

          <div className="col-10"></div>
          <div className="col-md-2 mt-3">
            <Link to="/add">
              <i
                style={{
                  fontSize: "35px",
                  borderRadius: "100px",
                  position: "fixed",
                  bottom: "60px",
                  right: "40px",
                }}
                className="bi bi-plus bg bg-primary text-light px-2"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
