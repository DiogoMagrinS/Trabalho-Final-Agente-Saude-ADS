import { Request, Response } from 'express';
import { criarNovoUsuario, buscarUsuarios } from '../services/usuarioService';

export async function criarUsuario(req: Request, res: Response) {
  try {
    const novoUsuario = await criarNovoUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (error: any) {
    res.status(500).json({ erro: error.message });
  }
}

export async function listarUsuarios(req: Request, res: Response) {
  try {
    const usuarios = await buscarUsuarios();
    res.json(usuarios);
  } catch (error: any) {
    res.status(500).json({ erro: error.message });
  }
}
