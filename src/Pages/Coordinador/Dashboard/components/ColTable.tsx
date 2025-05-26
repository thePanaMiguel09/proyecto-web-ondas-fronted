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

interface Colegio {
  id: number;
  nombre: string;
  ciudad: string;
  departamento: string;
}

interface Props {
  colegios: Colegio[];
  onEdit: (colegio: Colegio) => void;
  onDelete: (id: number) => void;
}

export default function ColTable({ colegios, onEdit, onDelete }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: '#1e293b',
        color: '#fff',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#7dd3fc' }}>ID</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Nombre</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Ciudad</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Departamento</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {colegios.map((colegio) => (
            <TableRow key={colegio.id}>
              <TableCell sx={{ color: '#e2e8f0' }}>{colegio.id}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{colegio.nombre}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{colegio.ciudad}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{colegio.departamento}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(colegio)} sx={{ color: '#60a5fa' }}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(colegio.id)} sx={{ color: '#f87171' }}>
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

