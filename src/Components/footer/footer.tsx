// src/components/Footer.tsx
import React from 'react';

interface Member {
    name: string;
    githubUrl: string;
}

const teamMembers: Member[] = [
    { name: 'Miguel chavez', githubUrl: 'https://github.com/thePanaMiguel09' },
    { name: 'Cristian Aristizabal', githubUrl: 'https://github.com/Aristo1989' },
    { name: 'Frank Marin', githubUrl: 'https://github.com/MarinBotScript' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#212529] text-gray-100 py-10 px-5 font-sans border-t-2 border-blue-600">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-around">
                {/* Sección de Desarrollado por */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-3">Desarrollado por:</h4>
                    <ul className="space-y-2">
                        {teamMembers.map((member, index) => (
                            <li key={index}>
                                <a
                                    href={member.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {member.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sección de Información de la Plataforma */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-3">Educate School</h4>
                    <p className="text-gray-400 leading-relaxed mb-2">
                        Plataforma de Gestión de Proyectos Académicos
                    </p>
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                {/* Sección de Contacto */}
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-3">Contacto</h4>
                    <p className="text-gray-400 mb-2">Email: miguichavezbarreram@gmail.com</p>
                    <p className="text-gray-400 mb-2">Teléfono: 3223157932</p>
                </div>
            </div>
            <div className="text-center pt-8 mt-8 border-t border-gray-700">
                <p className="text-gray-500 text-sm">
                    Construyendo el futuro de la educación a través de la colaboración.
                </p>
            </div>
        </footer>
    );
};

export default Footer;