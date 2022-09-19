import React, { FC, useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import LigthBox from "../../components/LightBox/LightBox";
import { getData } from "../../services/services";
import "./Product.scss"

const Products: FC = (): React.ReactElement => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imgs, setImgs] = useState([]);

  const getProduct = async () => {
    const data = await getData();
    setProducts(data.product);
  };

  useEffect(() => void getProduct(), []);

  return (
    <>
      <main className="productsView ops">
        <Row className="px-4">
          {products.map((product: any, i: number) => {
            console.log(product);
            return (
              <Col xxl={3} xl={4} sm={6} xs={12} className="mb-5" key={i}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + product.img[0]}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Card.Text className="price">
                      {product.price}
                    </Card.Text>
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        const tempImg: any = [];
                        product.img.forEach((img: string) => {
                          tempImg.push(process.env.PUBLIC_URL + img)
                        });
                        setIsOpen(true)
                        setImgs(tempImg)
                      }}

                    >Pogledaj sve slike</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </main>
      {isOpen && <LigthBox imgs={imgs} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Products;
