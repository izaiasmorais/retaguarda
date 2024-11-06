import { SidebarItem } from "./sidebar-item";
import {
	Banknote,
	LayoutDashboard,
	Minus,
	Receipt,
	Rocket,
	Settings,
	ShieldCheck,
	ShoppingBasket,
	Smartphone,
	Users,
} from "lucide-react";

export function Sidebar() {
	return (
		<div
			className="border-b bg-background data-[state=open]:bottom-0 xl:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto xl:w-64 xl:border-r gap-6 border-muted
			data-[state=open]:h-screen xl:data-[state=open]:h-screen xl:h-auto"
		>
			<strong className="text-2xl">Retaguarda</strong>

			<div className="flex flex-col gap-2">
				<SidebarItem isActive hasSubmenu>
					<LayoutDashboard size={20} />
					Dashboard
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Banknote size={20} />
					Vendas
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Users size={20} />
					Clientes
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<ShoppingBasket size={20} />
					Produtos
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Smartphone size={20} />
					Loja Online
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Rocket size={20} />
					Marketing
				</SidebarItem>

				<div className="flex flex-col gap-4 ml-4 text-gray-500 border-gray-500 border-l-2 p-0">
					<div className="flex items-center gap-2">
						<Minus size={20} /> Whatsapp Marketing
					</div>

					<div className="flex items-center gap-2">
						<Minus size={20} /> Cupons
					</div>

					<div className="flex items-center gap-2">
						<Minus size={20} /> Fidelidade
					</div>
				</div>

				<SidebarItem hasSubmenu>
					<Receipt size={20} />
					Fiscal
				</SidebarItem>

				<SidebarItem>
					<ShieldCheck size={20} />
					Certificado Digital
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Settings size={20} />
					Configurações
				</SidebarItem>
			</div>
		</div>
	);
}
