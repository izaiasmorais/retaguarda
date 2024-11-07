import { SidebarItem } from "./sidebar-item";
import {
	Banknote,
	CreditCard,
	Database,
	LayoutDashboard,
	MonitorSmartphone,
	Palette,
	Receipt,
	Rocket,
	Settings,
	ShieldCheck,
	ShoppingBasket,
	Smartphone,
	Star,
	Store,
	TicketPercent,
	Truck,
	Users,
} from "lucide-react";
import { SidebarSubItem } from "./sidebar-sub-item";

export function Sidebar() {
	return (
		<div
			className="border-b bg-white data-[state=open]:bottom-0 md:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto md:w-80 xl:border-r gap-6 border-muted
			 xl:data-[state=open]:h-screen h-full"
		>
			<strong className="text-2xl">Retaguarda</strong>

			<div className="flex flex-col gap-2">
				<SidebarItem
					name="Dashboard"
					icon={<LayoutDashboard size={24} />}
					isActive
				/>

				<SidebarItem name="Vendas" icon={<Banknote size={24} />} />

				<SidebarItem name="Registro" icon={<Database size={24} />} hasSubmenu>
					<SidebarSubItem name="Clientes" icon={<Users size={24} />} />
					<SidebarSubItem name="Produtos" icon={<Users size={24} />} />
				</SidebarItem>

				<SidebarItem
					name="Loja Online"
					icon={<Smartphone size={24} />}
					hasSubmenu
				>
					<SidebarSubItem name="Geral" icon={<ShoppingBasket size={24} />} />
					<SidebarSubItem name="Itens da Loja" icon={<Store size={24} />} />
					<SidebarSubItem name="Aparência" icon={<Palette size={24} />} />
					<SidebarSubItem
						name="Área(s) de entraga"
						icon={<Truck size={24} />}
					/>
					<SidebarSubItem
						name="Formas de Pagamento"
						icon={<CreditCard size={24} />}
					/>
				</SidebarItem>

				<SidebarItem name="Marketing" icon={<Rocket size={24} />} hasSubmenu>
					<SidebarSubItem
						name="Whatsapp Marketing"
						icon={<MonitorSmartphone size={24} />}
					/>
					<SidebarSubItem name="Cupons" icon={<TicketPercent size={24} />} />
					<SidebarSubItem name="Fidelidade" icon={<Star size={24} />} />
				</SidebarItem>

				<SidebarItem name="Fiscal" icon={<Receipt size={24} />} hasSubmenu />

				<SidebarItem
					name="Certificado Digital"
					icon={<ShieldCheck size={24} />}
				/>

				<SidebarItem name="Configurações" icon={<Settings size={24} />} />
			</div>
		</div>
	);
}
