import { Route, Routes } from "react-router-dom";
import Technologie from "./components/technologie";
import { TECH_DETAILS } from "./routes";
import TechDetails from "./components/tech-details";
import LayoutWrapper from "../layout-wrapper";

const TechContainer = () => (
    <LayoutWrapper>
			<Routes>
				<Route path="/" element={<Technologie />} />
				<Route path={TECH_DETAILS} element={<TechDetails />} />
			</Routes>
    </LayoutWrapper>
);

export default TechContainer;
