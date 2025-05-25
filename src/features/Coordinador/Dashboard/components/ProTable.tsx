import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface Project {
  id: number;
  titulo: string;
  area: string;
  objetivos: string;
  cronograma: string;
  presupuesto: string;
  institucion: string;
  docente: string;
  integrantes: string;
  estadoActual: string;
}

interface Props {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onChangeEstado: (id: number, newEstado: string) => void;
}

const estados = ['Planeación', 'En desarrollo', 'Finalizado', 'Suspendido', 'Cancelado'];

export default function ProTable({ projects, onEdit, onDelete, onChangeEstado }: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: '#1e293b',
        color: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        overflowX: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#7dd3fc' }}>ID</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Título</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Área</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Objetivos</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Cronograma</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Presupuesto</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Institución</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Docente</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Integrantes</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Estado Actual</TableCell>
            <TableCell sx={{ color: '#7dd3fc' }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.id}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.titulo}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.area}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.objetivos}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.cronograma}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.presupuesto}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.institucion}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.docente}</TableCell>
              <TableCell sx={{ color: '#e2e8f0' }}>{project.integrantes}</TableCell>
              <TableCell>
                <Select
                  value={project.estadoActual}
                  onChange={(e) => onChangeEstado(project.id, e.target.value)}
                  sx={{
                    color: '#fff',
                    backgroundColor: '#334155',
                    borderRadius: 1,
                    '.MuiSvgIcon-root': { color: '#fff' },
                  }}
                >
                  {estados.map((estado) => (
                    <MenuItem key={estado} value={estado}>
                      {estado}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(project)} sx={{ color: '#60a5fa' }}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(project.id)} sx={{ color: '#f87171' }}>
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

