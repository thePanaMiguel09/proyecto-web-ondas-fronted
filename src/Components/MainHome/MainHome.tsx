import Inicio from '../../assets/Inicio.png';

function MainHome() {
  return (
    <>
      <section className="relative w-full aspect-[16/9] xl:aspect-auto xl:h-screen overflow-hidden">
        <img
          src={Inicio}
          alt="Inicio"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        </div>
      </section>
    </>
  );
}
export default MainHome;
