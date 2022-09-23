import React, { FC, useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import LigthBox from "../../components/LightBox/LightBox";
import { getData } from "../../services/services";
import "./Product.scss"

interface Products {
  name: string,
  img: string[]
  price: string,
  description: string
}

const ProductsPage: FC = (): React.ReactElement => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [productName, setProductName] = useState("");

  const getProduct = async () => {
    const data = await getData();
    setProducts(data.product);
  };

  useEffect(() => void getProduct(), []);

  return (
    <>
      <main className="productsView ops">
        <Row className="px-4">
          {products.map(({name, img, description, price}: Products, i: number) => {
            return (
              <Col xxl={3} xl={4} sm={6} xs={12} className="mb-4" key={i}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + img[0]}
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      {description}
                    </Card.Text>
                    <Card.Text className="price">
                      {price}
                    </Card.Text>
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        const tempImg: any = [];
                        img.forEach((img: string) => {
                          tempImg.push(process.env.PUBLIC_URL + img)
                        });
                        setProductName(name)
                        setIsOpen(true)
                        setImgs(tempImg)
                      }}

                    >Pogledaj sve slike ({img.length})</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </main>
      {isOpen && <LigthBox imgs={imgs} setIsOpen={setIsOpen} name={productName} />}
    </>
  );
};

export default ProductsPage;
