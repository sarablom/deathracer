"use client";
import { ListWrapper } from "./styles";
import { ProductCard } from "./ProductCard";
import { useCart } from "../../context/CartContext";

const ProductsWrapper = () => {
	const {
		state: { cartItems },
	} = useCart();

	return (
		<ListWrapper>
			{cartItems.length > 0 &&
				cartItems
					.toSorted((a, b) => a.title.localeCompare(b.title))
					.map(product => (
						<ProductCard key={product.title} product={product} />
					))}
		</ListWrapper>
	);
};

export default ProductsWrapper;
