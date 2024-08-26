import React from "react";
import "./Footer.css";
import { Col, Row } from "antd";

export default function Footer() {
  return (
    <footer>
      <Row>
        <Col span={12}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/LogoKofee_Footer.png?alt=media&token=8eeffc5b-65ee-4d1d-bbc9-37cedc99398c"
            alt="Logo"
            // style={{ height: "80px" }}
          />{" "}
        </Col>
        <Col span={12}>Content </Col>
      </Row>
    </footer>
  );
}
