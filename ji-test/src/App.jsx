import { Container } from "react-bootstrap";
import CustomCarousel from './components/Carousel/CustomCarousel';
import Information from "./components/Information/Information";

export default function App() {
    return (
        <Container fluid className="wrapper d-flex justify-content-center">
            <CustomCarousel />
            <Information />
        </Container>
    );
};