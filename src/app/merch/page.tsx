import { Metadata, NextPage } from "next";
import { MainHeading } from "../../components/MainHeading";
import { ShoppingCart } from "../../components/ShoppingCart";
import { CartProvider } from "../../context/CartContext";

export const metadata: Metadata = {
	title: "Deathracer --- Merch",
};

const Merch: NextPage = () => {
	return (
		<CartProvider>
			<div
				style={{
					width: "55%",
					display: "flex",
					justifyContent: "space-between",
					alignContent: "baseline",
					marginLeft: "auto",
				}}
			>
				<MainHeading text="Merch" />
				<ShoppingCart />
			</div>
			<p>Here you will soon be able to buy Deathracer merch</p>
		</CartProvider>
	);
};

export default Merch;
