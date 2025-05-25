import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem
} from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
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
  }) => void;
  initialData?: {
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
  };
}

export default function UserFormModal({ open, onClose, onSave, initialData }: Props) {
  const [form, setForm] = React.useState({
    primerNombre: '',
    primerApellido: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    edad: 0,
    numeroTelefonico: '',
    institucion: '',
    rol: '',
  });

  React.useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        primerNombre: '',
        primerApellido: '',
        tipoIdentificacion: '',
        numeroIdentificacion: '',
        fechaNacimiento: '',
        lugarNacimiento: '',
        edad: 0,
        numeroTelefonico: '',
        institucion: '',
        rol: '',
      });
    }
  }, [initialData]);

  const handleChange = (field: string, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: '#1e293b',
          color: '#fff',
        }
      }}
    >
      <DialogTitle style={{ color: '#fff' }}>
        {initialData ? 'Editar Usuario' : 'Crear Usuario'}
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Primer Nombre"
          fullWidth
          margin="dense"
          value={form.primerNombre}
          onChange={(e) => handleChange('primerNombre', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Primer Apellido"
          fullWidth
          margin="dense"
          value={form.primerApellido}
          onChange={(e) => handleChange('primerApellido', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
            select
            label="Tipo de Identificación"
            fullWidth
            margin="dense"
            value={form.tipoIdentificacion}
            onChange={(e) => handleChange('tipoIdentificacion', e.target.value)}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
            >
            <MenuItem value="CC">CC</MenuItem>
            <MenuItem value="TI">TI</MenuItem>
            </TextField>
        <TextField
          label="Número de Identificación"
          fullWidth
          margin="dense"
          value={form.numeroIdentificacion}
          onChange={(e) => handleChange('numeroIdentificacion', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Fecha de Nacimiento"
          type="date"
          fullWidth
          margin="dense"
          value={form.fechaNacimiento}
          onChange={(e) => handleChange('fechaNacimiento', e.target.value)}
          InputLabelProps={{ shrink: true, style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Lugar de Nacimiento"
          fullWidth
          margin="dense"
          value={form.lugarNacimiento}
          onChange={(e) => handleChange('lugarNacimiento', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Edad"
          type="number"
          fullWidth
          margin="dense"
          value={form.edad}
          onChange={(e) => handleChange('edad', parseInt(e.target.value))}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Número Telefónico"
          fullWidth
          margin="dense"
          value={form.numeroTelefonico}
          onChange={(e) => handleChange('numeroTelefonico', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          label="Institución"
          fullWidth
          margin="dense"
          value={form.institucion}
          onChange={(e) => handleChange('institucion', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        />
        <TextField
          select
          label="Rol"
          fullWidth
          margin="dense"
          value={form.rol}
          onChange={(e) => handleChange('rol', e.target.value)}
          InputLabelProps={{ style: { color: '#ccc' } }}
          SelectProps={{ native: false }}
          InputProps={{ style: { color: '#fff', backgroundColor: '#334155', borderRadius: 4 } }}
        >
          <MenuItem value="pendiente">Pendiente</MenuItem>
          <MenuItem value="profesor">Profesor</MenuItem>
          <MenuItem value="coordinador">Coordinador</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: '#ccc' }}>
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          style={{ backgroundColor: '#3A7BFF', color: '#fff' }}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}


