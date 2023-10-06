import { useParams } from "react-router";
import DetailContainer from "../components/DetailContainer";

const DetailsPage = () => {
    const { id } = useParams();
    return <div>
        <h2>Detalle</h2>
        <DetailContainer id={id} />
    </div>
}

export default DetailsPage;