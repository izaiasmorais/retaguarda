import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

export default function App() {
	return (
		<div className="xl:grid xl:grid-cols-app min-h-screen">
			<Sidebar />

			<main className="xl:col-start-2 max-w-[100vw] bg-[#43344B] flex flex-col h-screen">
				<Header />

				<div className="p-4 flex-grow overflow-auto">
					<div>Conteúdo</div>
				</div>
			</main>
		</div>
	);
}
