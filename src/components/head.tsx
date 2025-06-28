  import { Menu, Search, Heart, ShoppingCart, User } from 'lucide-react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  const Header: React.FC = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const navigate=useNavigate()
    return (
      <>
        {/* Barra superior */}
        <header className="flex justify-between shadow-lg bg-gray-900 items-center px-4 py-3 bg-primary relative z-50 h-20 min-h-[5rem]">
          <button 
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
            className="text-2xl cursor-pointer text-white hover:text-accent transition-colors flex-shrink-0"
          >
            <Menu />
          </button>

          <div className="flex items-center justify-center flex-1 mx-4 min-w-0">
            <div onClick={()=>navigate("/gestion_user")} className="flex items-center cursor-pointer">
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-3 flex-shrink-0" />
              <div className="text-center min-w-0">
                <h1 className="text-xl md:text-2xl font-bold m-0 leading-tight">YURY <span className="text-base md:text-lg font-medium">impresiones</span></h1>
                <p className="text-xs md:text-sm m-0 text-gray-300 leading-tight">De tu sueño a la realidad</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="px-3 py-2 rounded-lg border-none bg-white text-black placeholder-gray-500 w-48 xl:w-64 text-sm"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="bg-blue hover:bg-blue-dark text-white border-none rounded-lg px-2 py-2 cursor-pointer transition-colors font-medium text-xs md:text-sm hidden md:flex items-center">
              <User className="h-4 w-4 mr-1" /> Entrar
            </button>
            <button className="bg-blue hover:bg-blue-dark text-white border-none rounded-lg px-2 py-2 cursor-pointer transition-colors font-medium text-xs md:text-sm hidden lg:block">
              Contactos
            </button>
            <button className="bg-pink hover:bg-pink-dark text-white border-none rounded-lg px-2 py-2 cursor-pointer transition-colors font-medium text-xs md:text-sm flex items-center">
              <Heart className="h-4 w-4 mr-1" /> <span className="hidden sm:inline">Favoritos</span>
            </button>
            <button onClick={()=> navigate("/")} className="bg-yellow hover:bg-yellow-dark text-white border-none rounded-lg px-2 py-2 cursor-pointer transition-colors font-medium text-xs md:text-sm flex items-center">
              <ShoppingCart className="h-4 w-4 mr-1" /> <span className="hidden sm:inline">Carrito</span>
            </button>
          </div>
        </header>

        {/* Menú lateral */}
        <nav className={`absolute left-0 w-80 transform transition-transform duration-300 ease-in-out z-40 ${
          sideMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-2xl bg-primary`} style={{ height: 'calc(100vh - 5rem)' }}>
          <div className=" h-full overflow-y-auto p-6">
            <ul className="list-none p-0">
              <li className="mb-6">
                <h3 className="text-lg font-bold text-accent mb-3">Artículos Promocionales</h3>
                <ul className="ml-4 text-base">
                  {['Pulóveres', 'Tazas', 'Gorras', 'Mousepad', 'Camisetas', 'Llaveros', 'Termos', 'Bolsas'].map((item) => (
                    <li key={item} className="mb-2 cursor-pointer hover:text-accent transition-colors">{item}</li>
                  ))}
                </ul>
              </li>
              <li className="mb-6">
                <h3 className="text-lg font-bold text-pink mb-3">Material de Oficina</h3>
                <ul className="ml-4 text-base">
                  {['Modelos', 'Facturas', 'Bolígrafos', 'Carpetas', 'Cuadernos'].map((item) => (
                    <li key={item} className="mb-2 cursor-pointer hover:text-pink transition-colors">{item}</li>
                  ))}
                </ul>
              </li>
              <li className="mb-6">
                <h3 className="text-lg font-bold text-yellow mb-3">Artículos Varios</h3>
                <ul className="ml-4 text-base">
                  {['Pisapapeles', 'Canutillos', 'Identificaciones', 'Solapines'].map((item) => (
                    <li key={item} className="mb-2 cursor-pointer hover:text-yellow transition-colors">{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        {/* Overlay */}
        {sideMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            style={{ top: '5rem' }}
            onClick={() => setSideMenuOpen(false)}
          />
        )}
      </>
    );
  };

  export default Header;