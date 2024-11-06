import { ArrowLeftRight } from "lucide-react";

export function Header() {
	return (
		<header className="flex w-full justify-between px-4 py-2 border-b border-muted bg-white">
			<div>
				<strong>BAIAS'S GRILL</strong>
				<span className="flex items-center gap-1">
					<ArrowLeftRight size={16} />
					Trocar loja
				</span>
			</div>

			<div className="rounded-full w-10 h-10 bg-[#43344B] flex items-center justify-center">
				<span className="text-white">IZ</span>
			</div>
		</header>
	);
}
