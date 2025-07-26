import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Wrapper;
