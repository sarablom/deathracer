import { getProducts } from "../../utils/file-helpers";
import { ListWrapper } from "./StyledComponents";
import { Product } from "../../types/products";
import { ProductCard } from "./ProductCard";

const ProductsWrapper: any = async () => {
	const products = (await getProducts()) as Product[] | [];

	return (
		<ListWrapper>
			{products &&
				products.length > 0 &&
				products.map(product => (
					<ProductCard key={product.title} product={product} />
				))}
		</ListWrapper>
	);
};

export default ProductsWrapper;
