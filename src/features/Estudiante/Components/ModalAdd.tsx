// // src/features/Estudiante/Components/ModalAdd.tsx
// import { useState } from 'react';
// import { type Advance } from '../types';

// interface Props {
//     isOpen: boolean;
//     onClose(): void;
//     projectId: number;
//     onSave(data: Omit<Advance, 'id' | 'createdAt'>): void;
// }

// export default function AddProgressModal({ isOpen, onClose, projectId, onSave }: Props) {
//     const [desc, setDesc] = useState('');
//     const [date, setDate] = useState('');
//     const [files, setFiles] = useState<File[]>([]);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSave({
//             projectId,
//             description: desc,
//             date,
//             files,
//             progress: undefined
//         });
//         setDesc('');
//         setDate('');
//         setFiles([]);
//     };

//     if (!isOpen) return null;
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <form
//                 onSubmit={handleSubmit}
//                 className="relative bg-[#1e293b] p-6 rounded-2xl w-full max-w-md shadow-lg"
//             >
//                 {/* cerrar */}
//                 <button
//                     type="button"
//                     onClick={onClose}
//                     className="absolute top-4 right-6 text-white hover:text-gray-300 text-2xl"
//                 >×</button>

//                 <h2 className="text-2xl font-semibold mb-4">Agregar Avance</h2>

//                 {/* descripción */}
//                 <textarea
//                     value={desc}
//                     onChange={e => setDesc(e.target.value)}
//                     placeholder="Descripción"
//                     rows={4}
//                     className="w-full mb-3 px-3 py-2 rounded bg-[#0f172a] text-white"
//                     required
//                 />

//                 {/* fecha */}
//                 <label className="block text-sm text-gray-300 mb-1">Fecha</label>
//                 <input
//                     type="date"
//                     value={date}
//                     onChange={e => setDate(e.target.value)}
//                     className="w-full mb-4 px-3 py-2 rounded bg-[#0f172a] text-white border border-gray-600"
//                     required
//                 />

//                 {/* archivos */}
//                 <input
//                     type="file"
//                     multiple
//                     onChange={e => setFiles(Array.from(e.target.files!))}
//                     className="mb-4 text-sm text-gray-300"
//                 />

//                 {/* botones */}
//                 <div className="flex justify-end gap-2">
//                     <button
//                         type="button"
//                         onClick={onClose}
//                         className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
//                     >
//                         Cancelar
//                     </button>
//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
//                     >
//                         Guardar
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }


// src/features/Estudiante/Components/ModalAdd.tsx
import { useState, useEffect } from 'react';
import { type Advance } from '../types';

interface Props {
    isOpen: boolean;
    onClose(): void;
    projectId: number;
    onSave(data: Omit<Advance, 'id' | 'createdAt' | 'date'>): void;
    initialData?: Advance;
}

export default function AddProgressModal({ isOpen, onClose, projectId, onSave, initialData }: Props) {
    const [desc, setDesc] = useState('');
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        if (initialData) {
            setDesc(initialData.description);
            setFiles(initialData.files);
        } else {
            setDesc('');
            setFiles([]);
        }
    }, [initialData, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ projectId, description: desc, files });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
            <form
                onSubmit={handleSubmit}
                className="relative bg-slate-800 text-white p-8 rounded-2xl w-full max-w-lg shadow-2xl"
            >
                {/* Botón cerrar */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-5 text-white text-2xl hover:text-gray-300"
                    aria-label="Cerrar modal"
                >
                    ×
                </button>

                {/* Título */}
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {initialData ? 'Editar Avance' : 'Agregar Avance'}
                </h2>

                {/* Descripción */}
                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1" htmlFor="desc">
                        Descripción
                    </label>
                    <textarea
                        id="desc"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        placeholder="Escribe la descripción del avance..."
                        rows={4}
                        required
                        className="w-full px-4 py-2 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Archivos */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1" htmlFor="files">
                        Archivos (Evidencias)
                    </label>
                    <input
                        id="files"
                        type="file"
                        multiple
                        onChange={e => setFiles(Array.from(e.target.files!))}
                        className="text-sm"
                    />
                </div>

                {/* Botones */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
                    >
                        {initialData ? 'Actualizar' : 'Guardar'}
                    </button>
                </div>
            </form>
        </div>
    );
}
