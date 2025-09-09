document.addEventListener('DOMContentLoaded', () => {
    const interventionsContainer = document.getElementById('interventions-container');
    const searchInput = document.getElementById('search');
    const responsiblesFilterContainer = document.getElementById('responsibles-filter');

    let allResponsibles = new Set();
    interventionData.forEach(section => {
        section.interventions.forEach(intervention => {
            intervention.responsibles.split(', ').forEach(r => allResponsibles.add(r.trim()));
        });
    });

    let selectedResponsibles = new Set();

    const renderResponsiblesFilter = () => {
        responsiblesFilterContainer.innerHTML = '<strong>Responsables:</strong>';
        allResponsibles.forEach(responsible => {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('responsible-checkbox');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = responsible;
            checkbox.value = responsible;
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedResponsibles.add(responsible);
                } else {
                    selectedResponsibles.delete(responsible);
                }
                renderInterventions();
            });

            const label = document.createElement('label');
            label.setAttribute('for', responsible);
            label.textContent = responsible;

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
            responsiblesFilterContainer.appendChild(checkboxContainer);
        });
    };

    const renderInterventions = () => {
        const searchTerm = searchInput.value.toLowerCase();
        interventionsContainer.innerHTML = '';

        interventionData.forEach(section => {
            const filteredInterventions = section.interventions.filter(intervention => {
                const titleMatch = intervention.title.toLowerCase().includes(searchTerm);
                const responsibleMatch = selectedResponsibles.size === 0 || intervention.responsibles.split(', ').some(r => selectedResponsibles.has(r.trim()));
                return titleMatch && responsibleMatch;
            });

            if (filteredInterventions.length > 0) {
                const sectionElement = document.createElement('div');
                sectionElement.classList.add('intervention-section');

                const sectionHeader = document.createElement('div');
                sectionHeader.classList.add('section-header');
                sectionHeader.innerHTML = `${section.icon} <h2 class="section-title">${section.title}</h2>`;

                sectionElement.appendChild(sectionHeader);

                filteredInterventions.forEach(intervention => {
                    const interventionElement = document.createElement('div');
                    interventionElement.classList.add('intervention-card');
                    interventionElement.style.borderColor = section.borderColor.split('-')[1]; // Extract color from class

                    interventionElement.innerHTML = `
                        <h3 class="intervention-title">${intervention.title}</h3>
                        <p class="responsibles"><strong>Responsables:</strong> ${intervention.responsibles}</p>
                        <div>
                            ${intervention.evidence.map(e => `
                                <div class="evidence-card">
                                    <p class="evidence-text">${e.text}</p>
                                    <p class="evidence-source"><strong>Fuente:</strong> ${e.source}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                    sectionElement.appendChild(interventionElement);
                });
                interventionsContainer.appendChild(sectionElement);
            }
        });
    };

    searchInput.addEventListener('input', renderInterventions);

    renderResponsiblesFilter();
    renderInterventions();
});
