document.addEventListener("DOMContentLoaded", function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const agendamentoForm = document.getElementById('agendamentoForm');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validação dos Campos
        const nomeCliente = document.getElementById('nomeCliente').value.trim();
        const enderecoCliente = document.getElementById('enderecoCliente').value.trim();
        const telefoneCliente = document.getElementById('telefoneCliente').value.trim();
        const emailCliente = document.getElementById('emailCliente').value.trim();
        const nomePet = document.getElementById('nomePet').value.trim();
        const tipoPet = document.getElementById('tipoPet').value;
        const racaPet = document.getElementById('racaPet').value.trim();
        const temperamentoPet = document.getElementById('temperamentoPet').value.trim();

        if (!nomeCliente || !enderecoCliente || !telefoneCliente || !emailCliente || !nomePet || !racaPet || !temperamentoPet) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailCliente)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validação de Telefone 
        const telefoneRegex = /^\d{10,11}$/;
        if (!telefoneRegex.test(telefoneCliente)) {
            alert('Por favor, insira um telefone válido (somente números, com DDD).');
            return;
        }

        alert('Cadastro realizado com sucesso!');

        // Limpar o formulário
        cadastroForm.reset();
    });

    agendamentoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const servico = document.getElementById('servico').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const teleBusca = document.getElementById('teleBusca').checked;

        if (!servico || !data || !hora) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        let message = `Serviço: ${servico}\nData: ${data}\nHora: ${hora}`;
        if (teleBusca) {
            message += "\nTele-busca: Sim";
        } else {
            message += "\nTele-busca: Não";
        }

        alert('Agendamento realizado com sucesso!\n' + message);

        // Limpar o formulário
        agendamentoForm.reset();
    });
});
