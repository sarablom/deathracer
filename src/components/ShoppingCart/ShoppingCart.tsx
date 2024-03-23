"use client";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

import { ShoppingCart as Cart } from "react-feather";
import {
	CartWrapper,
	ItemCount,
	CartButton,
	CloseButton,
	CartList,
	Backdrop,
	CartListItem,
} from "./styles";
import { X as Close } from "react-feather";
import { VisuallyHidden } from "../VisuallyHidden";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export const ShoppingCart = () => {
	const { state } = useCart();
	const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

	return (
		<>
			<CartWrapper>
				<CartButton onClick={() => setCartModalIsOpen(true)}>
					<Cart />
				</CartButton>
				<ItemCount>
					<span>
						{state.cartItems.reduce((acc, curr) => {
							return acc + curr.numOfItem;
						}, 0)}
					</span>
				</ItemCount>
			</CartWrapper>
			{cartModalIsOpen && (
				<ShoppingCartModal onClose={() => setCartModalIsOpen(false)} />
			)}
		</>
	);
};

const ShoppingCartModal = ({ onClose }: { onClose: () => void }) => {
	const { state } = useCart();
	return (
		<FocusLock>
			<RemoveScroll>
				<Backdrop onClick={onClose} />
				<CloseButton onClick={onClose}>
					<Close
						style={{ stroke: "var(--color-whiteish)", fontSize: "1.5rem" }}
					/>
					<VisuallyHidden text="Dismiss shopping cart" />
				</CloseButton>
				<CartList>
					{state.cartItems.filter(i => i.numOfItem > 0).length === 0 ? (
						<CartListItem>The shopping cart is empty</CartListItem>
					) : (
						state.cartItems.map(item => (
							<CartListItem key={item.id}>
								{item.title}, {item.numOfItem} st, {item.numOfItem * item.price}{" "}
								kr
							</CartListItem>
						))
					)}
				</CartList>
			</RemoveScroll>
		</FocusLock>
	);
};
