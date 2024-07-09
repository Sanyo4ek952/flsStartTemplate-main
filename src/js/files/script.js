// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.querySelectorAll('.basis__title-animation').forEach(title => {
	title.addEventListener('mouseenter', () => {
		const sliceClass = title.getAttribute('data-slice');
		const slice = document.querySelector(`.${sliceClass}`);
		// Сохраняем исходное положение
		slice.dataset.originalTransform = slice.style.transform || 'translate(-50%, -50%)';
		// Применяем новое положение в зависимости от заголовка
		switch (sliceClass) {
			case 'basis__slice1':
				slice.style.transform = `translate(-50%, -52%)  scale(1.0)`;
				break;
			case 'basis__slice2':
				slice.style.transform = `translate(-50%, -50%)  scale(1.1)`;
				break;
			case 'basis__slice3':
				slice.style.transform = `translate(-50%, -50%)  scale(1.1)`;
				break;
			case 'basis__slice4':
				slice.style.transform = `translate(-50%, -48.5%)  scale(1.1)`;
				break;
			case 'basis__slice5':
				slice.style.transform = `translate(-50%, -50%)  scale(1.1)`;
				break;
			case 'basis__slice6':
				slice.style.transform = `translate(-50%, -50%)  scale(1.1)`;
				break;
			case 'basis__slice7':
				slice.style.transform = `translate(-50%, -50%) scale(1.1)`;
				break;
		}
	});

	title.addEventListener('mouseleave', () => {
		const sliceClass = title.getAttribute('data-slice');
		const slice = document.querySelector(`.${sliceClass}`);
		switch (sliceClass) {
			case 'basis__slice1':
				slice.style.transform = `translate(-50%, -52%)  scale(0.9)`;
				break;
			case 'basis__slice2':
				slice.style.transform = `translate(-50%, -50%) `;
				break;
			case 'basis__slice3':
				slice.style.transform = `translate(-50%, -50%) `;
				break;
			case 'basis__slice4':
				slice.style.transform = `translate(-50%, -48.5%) `;
				break;
			case 'basis__slice5':
				slice.style.transform = `translate(-50%, -50%) `;
				break;
			case 'basis__slice6':
				slice.style.transform = `translate(-50%, -50%) `;
				break;
			case 'basis__slice7':
				slice.style.transform = `translate(-50%, -50%) scale(1.1)`;
				break;
		}
	});
});