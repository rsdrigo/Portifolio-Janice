import { useState } from "react";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <>
            <nav className="bg-[#17161C]">
                <div className="max-w-screen-xl px-4 py-2.5 mx-auto flex items-center justify-between">
                    <div>
                        <span className="text-white flex">Janice Gouveia</span>
                    </div>
                    <div className="flex gap-10 text-white">
                        <span className="hover:text-orange-500">Inicio</span>
                        <span className="hover:text-orange-500">Livros</span>
                        <span className="hover:text-orange-500">Crônicas</span>
                        <span className="hover:text-orange-500">Artigos</span>
                        <span className="hover:text-orange-500">Sobre</span>
                        <span className="hover:text-orange-500">Contato</span>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar;