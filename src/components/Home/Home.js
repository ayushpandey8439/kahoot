import React from "react";
import { Form } from "react-bootstrap";
import "./Home.scss";
import Loader from "./../Loader/Loader";
function Home() {
  return (
    <div className="home_container">
      <h1 className="title">Kahoot</h1>
      <Form>
        <Form.Control type="text" size="lg" placeholder="QuizID"></Form.Control>
      </Form>
      <Loader></Loader>
    </div>
  );
}
export default Home;
