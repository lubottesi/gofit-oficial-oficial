// Função para alternar o dropdown
function toggleDropdown(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const dropdown = document.getElementById('dropdownOptions');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

// Adiciona o evento de clique à seta
document.getElementById('dropdownArrow').addEventListener('click', function (event) {
    toggleDropdown(event); // Expande/recolhe o dropdown
});

// O link "Nutrição" já redireciona para a página de nutrição por padrão