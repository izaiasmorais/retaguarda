import { ChevronRight } from "lucide-react";

interface SidebarItemProps {
	children: React.ReactNode;
	isActive?: boolean;
	hasSubmenu?: boolean;
}

export function SidebarItem({
	children,
	isActive,
	hasSubmenu,
}: SidebarItemProps) {
	const style = isActive
		? "bg-purple-50 text-purple-700 font-semibold"
		: "text-slate-700 hover:bg-slate-100";

	return (
		<div
			className={`flex w-full items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all
				duration-200 ${style}`}
		>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-2">{children}</div>

				{hasSubmenu && <ChevronRight size={18} />}
			</div>
		</div>
	);
}
