import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Row, Col } from "react-bootstrap";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "https://picsum.photos/id/1018/400/300",
      title: "Card 1",
      description: "Description for Card 1"
    },
    {
      image: "https://picsum.photos/id/1015/400/300",
      title: "Card 2",
      description: "Description for Card 2"
    },
    {
      image: "https://picsum.photos/id/1010/400/300",
      title: "Card 3",
      description: "Description for Card 3"
    },
    {
      image: "https://picsum.photos/id/1012/400/300",
      title: "Card 4",
      description: "Description for Card 4"
    },
    {
      image: "https://picsum.photos/id/1019/400/300",
      title: "Card 5",
      description: "Description for Card 5"
    },
    {
      image: "https://picsum.photos/id/1020/400/300",
      title: "Card 6",
      description: "Description for Card 6"
    }
  ];

  const numCards = cards.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(numCards / 3));
    }, 5000); // Cambia 5000 por el tiempo en milisegundos que desees para el cambio automático
    return () => clearInterval(interval);
  }, [numCards]);

  return (
    <div className="container bg-transparent my-4">
      <div className="row">
        <div className="col">
          <Carousel
            activeIndex={currentIndex}
            controls={false} // Para ocultar los botones de retroceder y avanzar
            indicators={false} // Para ocultar los indicadores
            interval={null} // Para desactivar el cambio automático
            wrap={false} // Para desactivar el wrapping
          >
            {[...Array(Math.ceil(numCards / 3)).keys()].map((slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row xs={1} md={3} className="g-4">
                  {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card, cardIndex) => (
                    <Col key={cardIndex}>
                      <Card style={{"background-color": "#2b2b2a"}}>
                        <Card.Img variant="top" className="img-fluid p-4" src={card.image} alt={card.title}  />
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                          <Card.Title className="text-white">{card.title}</Card.Title><hr className="text-white" style={{width:"50%"}}/>
                          <Card.Text className="text-white">{card.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
