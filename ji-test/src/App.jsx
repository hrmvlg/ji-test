import { Container } from "react-bootstrap";
import CustomCarousel from './components/Carousel/CustomCarousel';

export default function App() {
    return (
        <Container fluid className="wrapper d-flex justify-content-center">
            <CustomCarousel />
        </Container>
    );
};