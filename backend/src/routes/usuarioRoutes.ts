import { Router } from 'express';
import {
  getUsuarios,
  getUsuarioPorId,
  postUsuario,
  putUsuario,
  deleteUsuario
} from '../controllers/usuarioController';
import { autenticarToken } from '../middlewares/authMiddleware';
import { atualizarPerfilUsuario } from '../controllers/usuarioController';


const router = Router();

router.use(autenticarToken);

router.get('/', getUsuarios);
router.get('/:id', getUsuarioPorId);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
router.put('/me', autenticarToken, atualizarPerfilUsuario);

export default router;
