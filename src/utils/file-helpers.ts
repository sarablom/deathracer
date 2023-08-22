import fs from "fs/promises";
import path from "path";

export async function getProducts() {
	const fileName = await readDirectory("/products");
	const products = await readFile(`/products/${fileName}`);

	return JSON.parse(products);
}

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
