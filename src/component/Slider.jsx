import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Row, Col } from "react-bootstrap";
/* image */
import food1 from "../img/photo/ceviche-con-leche-de-tigre-1 1.png";
import food2 from "../img/photo/44f768753e5d55aa82f400f22bfd3964-PhotoRoom.png-PhotoRoom.png";
import food3 from "../img/photo/1001476-PhotoRoom.png-PhotoRoom.png";
import food4 from "../img/photo/tequenos-peruanos-PhotoRoom.png-PhotoRoom.png";
import food5 from "../img/photo/papas-a-la-huncaina-PhotoRoom.png-PhotoRoom.png";


const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: food1,
      title: "Ceviche",
      description: "Description for Card 1"
    },
    {
      image: food2,
      title: "Yuca Frita",
      description: "Description for Card 2"
    },
    {
      image: food3,
      title: "Causa",
      description: "Description for Card 3"
    },
    {
      image: food4,
      title: "Tequeños Fritos",
      description: "Description for Card 4"
    },
    {
      image: food5,
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
    <div className="container bg-transparent my-5">
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center my-2">
          <h2 className="text-center text-black my-0">Nuestras Recetas</h2><hr style={{width:"75%", color:"#DE0303", opacity:"100%", marginBottom:"30px"}}/>
        </div>
      </div>
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
                      <Card className="d-flex flex-column justify-content-center align-items-center rounded-5" style={{"background-color": "#2b2b2a"}}>
                        <Card.Img variant="top" className="img-fluid p-4" style={{height:"280px", width:"420px"}} src={card.image} alt={card.title}  />
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                          <Card.Title className="text-white">{card.title}</Card.Title><hr className="text-white" style={{width:"90%", margin:"0"}}/>
                          <Card.Text className="text-white mb-2">{card.description}</Card.Text>
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
