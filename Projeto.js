function calcularSaldoERanque(vitorias, derrotas) {
    // Calcula o saldo de rankeadas
    const saldo = vitorias - derrotas;

    // Determina o nível com base nas vitórias
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retorna o saldo e o nível
    return {
        saldo,
        nivel
    };
}

// Exemplo de uso
const vitorias = 02;
const derrotas = 01;
const resultado = calcularSaldoERanque(vitorias, derrotas);

console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`);