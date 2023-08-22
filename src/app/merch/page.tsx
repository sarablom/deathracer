import { Metadata, NextPage } from "next";
import { MainHeading } from "../../components/MainHeading";
import { ShoppingCart } from "../../components/ShoppingCart";
import { CartProvider } from "../../context/CartContext";
import ProductsWrapper from "../../components/Products/ProductWrapper";

export const metadata: Metadata = {
	title: "Deathracer --- Merch",
};

const Merch: NextPage = () => {
	return (
		<CartProvider>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignContent: "baseline",
					marginLeft: "auto",
				}}
			>
				<MainHeading text="Merch" />
				<p>
					This shop ain't functional yet, please return some other time with
					your shopping pants on
				</p>

				<ShoppingCart />
			</div>

			<ProductsWrapper />
		</CartProvider>
	);
};

export default Merch;
