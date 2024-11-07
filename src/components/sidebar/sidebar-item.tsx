import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	isActive?: boolean;
	hasSubmenu?: boolean;
}

export function SidebarItem({
	name,
	icon,
	children,
	isActive,
	hasSubmenu,
	...props
}: SidebarItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	const style = isActive
		? "bg-violet-50 text-violet-700"
		: "text-slate-700 hover:bg-slate-100";

	return (
		<>
			<div
				{...props}
				className={`flex w-full items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all
				duration-200 ${style}`}
				onClick={() => hasSubmenu && setIsOpen(!isOpen)}
			>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-2">
						{icon} {name}
					</div>

					{isOpen && hasSubmenu && (
						<ChevronDown
							size={18}
							className={`transition-all duration-500 ${
								!isOpen ? "rotate-90" : ""
							}`}
						/>
					)}

					{!isOpen && hasSubmenu && (
						<ChevronRight
							size={18}
							className={`transition-all duration-500 ${
								isOpen ? "rotate-90" : ""
							}`}
						/>
					)}
				</div>
			</div>

			{isOpen && (
				<div
					className="flex flex-col gap-2 ml-4 text-gray-500 border-gray-500 border-l-2 p-0
				transition-[max-height] duration-300 ease-in-out"
				>
					{children}
				</div>
			)}
		</>
	);
}
