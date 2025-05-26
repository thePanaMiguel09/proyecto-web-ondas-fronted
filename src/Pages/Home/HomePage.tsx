import MainHOme from "../../Components/MainHome/MainHome";
import CardPage from "../../Components/CardPage/CardPage";
import NavbarP from "../../Components/NavHome/NavHome";
import Footer from "../../Components/footer/footer";
import { useAuthStore } from "../../store/authSore";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Noticias", href: "#noticias" },
  { label: "Sobre Nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

function Home() {
  const { usuario } = useAuthStore();

  return (
    <div className="bg-background text-white">
      <NavbarP items={navItems} title="EducaTE" />
      <MainHOme />

      {/* sección de noticias */}
      <section className="px-8 py-16 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
          CONOCE MÁS SOBRE LO ÚLTIMO EN NOTICIAS TECNOLÓGICAS BIENVENIDO{" "}
          {usuario?.email} ERES UN {usuario?.rol}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          <CardPage
            title="La formación continua de los docentes es clave"
            description="Frente a los cambios acelerados de la sociedad con innovaciones tecnológicas, la educación continua o lifelong learning emerge como un factor clave en la preparación académica de los estudiantes."
            link="https://www.infobae.com/educacion/2024/01/23/la-formacion-continua-de-los-docentes-es-clave-para-asegurar-un-mejor-aprendizaje-de-los-estudiantes/"
            imageSrc="https://www.infobae.com/resizer/v2/W52GSBU32BAWTC6JHLDFXIVZ6A.jpg?auth=cf4ef7cbb33e46896becf699ee9f66d937ec2edb31aac9691518534222e7e09e&smart=true&width=992&height=661&quality=85"
          />

          <CardPage
            title="Computadores y smartphones: herramientas"
            description="Ante el inicio del año escolar, la relevancia de los dispositivos tecnológicos es indiscutible. Computadores, tabletas y smartphones emergen como herramientas esenciales que brindan acceso a la información y recursos en plataformas educativas."
            link="https://www.infobae.com/colombia/2024/01/17/computadores-y-smartphones-herramientas-tecnologicas-clave-en-el-regreso-a-clases/"
            imageSrc="https://www.infobae.com/resizer/v2/RGMDJSCMNNAPVJT7OX6XQVYFBE.jpg?auth=0aea6995d3c4c759fa9f7b9f5fd2819bbed3a1e475da4f166d653f79be1814a7&smart=true&width=992&height=661&quality=85"
          />

          <CardPage
            title="Evolución tecnológica, IA y realidad aumentada"
            description="La tecnología sigue irrumpiendo en los procesos educativos, la Inteligencia Artificial, realidad aumentada y virtual serán claves en este año."
            link="https://www.infobae.com/educacion/2024/01/10/evolucion-tecnologica-ia-y-realidad-aumentada-lo-que-viene-para-la-educacion-en-el-2024/"
            imageSrc="https://www.infobae.com/resizer/v2/5BVHXFDXNBEVXGR5FDOB4JOKOM.JPG?auth=6fa4e465c453ac7bc739bbfa45e4e5effe8de9ffec9658b7383ff912cd5e08e3&smart=true&width=992&height=558&quality=85"
          />
        </div>
      </section>
      <section className="px-8 py-1 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          <CardPage
            title="Nueva York evalúa prohibir el uso de celulares en las escuelas"
            description="El gobierno estatal impulsa una propuesta que restringiría el acceso a dispositivos móviles en entornos educativos, con el objetivo de reducir distracciones, mejorar el rendimiento académico y abordar preocupaciones sobre el impacto de la tecnología en la salud mental de los estudiantes."
            link="https://www.infobae.com/estados-unidos/2025/01/22/nueva-york-evalua-prohibir-el-uso-de-celulares-en-las-escuelas-una-medida-que-busca-priorizar-el-aprendizaje/"
            imageSrc="https://www.infobae.com/resizer/v2/BYLLHWP6IZCK5C4OHKBF67RPJQ.jpg?auth=c69c89e96efb566f4f3e78541bdc0db805977ec816391ff7dbe834a76ca00116&smart=true&width=992&height=558&quality=85"
          />

          <CardPage
            title="Según Steve Jobs esta es la capacidad que debería tener una persona para ser considerada inteligente"
            description="En 1982, Steve Jobs compartió una perspectiva única sobre la inteligencia y la resolución de problemas. Sus ideas continúan influyendo en emprendedores y profesionales hoy."
            link="https://www.infobae.com/educacion/2024/08/09/segun-steve-jobs-esta-es-la-capacidad-que-deberia-tener-una-persona-para-ser-considera-inteligente/"
            imageSrc="https://www.infobae.com/resizer/v2/YJTSTDS5GFACDBA3QOWRAVSIU4.jpg?auth=47608ae0fe2231ef2b111da7bf5eec67264fa9329f99511b5319e6a4b8eb5ab3&smart=true&width=992&height=558&quality=85"
          />

          <CardPage
            title="Las 10 herramientas de inteligencia artificial que serán tendencia"
            description="Se presentaron en un panel de expertos, que fue uno de los más esperados del IFE Conference, el congreso de educación que sucedió en el campus del Tecnológico de Monterrey."
            link="https://www.infobae.com/educacion/2024/01/26/las-10-herramientas-de-inteligencia-artificial-que-seran-tendencia-en-el-2024/"
            imageSrc="https://www.infobae.com/resizer/v2/JRH5GWIPRFFTFOYNM67YGBQLBQ.jpeg?auth=bc3970e30f2334f34572715fad455bcaa98af3519794f2e1eed80e2ec32c2521&smart=true&width=992&height=661&quality=85"
          />
          <p></p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
