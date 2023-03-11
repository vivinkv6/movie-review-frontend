import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function AddPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);
  const submition = async (e) => {
    e.preventDefault();
    setFailureAlert(false);
    setSuccessAlert(false);
    const data = { title, description, rating };
    console.log(data);
    const res = await fetch(import.meta.env.VITE_BACKEND_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = res.json();

    if (res.ok) {
      console.log("Create successfully");
      setSuccessAlert(true);
      setFailureAlert(false);
      setTitle("");
      setDescription("");
      setRating(0);
    }

    if (!res.ok) {
      console.log("Something went wrong.Please Try again Later");
      setSuccessAlert(false);
      setFailureAlert(true);
      setTitle("");
      setDescription("");
      setRating(0);
    }
  };

  return (
    <>
      <div className="container">
        <fieldset>
          <form action="">
            <div className="row">
              <div className="col-md-6 mt-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Title
                </label>
              </div>
              <div className="col-md-6 mt-5">
                <input
                  type="text"
                  className="form-control w-75"
                  id="exampleFormControlInput1"
                  placeholder="Movie Title..."
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="col-md-6 mt-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Description
                </label>
              </div>
              <div className="col-md-6 mt-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  cols="50"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>

              <div className="col-md-6 mt-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Rating
                </label>
              </div>
              <div className="col-md-6 mt-3">
                <input
                  type="number"
                  className="form-control w-25"
                  id="exampleFormControlInput1"
                  placeholder="maximum: 5"
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                />
              </div>
              <center>
                <button className="btn btn-primary mt-5" onClick={submition}>
                  Submit
                </button>
              </center>
            </div>
          </form>
        </fieldset>
      </div>

      {successAlert ? (
        <center>
          <Alert variant={"success"} className="mt-5 w-50">
            Create successfully
          </Alert>
        </center>
      ) : (
        <></>
      )}

      {failureAlert ? (
        <center>
          <Alert variant={"danger"} className="mt-5 w-50">
            Something went wrong.Please Try again Later
          </Alert>
        </center>
      ) : (
        <></>
      )}
    </>
  );
}

export default AddPage;
