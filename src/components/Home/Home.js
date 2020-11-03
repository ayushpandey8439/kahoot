import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "./Home.scss";
import Loader from "./../Loader/Loader";

function Home() {
  function enterQuiz() {
    console.log("Entering the quiz now");
  }
  return (
    <div className="home_container">
      <h1 className="title">Kahoot</h1>
      <Form onSubmit={enterQuiz()}>
        <InputGroup>
          <Form.Control
            type="text"
            size="lg"
            placeholder="QuizID"
            maxLength="5"
          ></Form.Control>
          <InputGroup.Append>
            <Button variant="secondary" type="submit">
              Enter
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <Loader></Loader>
    </div>
  );
}
export default Home;
