import React, { FC, useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { getData } from "../../services/services";
import "./Product.scss"

const Products: FC = (): React.ReactElement => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const data = await getData();
    console.log(data);
    setProducts(data.product);
  };

  useEffect(() => void getProduct(), []);

  console.log(products);
  return (
    <main className="productsView">
      <Row className="px-4">
        {products.map((product: any) => {
          console.log(product);
          return (
            <Col xxl={3} xl={4} sm={6} xs={12} className="mb-5">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + product.img[0]}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                  <Button variant="outline-info">Pogledaj sve slike</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </main>
  );
};

export default Products;
