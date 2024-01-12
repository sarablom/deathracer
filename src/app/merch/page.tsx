import { Fragment } from "react";
import { Metadata, NextPage } from "next";
import { MainHeading } from "../../components/MainHeading";
import { ShoppingCart } from "../../components/ShoppingCart";

import ProductsWrapper from "../../components/Products/ProductWrapper";

export const metadata: Metadata = {
	title: "Deathracer --- Merch",
};

const Merch: NextPage = () => {
	return (
		<Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignContent: "baseline",
					marginLeft: "auto",
				}}
			>
				<ShoppingCart />
				<MainHeading text="Merch" />
			</div>
			<p style={{ marginBottom: "32px" }}>
				This shop ain't functional yet, please return some other time with your
				shopping pants on.
			</p>
			<p style={{ marginBottom: "32px" }}>
				Items are only available in Sweden.
			</p>
			<ProductsWrapper />
		</Fragment>
	);
};

export default Merch;
