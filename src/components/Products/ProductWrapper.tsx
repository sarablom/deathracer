// import { getProducts } from "../../utils/file-helpers";
import { ListWrapper } from "./StyledComponents";
// import { Product } from "../../@types/products";
import { ProductCard } from "./ProductCard";

const products = [
	{
		id: "1",
		title: "T-shirt",
		description:
			"T-shirt av ekologisk bomull med ett stort Deathracer-tryck centrerat över bröstet",
		colors: ["#FFF", "#000", "#454545"],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		price: 249,
		img: "t-shirt.png",
		numOfItem: 0,
	},
	{
		id: "2",
		title: "Tote bag",
		description: "Praktisk tygkasse som du kan ha med dig överallt",
		colors: ["#FFF", "#000", "#454545"],
		sizes: [],
		price: 189,
		img: "tote-bag.png",
		numOfItem: 0,
	},
	{
		id: "3",
		title: "Stickers",
		description: "10 starka stickers att klistra precis överallt",
		colors: ["#FFF"],
		sizes: ["8x5 cm", "16x10cm", "24x15cm"],
		price: 79,
		img: "logo.jpg",
		numOfItem: 0,
	},
];

const ProductsWrapper: any = async () => {
	// const products = (await getProducts()) as Product[] | [];

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
