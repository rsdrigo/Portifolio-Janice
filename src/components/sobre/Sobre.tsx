import { Button } from "../ui/button"

function Sobre() {
  return (
    <div className="flex flex-col bg-[#212121]">
        <div className="bg-gray-900 h-32 sm:h-40 md:h-48 relative">
        </div>
        <div className="mb-20 relative z-10">
            <svg 
                className="absolute -top-1 right-0 w-12 h-12 sm:w-16 sm:h-16 mr-1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512"
            >
                <path fill="#ef7d5f" d="M287.8 398.7l131 131V23H156.9v506.7l130.9-131z"></path>
            </svg>
            <div className="flex flex-col items-center space-y-10">
                <img 
                  src="https://imagens.net.br/wp-content/uploads/2023/07/imagens-para-perfil-feminino-whatsapp-26.jpg" 
                  alt="" 
                  className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className="flex flex-col items-center space-y-10 mt-32 sm:mt-36 mx-4 md:mx-8 relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500">Sobre Janice Nome</h2>
                <p className="text-sm sm:text-base md:text-lg text-center text-white mx-2 md:mx-4 md:w-1/2 lg:w-3/5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem laboriosam esse velit? Placeat ea cumque iusto quae. Excepturi eos doloremque explicabo a vero, reprehenderit commodi natus necessitatibus eligendi totam?</p>
                <Button className="rounded-full w-40 sm:w-48 md:w-56 bg-[#212121] border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-[#212121]">Saiba Mais</Button>
            </div>
        </div>
        <footer className="bg-orange-400">
            <p className="text-center m-2 text-sm md:text-base">© 2024 by Rodrigo Silva and Wallacy Menezes, todos os direitos reservados a Janice.</p>
        </footer>
    </div>
  )
}

export default Sobre
