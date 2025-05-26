// src/components/Footer.tsx
import React, { useState } from 'react';

interface Member {
    name: string;
    githubUrl: string;
}

const teamMembers: Member[] = [
    { name: 'Miguel chavez', githubUrl: 'https://github.com/thePanaMiguel09' },
    { name: 'Cristian Aristizabal', githubUrl: 'https://github.com/Aristo1989' },
    { name: 'Frank Marin', githubUrl: 'https://github.com/MarinBotScript' },
];

const contactEmails = [
    'marinfrank222@gmail.com',
    'cristianalejo2407@gmail.com',
    'miguichavezbarreram@gmail.com',
];

const Footer: React.FC = () => {
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

    const handleEmailClick = async (email: string) => {
        try {
            await navigator.clipboard.writeText(email);
            setCopiedEmail(email);
            setTimeout(() => setCopiedEmail(null), 2000);
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
        }
    };

    return (
        <footer className="bg-[#212529] text-gray-100 py-10 px-5 font-sans border-t-2 border-blue-600">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-around">
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

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-3">Educate School</h4>
                    <p className="text-gray-400 leading-relaxed mb-2">
                        Plataforma de Gestión de Proyectos Académicos
                    </p>
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 md:mb-0">
                    <h4 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-3">Contacto</h4>

                    <p className="text-gray-400 mb-2">Email:</p>

                    <ul className="space-y-1">
                        {contactEmails.map((email, index) => (
                            <li key={index}>
                                <span
                                    className="text-gray-400 cursor-pointer hover:text-blue-500 transition-colors duration-300"
                                    onClick={() => handleEmailClick(email)}
                                >
                                    {email}
                                </span>
                                {copiedEmail === email && (
                                    <span className="ml-2 text-green-400 text-xs">(¡Copiado!)</span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-400 mb-2 mt-4">Teléfono: 3223157932</p>
                </div>
            </div>
            <div className="text-center pt-8 mt-8 border-t border-gray-700">
                <p className="text-gray-500 text-sm">
                    Donde los proyectos toman vida, juntos.
                </p>
            </div>
        </footer>
    );
};

export default Footer;