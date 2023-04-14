import { $, ajax, loop, helpers } from '../../client/js/modules/helpers.js';

function submitForm() {
	const validateForm = helpers.validateForm('form');
	if (validateForm.error) return;
	const formData = ajax.serialize('form');

	ajax({
		method: 'POST',
		url: 'addItem',
		data: formData,
		// raw: (res) => {
		// 	try {
		// 		console.info(res.response);
		// 	} catch (e) {}
		// }
		success: (res) => {
			if (res.success) {
				console.info($('.input'));
				$('.input input').val('');
			}
		}
	});
}

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	submitForm();
});

$('.input input').on('focus', (e) => {
	e.target.closest('.input').classList.remove('miss');
});
