import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '@/api/userApi'; 
import UserTable from './UserTable';
import UserFormModal from './UserFormModal';

interface User {
  id?: number;
  primerNombre: string;
  primerApellido: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  edad: number;
  numeroTelefonico: string;
  institucion: string;
  rol: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  // Cargar usuarios al iniciar
  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Error cargando usuarios:', err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Crear o actualizar usuario
  const handleSaveUser = async (user: User) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id!.toString(), user);
      } else {
        await createUser(user);
      }
      await loadUsers();
    } catch (err) {
      console.error('Error guardando usuario:', err);
    }
  };

  // Eliminar usuario
  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id.toString());
      await loadUsers();
    } catch (err) {
      console.error('Error eliminando usuario:', err);
    }
  };

  // Abrir modal para crear
  const handleAddUser = () => {
    setEditingUser(undefined);
    setOpenModal(true);
  };

  // Abrir modal para editar
  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddUser}
          className="bg-[#3A7BFF] text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Crear Usuario
        </button>
      </div>
      <UserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <UserFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSaveUser}
        initialData={editingUser}
      />
    </div>
  );
}
