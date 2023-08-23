import {
	ListItem,
	ProductColors,
	ProductDescription,
	ProductDetailsWrapper,
	ProductInfoWrapper,
	ProductPrice,
	ProductSizes,
} from "./StyledComponents";
import { Product } from "../../@types/products";
// import Image from "next/image";
import { BuyButton } from "../BuyButton";

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<ListItem>
			<div></div>
			{/* <Image
				width={100}
				height={50}
				src={`/public/images/${product.img}`}
				alt={product.title}
			/> */}
			<ProductInfoWrapper>
				<h2>{product.title}</h2>
				<ProductDescription>{product.description}</ProductDescription>
				<ProductDetailsWrapper>
					{product.colors &&
						product.colors.length > 0 &&
						product.colors.map(color => (
							<ProductColors key={color} color={color} />
						))}
				</ProductDetailsWrapper>
				<ProductDetailsWrapper>
					{product.sizes &&
						product.sizes.length > 0 &&
						product.sizes.map(size => (
							<ProductSizes key={size}>{size}</ProductSizes>
						))}
				</ProductDetailsWrapper>
				<ProductPrice>{product.price} SEK</ProductPrice>
				<BuyButton cartItem={product} />
			</ProductInfoWrapper>
		</ListItem>
	);
};
