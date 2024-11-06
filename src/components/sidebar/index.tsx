import { useState } from "react";

export function Sidebar() {
	const [isOpen, setIsOpen] = useState<"open" | "closed">("closed");

	function handleToggleCollapsible() {
		setIsOpen((prev) => (prev === "open" ? "closed" : "open"));
	}

	return (
		<div
			data-state={isOpen}
			className="border-b bg-background data-[state=open]:bottom-0 xl:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto xl:w-64 xl:border-r gap-6 border-muted
			data-[state=open]:h-screen xl:data-[state=open]:h-screen xl:h-auto"
		></div>
	);
}
