import React from 'react';
import Card from '../Card/Card';
import { Container, Row } from 'react-bootstrap';

import space from '../../assets/images/space.png';

const Carousel = () => {
    // const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);
    const items = [
        {
            id: 0,
            title: 'Petition',
            subtitle: 'Express/React/PostgreSQL',
            imgSrc: space,
            link: '',
            // selected: false,
            description: 'description of the app...',
        },
        {
            id: 1,
            title: 'Animal Clinic',
            subtitle: 'Express/React/MongoDB',
            imgSrc: space,
            // imgSrc: animalClinic,
            link: '',
            // selected: false,
            description: 'description of the app..',
        },
    ];

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
                {makeItems([...items])}
            </Row>
        </Container>
    );
};

export default Carousel;
