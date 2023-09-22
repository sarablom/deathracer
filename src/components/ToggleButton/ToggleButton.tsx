import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import { ToggleWrapper } from "./styledComponents";

type Props = {
	checked: boolean;
	onClickHandler: () => void;
	style?: CSSProperties;
	children: ReactNode;
};

export const ToggleButton = ({
	checked,
	onClickHandler,
	style,
	children,
}: Props) => {
	return (
		<ToggleWrapper
			turnedOn={checked}
			type="button"
			role="switch"
			aria-checked={checked}
			onClick={onClickHandler}
			style={style}
		>
			{children}
			<motion.span
				layout={true}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 40,
				}}
			/>
		</ToggleWrapper>
	);
};

