import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { Container, Row, Col } from 'react-bootstrap';
import ProductController from './../../controllers/ProductController';

const CardsView = (props) => {
    // map 5 elements on each row, then add new row

    const [products, setProducts] = useState([]);

    useEffect(() => {
        new ProductController().getProducts().then(({ data }) => {
            setProducts(data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <Container>
            <Row>
                {products.map((product, idx) => {
                    return (
                        <Col key={idx}>
                            <ItemCard
                                name={product.name}
                                price={product.price}
                                description={product.description}
                            ></ItemCard>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CardsView;