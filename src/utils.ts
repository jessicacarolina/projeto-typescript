// eslint-disable-next-line import/prefer-default-export
export function formataCPF(cpf:string | undefined): any{
    return cpf ? cpf.replace(/[^\d]/g, '') : undefined;
}
