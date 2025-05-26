import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    nombre: string;
    ciudad: string;
    departamento: string;
  }) => void;
  initialData?: { nombre: string; ciudad: string; departamento: string };
}

export default function ColForm({ open, onClose, onSave, initialData }: Props) {
  const [nombre, setNombre] = React.useState(initialData?.nombre || "");
  const [ciudad, setCiudad] = React.useState(initialData?.ciudad || "");
  const [departamento, setDepartamento] = React.useState(
    initialData?.departamento || ""
  );

  React.useEffect(() => {
    if (initialData) {
      setNombre(initialData.nombre);
      setCiudad(initialData.ciudad);
      setDepartamento(initialData.departamento);
    } else {
      setNombre("");
      setCiudad("");
      setDepartamento("");
    }
  }, [initialData]);

  const handleSave = () => {
    if (nombre.trim() && ciudad.trim() && departamento.trim()) {
      onSave({ nombre, ciudad, departamento });
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#1e293b",
          color: "#fff",
        },
      }}
    >
      <DialogTitle style={{ color: "#fff" }}>
        {initialData ? "Editar Colegio" : "Crear Colegio"}
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Nombre del colegio"
          fullWidth
          margin="dense"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "#334155",
              borderRadius: 4,
            },
          }}
        />
        <TextField
          label="Ciudad"
          fullWidth
          margin="dense"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "#334155",
              borderRadius: 4,
            },
          }}
        />
        <TextField
          label="Departamento"
          fullWidth
          margin="dense"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "#334155",
              borderRadius: 4,
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: "#ccc" }}>
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          style={{ backgroundColor: "#7B61FF", color: "#fff" }}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
