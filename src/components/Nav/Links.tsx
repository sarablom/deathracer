import React, { MouseEventHandler } from "react";
import Link from "next/link";

type LinksProps = {
	onClickHandler?: MouseEventHandler;
};

function Links({ onClickHandler }: LinksProps) {
	return (
		<>
			<Link href="/about" onClick={onClickHandler}>
				About
			</Link>
			<Link href="/music" onClick={onClickHandler}>
				Music
			</Link>
			<Link href="/shows" onClick={onClickHandler}>
				Shows
			</Link>
			<Link href="/merch" onClick={onClickHandler}>
				Merch
			</Link>
			<Link href="/lyrics" onClick={onClickHandler}>
				Lyrics
			</Link>
		</>
	);
}

export default Links;
