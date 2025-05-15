import { Container } from "react-bootstrap";
import CustomList from "../List/CustomList";

export default function Information() {
    return (
        <Container fluid className="information d-flex flex-column m-0 p-0">
            <h1 className="information__title h1 p-0">Почему выбирают именно нас?</h1>
            <p className="information__description ">
                Мы не просто создаём иллюзию работы, а действительно выполняем её, гарантируя безупречный результат и предоставляя гарантии.
                <br />
                <br />
                После завершения всех процедур в нашем детейлинг-центре, ваш автомобиль будет выглядеть как новый.
            </p>
            <CustomList />
        </Container>
    );
};