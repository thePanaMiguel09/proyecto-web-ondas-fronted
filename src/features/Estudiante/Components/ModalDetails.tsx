// // src/features/Estudiante/Components/ModalDetails.tsx
// import { type Project, type Advance } from '../types';
// import { useState } from 'react';
// import ConfirmDeleteModal from './ModalConfirmDelete';

// interface Props {
//     isOpen: boolean;
//     onClose(): void;
//     project: Project | null;
//     advances: Advance[];
//     onNewAdvance(): void;
//     onDeleteAdvance(id: number): void;
// }

// export default function ModalDetails({
//     isOpen, onClose, project, advances, onNewAdvance, onDeleteAdvance
// }: Props) {
//     const [toDelete, setToDelete] = useState<Advance | null>(null);

//     if (!isOpen || !project) return null;

//     const handleConfirmDelete = () => {
//         if (toDelete) {
//             onDeleteAdvance(toDelete.id);
//             setToDelete(null);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//             <div className="relative bg-[#0f172a] w-full max-w-lg rounded-2xl shadow-xl p-8">
//                 {/* cerrar */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl font-bold"
//                 >×</button>

//                 {/* PARTE ORIGINAL: Título y datos */}
//                 <h2 className="text-3xl font-semibold text-primary mb-6">{project.title}</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mb-6">
//                     <div>
//                         <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Área / Materia</p>
//                         <p className="font-medium">{project.subject}</p>
//                     </div>
//                     <div>
//                         <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Docente</p>
//                         <p className="font-medium">{project.teacher}</p>
//                     </div>
//                     <div className="sm:col-span-2">
//                         <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Objetivos</p>
//                         <p className="font-light">{project.description}</p>
//                     </div>
//                     <div>
//                         <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Estado</p>
//                         <span className={`
//                 inline-block px-3 py-1 rounded-full text-xs font-semibold
//                 ${project.status === 'Pendiente' ? 'bg-yellow-500 text-black' : ''}
//                 ${project.status === 'En curso' ? 'bg-primary text-white' : ''}
//                 ${project.status === 'Completado' ? 'bg-green-600 text-white' : ''}
//             `}>{project.status}</span>
//                     </div>
//                     <div>
//                         <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Cronograma</p>
//                         <p className="font-medium">{project.deadline}</p>
//                     </div>
//                 </div>

//                 {/* Botón + Agregar Avance */}
//                 <div className="border-t border-gray-700 pt-4 flex justify-end mb-6">
//                     <button
//                         onClick={() => { onClose(); onNewAdvance(); }}
//                         className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-lg transition"
//                     >+ Agregar Avance</button>
//                 </div>
//                 {/* FIN PARTE ORIGINAL */}

//                 {/* Gestión de Avances */}
//                 <h3 className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
//                     {/* ícono lista */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
//                         viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                             d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                     Gestión de Avances
//                 </h3>

//                 <div className="space-y-4 max-h-56 overflow-y-auto pr-2">
//                     {advances.map(a => (
//                         <div key={a.id} className="bg-[#1e293b] p-4 rounded-lg border border-gray-700 relative">
//                             <div className="flex justify-between">
//                                 {/* descripción */}
//                                 <p className="text-gray-300 text-sm">{a.description}</p>
//                                 <div className="flex items-start gap-2">
//                                     {/* fecha */}
//                                     <span className="text-xs text-gray-400">{a.date}</span>
//                                     {/* papelera */}
//                                     <button
//                                         onClick={() => setToDelete(a)}
//                                         className="text-red-500 hover:text-red-400"
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
//                                             viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.863
//                                 a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>

//                             {a.files.length > 0 && (
//                                 <div className="mt-2 flex flex-wrap gap-2">
//                                     {a.files.map((f, i) => (
//                                         <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
//                                             {/* ícono file */}
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
//                                                 viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                                                     d="M7 7h10M7 11h10M7 15h10" />
//                                             </svg>
//                                             {f.name}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ConfirmDeleteModal */}
//             <ConfirmDeleteModal
//                 isOpen={!!toDelete}
//                 onConfirm={handleConfirmDelete}
//                 onCancel={() => setToDelete(null)}
//             />
//         </div>
//     );
// }

// src/features/Estudiante/Components/ModalDetails.tsx
import { type Project, type Advance } from '../types';
import { useState } from 'react';
import ConfirmDeleteModal from './ModalConfirmDelete';

interface Props {
    isOpen: boolean;
    onClose(): void;
    project: Project | null;
    advances: Advance[];
    onNewAdvance(): void;
    onDeleteAdvance(id: number): void;
    onEditAdvance(adv: Advance): void;
}

export default function ModalDetails({ isOpen, onClose, project, advances, onNewAdvance, onDeleteAdvance, onEditAdvance }: Props) {
    const [toDelete, setToDelete] = useState<Advance | null>(null);
    if (!isOpen || !project) return null;

    const handleConfirmDelete = () => {
        if (toDelete) {
            onDeleteAdvance(toDelete.id);
            setToDelete(null);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40">
            <div className="relative bg-[#0f172a] w-full max-w-lg rounded-2xl shadow-xl p-8">
                {/* cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl font-bold"
                >×</button>
                {/* PARTE ORIGINAL: Título y datos */}
                <h2 className="text-3xl font-semibold text-primary mb-6">{project.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mb-6">
                    <div>
                        <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Área / Materia</p>
                        <p className="font-medium">{project.subject}</p>
                    </div>
                    <div>
                        <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Docente</p>
                        <p className="font-medium">{project.teacher}</p>
                    </div>
                    <div className="sm:col-span-2">
                        <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Objetivos</p>
                        <p className="font-light">{project.description}</p>
                    </div>
                    <div>
                        <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Estado</p>
                        <span className={`
                inline-block px-3 py-1 rounded-full text-xs font-semibold
                ${project.status === 'Pendiente' ? 'bg-yellow-500 text-black' : ''}
                ${project.status === 'En curso' ? 'bg-primary text-white' : ''}
                ${project.status === 'Completado' ? 'bg-green-600 text-white' : ''}
            `}>{project.status}</span>
                    </div>
                    <div>
                        <p className="uppercase text-xs tracking-wide text-gray-500 mb-1">Cronograma</p>
                        <p className="font-medium">{project.deadline}</p>
                    </div>
                </div>

                {/* Botón + Agregar Avance */}
                <div className="border-t border-gray-700 pt-4 flex justify-end mb-6">
                    <button
                        onClick={() => { onClose(); onNewAdvance(); }}
                        className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-lg transition"
                    >+ Agregar Avance</button>
                </div>
                {/* FIN PARTE ORIGINAL */}
                {/* Gestión de Avances */}
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
                    {/* ícono lista */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Gestión de Avances
                </h3>

                <div className="space-y-4 max-h-56 overflow-y-auto pr-2">
                    {advances.map(a => (
                        <div key={a.id} className="relative bg-[#1e293b] p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between">
                                <p className="text-gray-300 text-sm">{a.description}</p>
                                <div className="flex items-start gap-2">
                                    {/* <span className="text-xs text-gray-400">{date.now}</span> */}
                                    {/* Edit button */}
                                    <button
                                        onClick={() => {
                                            onClose();
                                            onEditAdvance(a);
                                        }}
                                        className="text-green-500 hover:text-green-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M15.232 5.232l3.536 3.536M4 13.5V19h5.5L17.865 10.635a2.121 2.121 0 00-3-3L4 13.5z" />
                                        </svg>
                                    </button>
                                    {/* Delete button */}
                                    <button
                                        onClick={() => setToDelete(a)}
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.863
                                a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4h6v3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {a.files.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {a.files.map((f, i) => (
                                        <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded flex items-center gap-1">
                                            {/* ícono file */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M7 7h10M7 11h10M7 15h10" />
                                            </svg>
                                            {f.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ConfirmDeleteModal */}
                <ConfirmDeleteModal
                    isOpen={!!toDelete}
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setToDelete(null)}
                />
            </div>
        </div>
    );
}