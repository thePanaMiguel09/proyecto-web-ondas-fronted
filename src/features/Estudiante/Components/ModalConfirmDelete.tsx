// src/features/Estudiante/Components/ConfirmDeleteModal.tsx
interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onConfirm(): void;
    onCancel(): void;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
}

export default function ConfirmDeleteModal({
    isOpen,
    onConfirm,
    onCancel,
    title = '¿Seguro que deseas eliminar este avance?',
    description = 'Esta acción no se puede deshacer.',
    confirmText = 'Eliminar',
    cancelText = 'Cancelar',
}: ConfirmDeleteModalProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-60">
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg w-80">
                <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
                <p className="text-gray-300 mb-6">{description}</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
