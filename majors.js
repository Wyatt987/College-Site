document.addEventListener("DOMContentLoaded", () =>  {

    const grid = document.getElementById('rosterGrid');

    const render = list => {
        grid.innerHTML = '';
        list.forEach(p => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4';

            col.innerHTML = `
                <div class="card major-card h-100 shadow-sm position-relative">
                    <div class="card-blur-content">
                        <img src="${p.photo}" alt="${p.Major}" class="major-image mx-auto mt-3 mb-2 d-block" />
                        <div class="card-body text-center">
                            <h5 class="card-title mv-1">${p.Major}</h5>
                            <p class="small text-muted mb-0">Job Options ${p.jobOptions}</p>
                        </div>
                    </div>

                </div>
            `;
            grid.appendChild(col);
        });
    };

    render(iuMajorsInfo);
});
