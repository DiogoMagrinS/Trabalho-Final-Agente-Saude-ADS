import { Request, Response } from 'express';
import {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  excluirUsuario
} from '../services/usuarioService';

export async function getUsuarios(req: Request, res: Response) {
  const usuarios = await listarUsuarios();
  res.json(usuarios);
}

export async function getUsuarioPorId(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const usuario = await buscarUsuarioPorId(id);
    res.json(usuario);
  } catch (err) {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
}

export async function postUsuario(req: Request, res: Response) {
  const novoUsuario = await criarUsuario(req.body);
  res.status(201).json(novoUsuario);
}

export async function putUsuario(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const usuarioAtualizado = await atualizarUsuario(id, req.body);
    res.json(usuarioAtualizado);
  } catch {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    await excluirUsuario(id);
    res.status(204).send();
  } catch {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
}
