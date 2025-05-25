import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectsByDocente } from "../../../../api/getProjectsByDocente";

interface Proyecto {
  _id: string;
  titulo: string;
  createdAt: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  docenteId: string;
}

const ViewProjectsModal: React.FC<Props> = ({ open, onClose, docenteId }) => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProyectos = async () => {
      setLoading(true);
      try {
        const data = await getProjectsByDocente(docenteId);
        setProyectos(data);
      } catch (err) {
        console.error("Error al obtener proyectos del docente", err);
      } finally {
        setLoading(false);
      }
    };

    if (open) fetchProyectos();
  }, [open, docenteId]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="font-semibold text-secondary">
        Mis Proyectos Registrados
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : proyectos.length === 0 ? (
          <Typography>No hay proyectos registrados.</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Fecha de creación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {proyectos.map((proyecto) => (
                <TableRow
                  key={proyecto._id}
                  hover
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/proyectos/${proyecto._id}`);
                    onClose();
                  }}
                >
                  <TableCell>{proyecto.titulo}</TableCell>
                  <TableCell>
                    {new Date(proyecto.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} variant="outlined">
            Cerrar
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProjectsModal;
