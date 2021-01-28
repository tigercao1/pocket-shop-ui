import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

const ItemCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.price}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemCard;