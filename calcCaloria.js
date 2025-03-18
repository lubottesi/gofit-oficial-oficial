document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;
    const activityHours = parseFloat(document.getElementById('activityHours').value);

    let bmr;

    // Cálculo do Gasto Energético Basal (BMR)
    if (gender === 'male') {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }

    // Fator de Atividade
    let activityFactor = 1.2 + (activityHours / 7) * 0.175; // Ajuste baseado nas horas de exercício

    // Calorias de manutenção
    let maintenanceCalories = bmr * activityFactor;

    // Ajuste de calorias baseado no objetivo
    let dailyCalories;
    if (goal === 'lose') {
        dailyCalories = maintenanceCalories - 500; // Reduzir 500 calorias para emagrecer
    } else if (goal === 'gain') {
        dailyCalories = maintenanceCalories + 500; // Adicionar 500 calorias para engordar
    } else {
        dailyCalories = maintenanceCalories; // Manter
    }

    // Exibir resultado
    document.getElementById('result').innerText = `Você deve ingerir aproximadamente ${Math.round(dailyCalories)} calorias por dia.`;
});

// Mostrar ou esconder o campo de peso desejado
document.getElementById('goal').addEventListener('change', function() {
    const targetWeightLabel = document.getElementById('targetWeightLabel');
    const targetWeightInput = document.getElementById('targetWeight');
    if (this.value === 'lose' || this.value === 'gain') {
        targetWeightLabel.style.display = 'block';
        targetWeightInput.style.display = 'block';
    } else {
        targetWeightLabel.style.display = 'none';
        targetWeightInput.style.display = 'none';
    }
});