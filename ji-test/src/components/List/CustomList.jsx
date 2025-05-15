import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const items = [
    { id: 1, title: 'Команда профессионалов', description: 'Работаем с 2010 года, все мастера имеют соответствующую аттестацию.' },
    { id: 2, title: 'Честная смета', description: 'После первичной консультации озвучиваем стоимость наших услуг.' },
    { id: 3, title: 'Договор и гарантии', description: 'Заключаем договор, даём 3 года гарантии на свои работы.' },
    { id: 4, title: 'Оплата по факту', description: 'Наличная и безналичная формы оплаты после завершения всех работ.' },
];

export default function CustomList() {
    const formatNumber = (index) => {
        index++;
        return index < 10 ? `0${index}` : index.toString();
    };

    return (
        <Row className="information-list ">{
            items.map((item, index) => (
                <Col
                    xs={6}
                    sm={1}
                    md={6}
                    lg={6}
                    key={item.id}
                    className="information-list__item"
                >
                    <Row
                        className='information-list__item-wrapper d-flex align-items-start flex-nowrap'

                    >
                        <Col xs={1}
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '24px', width: '20px' }}
                        >
                            <span className='information-list__marker'> {formatNumber(index)} </span>
                        </Col>
                        <Col xs={11} className='information-list__group p-0'>
                            <p className='information-list__title p-0'> {item.title} </p>
                            <p className="information-list__description m-0">{item.description}</p>
                        </Col>
                    </Row>
                </Col>
            ))}
        </Row>
    );
}