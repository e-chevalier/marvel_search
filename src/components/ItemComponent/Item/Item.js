import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col'


const Item = ({ prod }) => {

    return (
        <Col>
            <Card className="position-relative text-decoration-none text-body bg-light text-white card_maxSize">
                <Card.Img variant="top" src={prod.thumbnail.path+'/standard_fantastic.'+ prod.thumbnail.extension} />
                <Card.ImgOverlay className="d-flex align-items-end p-0 text-start">
                    <div className="fs-1 star_shadow position-absolute top-0 end-0 pe-3">
                        <img src="/Star.svg" className="star_size" alt="Star"></img>
                    </div>
                    <Card.Footer className="gradient_name text-light w-100 border-0">{prod.name}</Card.Footer>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
}

export default Item