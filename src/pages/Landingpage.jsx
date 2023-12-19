import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <>
            <div className='container mb-5 mt-5'>
                <Row className='d-flex align-items-center justify-content-evenly'>
                    <Col>
                        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, ea ipsum! Repellat,
                            nemo sapiente possimus a obcaecati,
                            dolores nesciunt illum iure natus magnam deserunt tempore quis porro, ipsa odio mollitia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis at accusantium porro! Omnis vero amet ipsam, eius explicabo odit? Non, ullam.
                            Sit ut fuga at omnis voluptatum similique maiores iste?
                        </p>
                        <Link to={'/home'}>
                            <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
                        </Link>
                    </Col>
                    <Col>
                        <img className='ms-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{ height: "400px" }} />
                    </Col>
                </Row>


                <div className='container'>
                    <h3>Features</h3>
                    <div className='d-flex align-items-center justify-content-evenly mt-5 mb-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ height: "300px", width: "100%" }} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


                <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5">
                    <Row className='d-flex align-items-center justify-content-evenly'>
                        <div className=' col-md-6'>
                            <h3 className='text-warning'>Simple and Powerfull</h3>
                            <p
                                style={{ color: "white", fontSize: "15px" }}><span className='fw-bolder fs-5'>Play Everything</span>
                                <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam dignissimos consequatur iste minima, cum, reiciendis, rerum totam consequuntur in voluptatem optio quod suscipit nisi ex molestias perspiciatis aspernatur inventore!.</span>
                            </p>
                            <p
                                style={{ color: "white", fontSize: "15px" }}><span className='fw-bolder fs-5'>Play Everything</span>
                                <span>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam dignissimos consequatur iste minima, cum, reiciendis, rerum totam consequuntur in voluptatem optio quod suscipit nisi ex molestias perspiciatis aspernatur inventore!.</span>
                            </p>
                            <p
                                style={{ color: "white", fontSize: "15px" }}><span className='fw-bolder fs-5'>Play Everything</span>
                                <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam dignissimos consequatur iste minima, cum, reiciendis, rerum totam consequuntur in voluptatem optio quod suscipit nisi ex molestias perspiciatis aspernatur inventore!.</span>
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/ZWuzH0fW8l0" title="Netrikann - Idhuvum Kadandhu Pogum Video | Nayanthara | Vignesh Shivan | Girishh" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Landingpage