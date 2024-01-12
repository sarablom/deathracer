import {
	ListItem,
	ProductColors,
	ProductDescription,
	ProductDetailsWrapper,
	ProductInfoWrapper,
	ProductPrice,
	ProductSizes,
	ImageWrapper,
} from "./styles";
import { Product } from "../../@types/products";
import Image from "next/image";
import { BuyButton } from "../BuyButton";
import { ItemCounter } from "./ItemCounter";

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<ListItem>
			<ImageWrapper>
				<Image
					width={0}
					height={0}
					sizes="100%"
					style={{ width: "100%", height: "auto" }}
					src={`/images/${product.img}`}
					alt={product.title}
				/>
			</ImageWrapper>
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
				{product.numOfItem === 0 ? (
					<BuyButton cartItem={product} />
				) : (
					<ItemCounter cartItem={product} />
				)}
			</ProductInfoWrapper>
		</ListItem>
	);
};
