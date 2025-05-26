import { useState, useEffect } from "react";
import { type Advance } from "../types";
import { createAdvance } from "../../../api/createAdvance";

interface Props {
  isOpen: boolean;
  onClose(): void;
  projectId: string;
  onSave(data: Omit<Advance, "id" | "createdAt" | "date">): void;
  initialData?: Advance;
}

export default function AddProgressModal({
  isOpen,
  onClose,
  projectId,
  onSave,
  initialData,
}: Props) {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File[]>([]);

  useEffect(() => {
    if (initialData) {
      setDesc(initialData.description);
      setFile(initialData.file);
    } else {
      setDesc("");
      setFile([]);
    }
  }, [initialData, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createAdvance(projectId, {
        descripcion: desc,
        file,
      });

      console.log("Avance creado:", response.avance);
      onSave(response.avance);
      onClose();
    } catch (err) {
      console.error("Error al subir avance:", err);
      alert("Hubo un problema al crear el avance.");
    }
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
          {initialData ? "Editar Avance" : "Agregar Avance"}
        </h2>

        {/* Descripción */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1" htmlFor="desc">
            Descripción
          </label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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
            onChange={(e) => setFile(Array.from(e.target.files!))}
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
            {initialData ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}
