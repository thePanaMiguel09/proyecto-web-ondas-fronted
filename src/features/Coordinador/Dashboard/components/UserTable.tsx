import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface User {
  id: number;
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

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onEdit, onDelete }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: '#1e293b',
        color: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        overflowX: 'auto'
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#7dd3fc' }}>ID</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Nombre</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Apellido</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Tipo ID</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Número ID</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Nacimiento</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Lugar</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Edad</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Teléfono</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Institución</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Rol</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.id}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.primerNombre}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.primerApellido}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.tipoIdentificacion}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.numeroIdentificacion}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.fechaNacimiento}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.lugarNacimiento}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.edad}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.numeroTelefonico}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.institucion}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{user.rol}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(user)} sx={{ color: '#60a5fa' }}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(user.id)} sx={{ color: '#f87171' }}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

