import { SidebarItem } from "./sidebar-item";
import {
	Banknote,
	Database,
	LayoutDashboard,
	Minus,
	MonitorSmartphone,
	Receipt,
	Rocket,
	Settings,
	ShieldCheck,
	ShoppingBasket,
	Smartphone,
	Star,
	TicketPercent,
	Users,
} from "lucide-react";

export function Sidebar() {
	return (
		<div
			className="border-b bg-background data-[state=open]:bottom-0 xl:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto xl:w-72 xl:border-r gap-6 border-muted
			data-[state=open]:h-screen xl:data-[state=open]:h-screen xl:h-full"
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
					<Database size={20} />
					Cadastro
				</SidebarItem>

				<div className="flex flex-col gap-2 ml-4 text-gray-500 border-gray-500 border-l-2 p-0">
					<div className="flex items-center gap-2">
						<Minus size={20} />

						<SidebarItem>
							<Users size={20} />
							Clientes
						</SidebarItem>
					</div>

					<div className="flex items-center gap-2">
						<Minus size={20} />
						<SidebarItem>
							<ShoppingBasket size={20} />
							Produtos
						</SidebarItem>
					</div>
				</div>

				<SidebarItem hasSubmenu>
					<Smartphone size={20} />
					Loja Online
				</SidebarItem>

				<SidebarItem hasSubmenu>
					<Rocket size={20} />
					Marketing
				</SidebarItem>

				<div className="flex flex-col gap-2 ml-4 text-gray-500 border-gray-500 border-l-2 p-0">
					<div className="flex items-center gap-2">
						<Minus size={20} />

						<SidebarItem>
							<MonitorSmartphone size={20} />
							Whatsapp Marketing
						</SidebarItem>
					</div>

					<div className="flex items-center gap-2">
						<Minus size={20} />

						<SidebarItem>
							<TicketPercent size={20} />
							Cupons
						</SidebarItem>
					</div>

					<div className="flex items-center gap-2">
						<Minus size={20} />

						<SidebarItem>
							<Star size={20} />
							Fidelidade
						</SidebarItem>
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
