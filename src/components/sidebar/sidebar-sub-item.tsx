import { Minus } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

interface SidebarItemProps {
	name: string;
	icon: React.ReactNode;
}

export function SidebarSubItem({ name, icon }: SidebarItemProps) {
	return (
		<div className="flex items-center gap-2">
			<Minus size={24} />

			<SidebarItem name={name} icon={icon} />
		</div>
	);
}
