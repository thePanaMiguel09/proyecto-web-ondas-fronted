// //Dashboard
// import { useState, useMemo } from 'react';
// import AddProgressModal from '../Components/ModalAdd';
// import ProjectCard from '../Components/ProjectCard';
// import ModalDetails from '../Components/ModalDetails';
// import { type Project, type Advance } from '../types';

// export default function DashboardEs() {
//     // Tus proyectos
//     const projects: Project[] = [
//         {
//             id: 1, title: 'Algoritmos Avanzados', subject: 'Algoritmos',
//             description: 'Optimización de problemas NP-completos y heurísticas.',
//             status: 'En curso', deadline: 'Hoy', teacher: 'Dr. Juan Pérez'
//         },
//         {
//             id: 2, title: 'Base de Datos', subject: 'BD Relacionales',
//             description: 'Diseño e implementación de esquema para gestión de inventario.',
//             status: 'En curso', deadline: 'En 3 días', teacher: 'Dra. María López'
//         },
//         {
//             id: 3, title: 'Redes de Computadoras', subject: 'Redes',
//             description: 'Configuración y análisis con protocolos TCP/IP.',
//             status: 'Completado', deadline: 'En 10 días', teacher: 'Ing. Carlos Gómez'
//         },
//         {
//             id: 4, title: 'Sistemas Operativos', subject: 'SO',
//             description: 'Implementación de planificador de procesos.',
//             status: 'Pendiente', deadline: 'En 15 días', teacher: 'Dra. Laura Sánchez'
//         },
//     ];

//     // Estado de búsqueda por materia
//     const [searchTerm, setSearchTerm] = useState('');

//     // Filtrar proyectos según searchTerm (por subject)
//     const filteredProjects = useMemo(
//         () => projects.filter(p =>
//             p.subject.toLowerCase().includes(searchTerm.toLowerCase())
//         ),
//         [searchTerm]
//     );

//     // Estado global de avances
//     const [advances, setAdvances] = useState<Advance[]>([]);

//     // Control de modales y selección
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [showDetails, setShowDetails] = useState(false);
//     const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//     // Guarda un nuevo avance
//     const handleSaveAdvance = (data: Omit<Advance, 'id' | 'createdAt'>) => {
//         const newAdv: Advance = {
//             ...data,
//             id: advances.length + 1,
//             createdAt: new Date(),
//         };
//         setAdvances(prev => [...prev, newAdv]);
//         setShowAddModal(false);
//     };

//     // Elimina un avance
//     const handleDeleteAdvance = (id: number) => {
//         setAdvances(prev => prev.filter(a => a.id !== id));
//     };

//     return (
//         <div className="flex min-h-screen bg-[#0f172a] text-white font-sans">
//             {/* Modal Agregar Avance */}
//             <AddProgressModal
//                 isOpen={showAddModal}
//                 onClose={() => setShowAddModal(false)}
//                 projectId={selectedProject?.id!}
//                 onSave={handleSaveAdvance}
//             />

//             {/* Modal Detalles + Avances */}
//             <ModalDetails
//                 isOpen={showDetails}
//                 onClose={() => setShowDetails(false)}
//                 project={selectedProject}
//                 advances={advances.filter(a => a.projectId === selectedProject?.id)}
//                 onNewAdvance={() => setShowAddModal(true)}
//                 onDeleteAdvance={handleDeleteAdvance}
//             />

//             {/* Sidebar (sin cambios) */}
//             <aside className="w-64 bg-[#1e293b] p-6 pb-2 flex flex-col justify-between">
//                 <div className="mt-10 mb-12">
//                     <p className="text-sm text-gray-400">Panel de Estudiante</p>
//                     <nav className="mt-8">
//                         <button className="w-full text-left py-2 px-4 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700">
//                             Gestión de Proyectos
//                         </button>
//                     </nav>
//                 </div>
//                 <div>
//                     <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">AG</div>
//                         <div>
//                             <p className="text-sm font-semibold">Estudiante: Ana García</p>
//                             <p className="text-xs text-gray-400">Usuario</p>
//                         </div>
//                     </div>
//                     <button className="mt-4 w-full text-sm bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md">
//                         Cerrar Sesión
//                     </button>
//                 </div>
//             </aside>

//             {/* Main */}
//             <main className="flex-1 p-10 pt-20 overflow-y-auto">
//                 <header className="flex items-center justify-between mb-8">
//                     <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
//                     <input
//                         type="text"
//                         placeholder="Buscar por materia..."
//                         value={searchTerm}
//                         onChange={e => setSearchTerm(e.target.value)}
//                         className="px-4 py-2 rounded-md bg-[#0f172a] border border-gray-600 placeholder-gray-500 text-sm focus:outline-none"
//                     />
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {filteredProjects.map(proj => (
//                         <ProjectCard
//                             key={proj.id}
//                             project={proj}
//                             onAddProgress={() => {
//                                 setSelectedProject(proj);
//                                 setShowAddModal(true);
//                             }}
//                             onShowDetails={() => {
//                                 setSelectedProject(proj);
//                                 setShowDetails(true);
//                             }}
//                         />
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// }


// src/features/Estudiante/DashboardEs.tsx
import { useState, useMemo } from 'react';
import AddProgressModal from '../Components/ModalAdd';
import ProjectCard from '../Components/ProjectCard';
import ModalDetails from '../Components/ModalDetails';
import { type Project, type Advance } from '../types';

export default function DashboardEs() {
    // Tus proyectos
    const projects: Project[] = [
        {
            id: 1, title: 'Algoritmos Avanzados', subject: 'Algoritmos',
            description: 'Optimización de problemas NP-completos y heurísticas.',
            status: 'En curso', deadline: 'Hoy', teacher: 'Dr. Juan Pérez'
        },
        {
            id: 2, title: 'Base de Datos', subject: 'BD Relacionales',
            description: 'Diseño e implementación de esquema para gestión de inventario.',
            status: 'En curso', deadline: 'En 3 días', teacher: 'Dra. María López'
        },
        {
            id: 3, title: 'Redes de Computadoras', subject: 'Redes',
            description: 'Configuración y análisis con protocolos TCP/IP.',
            status: 'Completado', deadline: 'En 10 días', teacher: 'Ing. Carlos Gómez'
        },
        {
            id: 4, title: 'Sistemas Operativos', subject: 'SO',
            description: 'Implementación de planificador de procesos.',
            status: 'Pendiente', deadline: 'En 15 días', teacher: 'Dra. Laura Sánchez'
        },
    ];

    // Estado de búsqueda por materia
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar proyectos según searchTerm (por subject)
    const filteredProjects = useMemo(
        () => projects.filter(p =>
            p.subject.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [searchTerm]
    );

    const [advances, setAdvances] = useState<Advance[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingAdvance, setEditingAdvance] = useState<Advance | null>(null);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Crear o actualizar avance
    const handleSaveAdvance = (data: Omit<Advance, 'id' | 'createdAt'>) => {
        if (editingAdvance) {
            // Actualizar existente
            setAdvances(prev => prev.map(a =>
                a.id === editingAdvance.id
                    ? { ...a, description: data.description, date: data.date, files: data.files }
                    : a
            ));
        } else {
            // Nuevo avance
            const newAdv: Advance = {
                ...data,
                id: advances.length + 1,
                createdAt: new Date(),
            };
            setAdvances(prev => [...prev, newAdv]);
        }
        // reset
        setEditingAdvance(null);
        setShowAddModal(false);
    };

    // Editar avance: abre modal con datos precargados
    const handleEditAdvance = (adv: Advance) => {
        setEditingAdvance(adv);
        setSelectedProject(projects.find(p => p.id === adv.projectId) ?? null);
        setShowAddModal(true);
    };

    // Eliminar avance
    const handleDeleteAdvance = (id: number) => {
        setAdvances(prev => prev.filter(a => a.id !== id));
    };

    return (
        <div className="flex min-h-screen bg-[#0f172a] text-white font-sans">
            {/* Modal Agregar/Editar Avance */}
            <AddProgressModal
                isOpen={showAddModal}
                onClose={() => { setShowAddModal(false); setEditingAdvance(null); }}
                projectId={selectedProject?.id!}
                onSave={handleSaveAdvance}
                initialData={editingAdvance ?? undefined}
            />

            {/* Detalles + Gestor de avances */}
            <ModalDetails
                isOpen={showDetails}
                onClose={() => setShowDetails(false)}
                project={selectedProject}
                advances={advances.filter(a => a.projectId === selectedProject?.id)}
                onNewAdvance={() => { setEditingAdvance(null); setShowAddModal(true); }}
                onDeleteAdvance={handleDeleteAdvance}
                onEditAdvance={handleEditAdvance}
            />

            {/* Sidebar (sin cambios) */}
            <aside className="w-64 bg-[#1e293b] p-6 pb-2 flex flex-col justify-between">
                <div className="mt-10 mb-12">
                    <p className="text-sm text-gray-400">Panel de Estudiante</p>
                    <nav className="mt-8">
                        <button className="w-full text-left py-2 px-4 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700">
                            Gestión de Proyectos
                        </button>
                    </nav>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">AG</div>
                        <div>
                            <p className="text-sm font-semibold">Estudiante: Ana García</p>
                            <p className="text-xs text-gray-400">Usuario</p>
                        </div>
                    </div>
                    <button className="mt-4 w-full text-sm bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md">
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 p-10 pt-20 overflow-y-auto">
                <header className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
                    <input
                        type="text"
                        placeholder="Buscar por materia..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="px-4 py-2 rounded-md bg-[#0f172a] border border-gray-600 placeholder-gray-500 text-sm focus:outline-none"
                    />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(proj => (
                        <ProjectCard
                            key={proj.id}
                            project={proj}
                            onAddProgress={() => {
                                setSelectedProject(proj);
                                setShowAddModal(true);
                            }}
                            onShowDetails={() => {
                                setSelectedProject(proj);
                                setShowDetails(true);
                            }}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}