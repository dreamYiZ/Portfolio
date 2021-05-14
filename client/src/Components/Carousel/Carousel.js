import React from 'react';
import Card from '../Card/Card';
import { Container, Row } from 'react-bootstrap';
import projects from '../../projects';
// import space from '../../assets/images/space.png';

const Carousel = () => {
    // const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);

    // const handleCardClick = (id) => {
    //     items[id].selected = !items[id].selected;
    //     items.forEach((item) => {
    //         if (item.id !== id) {
    //             item.selected = false;
    //         }
    //     });

    //     setItems(items);
    //     forceUpdate();
    // };

    const makeItems = (items) => {
        return items.map((item) => {
            return (
                <Card
                    item={item}
                    // click={(e) => handleCardClick(item.id, e)}
                    key={item.id}
                />
            );
        });
    };

    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {makeItems([...projects])}
            </Row>
        </Container>
    );
};

export default Carousel;
