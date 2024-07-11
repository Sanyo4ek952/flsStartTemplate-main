// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Block Advantages animation
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

// Подключение анимации library
// AOS.init();


//my code
document.addEventListener('DOMContentLoaded', function () {
	const infoBox = document.getElementById('info-box');
	const groups = document.querySelectorAll('#russia-map g');

	groups.forEach(group => {
		group.addEventListener('mouseenter', function () {
			const paths = group.querySelectorAll('path');
			paths.forEach(path => {
				path.style.fill = getComputedStyle(group).color;
			});
		});

		group.addEventListener('mouseleave', function () {
			const paths = group.querySelectorAll('path');
			paths.forEach(path => {
				path.style.fill = ''; // Возвращаем исходный цвет
			});
		});

		group.addEventListener('mouseover', function () {
			const regionId = this.id;
			const regionInfo = getRegionInfo(regionId);
			infoBox.innerHTML = regionInfo;
			infoBox.style.display = 'block';
		});

		group.addEventListener('mouseout', function () {
			infoBox.style.display = 'none';
		});
	});

	function getRegionInfo(regionId) {
		const info = {
			NorthCaucasusDistrict: '<div class="name-district">Северо-Кавказский округ</div>  <div class="delivery-time"> доставка от 5 дней</div>',
			SouthernDistrict: '<div class="name-district">Южный округ</div>  <div class="delivery-time"> доставка от 3 дней</div>',
			CentralDistrict: '<div class="name-district">Центральный округ</div>  <div class="delivery-time"> доставка от 1 дней</div>',
			PrivolzhskyDistrict: '<div class="name-district">Приволжский округ</div>  <div class="delivery-time"> доставка от 3 дней</div>',
			UralDistrict: '<div class="name-district">Уральский округ</div>  <div class="delivery-time"> доставка от 5 дней</div>',
			SiberianDistrict: '<div class="name-district">Сибирский округ</div>  <div class="delivery-time"> доставка от 7 дней</div>',
			FarEasternDistrict: '<div class="name-district">Дальневосточный округ</div>  <div class="delivery-time"> доставка от 10 дней</div>',
			NorthWesternDistrict: '<div class="name-district">Северо-западный округ</div>  <div class="delivery-time"> доставка от 1 дней</div>',

			// Добавьте информацию для остальных областей
		};
		return info[regionId] || 'Информация не найдена';
	}
});