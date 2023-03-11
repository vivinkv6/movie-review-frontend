import React from "react";
import Card from "react-bootstrap/Card";
import { formatDistanceToNow, subDays } from "date-fns";

function Cards({ key, title, description, rating, createdAt }) {
  return (
    <>
      <Card className="mt-3 me-2" style={{ width: "25rem" }} key={key}>
        <Card.Body>
          <div className="row">
            <div className="col-8">
              <Card.Title className="fw-bold">{title}</Card.Title>
            </div>
            <div className="col-4">
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                {rating}{" "}
              </span>
              <i
                style={{ fontSize: "30px" }}
                className="bi bi-star-fill text-warning"
              ></i>
            </div>
            <Card.Text>{description}</Card.Text>
            <footer className="blockquote-footer mt-3">
              <i></i>
              <i>
                {formatDistanceToNow(new Date(createdAt),
                  { addSuffix: true }
                )}
              </i>
            </footer>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
