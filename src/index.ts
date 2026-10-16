import { missing } from "./other.ts";

async function load(): Promise<string> {
	return "data";
}

export function main(): void {
	console.log(missing);
	load();
}
