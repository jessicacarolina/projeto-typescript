"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/prefer-default-export
function formataCPF(cpf) {
    return cpf ? cpf.replace(/[^\d]/g, '') : undefined;
}
exports.formataCPF = formataCPF;
