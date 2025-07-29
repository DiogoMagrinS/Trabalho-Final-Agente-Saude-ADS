import { PrismaClient, TipoUsuario } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
export async function criarNovoUsuario(dados: {
  nome: string;
  email: string;
  senha: string;
  tipo: TipoUsuario;
}) {
  const senhaHash = await bcrypt.hash(dados.senha, 10);
  return await prisma.usuario.create({
    data: {
      ...dados,
      senha: senhaHash,
    },
  });
}


export async function buscarUsuarios() {
  return await prisma.usuario.findMany();
}
