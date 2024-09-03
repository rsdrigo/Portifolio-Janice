import { Button } from "../ui/button"

function Sobre() {
  return (
    <div className="flex flex-col bg-[#212121]">
        <div className="bg-gray-900 h-32 relative">
        </div>
        <div className="mb-20 relative z-10">
            <svg 
                  className="absolute -top-1 right-0 w-16 h-16 mr-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 576 512"
                >
                    <path fill="#ef7d5f" d="M287.8 398.7l131 131V23H156.9v506.7l130.9-131z"></path>
            </svg>
            <div className="flex flex-col items-center space-y-10">
                <img 
                  src="https://imagens.net.br/wp-content/uploads/2023/07/imagens-para-perfil-feminino-whatsapp-26.jpg" 
                  alt="" 
                  className="w-52 h-52 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className="flex flex-col items-center space-y-10 mt-36 mx-2 relative">
                <h2 className="text-3xl font-semibold text-orange-500">Sobre Janice Nome</h2>
                <p className="text-base text-center text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem laboriosam esse velit? Placeat ea cumque iusto quae. Excepturi eos doloremque explicabo a vero, reprehenderit commodi natus necessitatibus eligendi totam?</p>
                <Button className="rounded-full w-48 bg-[#212121] border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-[#212121]">Saiba Mais</Button>
            </div>
        </div>
        <footer className="bg-orange-400">
            <p className="text-center m-2">© 2024 by Rodrigo Silva and Wallacy Menezes, todos os direitos reservados a Janice.</p>
        </footer>
    </div>
  )
}

export default Sobre
