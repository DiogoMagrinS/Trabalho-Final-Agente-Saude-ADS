import { Router } from 'express';
import {
  getProfissionais,
  getProfissionalPorId,
  postProfissional,
  putProfissional,
  deleteProfissional
} from '../controllers/profissionalController';
import { autenticarToken } from '../middlewares/authMiddleware';

const router = Router();

router.use(autenticarToken); // Protege as rotas

router.get('/', getProfissionais);
router.get('/:id', getProfissionalPorId);
router.post('/', postProfissional);
router.put('/:id', putProfissional);
router.delete('/:id', deleteProfissional);

export default router;
