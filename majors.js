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
                            <div class="badge badge-position text-dark badge-pos-${p.futureSchoolingOptionsAfterMajor}">${p.futureSchoolingOptionsAfterMajor}</div>
                            <p class="small text-muted mb-0">Job Options ${p.jobOptions}</p>
                            <button class="btn btn-primary mt-2" onclick="toggleBlur(this.closest('.card'))">More Details</button>
                        </div>
                    </div>
                    <div class="popup d-none p-2 d-flex justify-content-center align-items-center bg-dark bg-opacity-25 position-absolute top-0 start-0 w-100 h-100">
                        <p class="outlinedText fs-4">${p.funFactAboutMajor}</p>
                        <p><button class="btn btn-primary btn-sm ms-2" onclick="closePopup(this.closest('.card'))">Close</button></p>
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });
    };

    render(iuMajorsInfo);
});