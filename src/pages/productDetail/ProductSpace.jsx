import React from "react";
import "./ProductDetail.css";
import { Col, Flex, Row } from "antd";
import CarouselImage from "./components/CarouselImage";

export default function ProductSpace() {
  return (
    <div className="product-space">
      <Row>
        <Col span={11}>
          <div className="image">
            <CarouselImage />
          </div>
        </Col>
        <Col span={11} offset={2}>
          <div className="information"> Content</div>
        </Col>
      </Row>
    </div>
  );
}
