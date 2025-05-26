import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { createProjectAPI } from "../../../../api/createProject";

interface Estudiante {
  id: string;
  nombre: string;
}

interface ProyectoFormValues {
  titulo: string;
  area: string;
  objetivos: string;
  cronograma: string;
  presupuesto: number;
  institucion: string;
  docente: string;
  integrantes: string[];
  observaciones: string;
  estadoActual: string;
}

interface CrearProyectoModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (data: ProyectoFormValues) => void;
  estudiantes: Estudiante[];
  docenteId: string;
  instituciones: { _id: string; nameInstitute: string }[];
}

const CrearProyectoModal: React.FC<CrearProyectoModalProps> = ({
  open,
  onClose,
  estudiantes,
  docenteId,
  instituciones,
  onCreate,
}) => {
  const [formValues, setFormValues] = useState<
    Omit<ProyectoFormValues, "docente" | "estadoActual">
  >({
    titulo: "",
    area: "",
    objetivos: "",
    cronograma: "",
    presupuesto: 0,
    institucion: "",
    integrantes: [],
    observaciones: "",
  });

  const handleChange =
    (field: keyof typeof formValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        field === "presupuesto"
          ? Number(event.target.value)
          : event.target.value;

      setFormValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleIntegrantesChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setFormValues((prev) => ({
      ...prev,
      integrantes: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleSubmit = async () => {
    const newProjectData: ProyectoFormValues = {
      ...formValues,
      docente: docenteId,
      estadoActual: "Formulación",
    };

    try {
      const response = await createProjectAPI(newProjectData);
      console.log("Proyecto creado con éxito:", response);
      onCreate(newProjectData);
      onClose();
    } catch (error: any) {
      alert("Error al crear el proyecto");
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Título"
          value={formValues.titulo}
          onChange={handleChange("titulo")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Área"
          value={formValues.area}
          onChange={handleChange("area")}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Objetivos"
          value={formValues.objetivos}
          onChange={handleChange("objetivos")}
          fullWidth
          multiline
          rows={3}
          margin="normal"
        />
        <TextField
          label="Cronograma"
          value={formValues.cronograma}
          onChange={handleChange("cronograma")}
          fullWidth
          multiline
          rows={2}
          margin="normal"
        />
        <TextField
          label="Presupuesto"
          type="number"
          value={formValues.presupuesto}
          onChange={handleChange("presupuesto")}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="institucion-label">Institución</InputLabel>
          <Select
            labelId="institucion-label"
            value={formValues.institucion}
            onChange={(e) =>
              setFormValues({ ...formValues, institucion: e.target.value })
            }
          >
            {instituciones.map((inst) => (
              <MenuItem key={inst._id} value={inst._id}>
                {inst.nameInstitute}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="integrantes-label">Integrantes</InputLabel>
          <Select
            labelId="integrantes-label"
            multiple
            value={formValues.integrantes}
            onChange={handleIntegrantesChange}
            renderValue={(selected) =>
              selected
                .map(
                  (id) => estudiantes.find((est) => est.id === id)?.nombre || id
                )
                .join(", ")
            }
          >
            {estudiantes.map((est) => (
              <MenuItem key={est.id} value={est.id}>
                <Checkbox checked={formValues.integrantes.includes(est.id)} />
                <ListItemText primary={est.nombre} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Observaciones"
          value={formValues.observaciones}
          onChange={handleChange("observaciones")}
          fullWidth
          multiline
          rows={2}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Crear Proyecto
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CrearProyectoModal;
