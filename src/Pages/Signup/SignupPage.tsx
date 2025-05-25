// Register.tsx
import logo from "../../assets/logo.png";
import RegisterForm from "../../Components/SignupForm/SignupForm";

function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="w-[95%] max-w-7xl h-[90%] bg-dark rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        {/* Sección Izquierda */}
        <div className="hidden md:flex w-1/2 bg-primary items-center justify-center p-12 relative overflow-hidden">
          <img
            src={logo}
            alt="Logo del Proyecto"
            className="max-w-[300px] w-full object-contain z-10"
          />
          {/* Figuras decorativas */}
          <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 animate-float rotate-12 z-0 rounded-md"></div>
          <div className="absolute top-1/4 left-[20%] w-14 h-14 bg-white/10 animate-floatSlow rotate-45 z-0"></div>
          <div className="absolute top-1/2 left-[18%] w-10 h-10 bg-white/10 animate-floatFast rotate-12 z-0"></div>
          <div className="absolute bottom-[30%] left-[12%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-white/10 animate-floatFast z-0"></div>
          <div className="absolute bottom-[15%] left-[27%] w-16 h-8 bg-white/10 animate-floatSlow rotate-[25deg] z-0 rounded-sm"></div>
          <div className="absolute bottom-8 left-[5%] w-10 h-10 bg-white/10 animate-float rotate-45 z-0"></div>
          <div className="absolute top-[10%] right-[20%] w-14 h-14 bg-white/10 animate-floatWide rotate-45 z-0"></div>
          <div className="absolute top-[40%] right-[18%] w-10 h-16 bg-white/10 animate-floatSlow rotate-12 z-0"></div>
          <div className="absolute bottom-[10%] right-[15%] w-16 h-16 bg-white/10 animate-floatFast rotate-[30deg] z-0 rounded-md"></div>
          <div className="absolute top-[30%] left-[60%] w-0 h-0 border-l-[28px] border-r-[28px] border-b-[45px] border-l-transparent border-r-transparent border-b-white/10 animate-float z-0"></div>
          <div className="absolute bottom-[40%] right-[25%] w-10 h-10 bg-white/10 animate-floatWide rotate-[60deg] z-0"></div>
          <div className="absolute bottom-[5%] right-[5%] w-12 h-12 bg-white/10 animate-floatSlow rotate-12 z-0"></div>
        </div>

        {/* Formulario */}
        <div className="w-full md:w-1/2 h-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
