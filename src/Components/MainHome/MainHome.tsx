import Inicio from "../../assets/Inicio.png"

function MainHome() {
  return (
     <section className="h-screen w-full relative">
      <img
        src={Inicio}
        alt="Inicio"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      </div>
    </section>
  )
}

export default MainHome