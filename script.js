function calculateBMI() {
	const weight = parseFloat(document.getElementById('weight').value);
	const heightCm = parseFloat(document.getElementById('height').value);


	//kondisi validasi jika form kosong/tidak diisi
	if (!weight || !heightCm) {
		alert("Silakan masukkan berat dan tinggi badan yang valid.");
		return;
	}
	//rumus function dijadikan cm
	const heightM = heightCm / 100;
	const bmi = weight / (heightM * heightM);
	let status;

	//logika perhitungan BMI 
	if (bmi < 18.5) {
		status = "Kekurangan berat badan";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		status = "Normal (ideal)";
	} else if (bmi >= 25 && bmi <= 29.9) {
		status = "Kelebihan berat badan";
	} else {
		status = "Kegemukan (obesitas)";
	}

	document.getElementById('result').innerHTML = `
		<h2 style="text-align: center">Hasil</h2>
		<h3>${bmi.toFixed(2)}</h3>
		<h3>Anda ${status}</h3>
		<br>	
		<hp>Beberapa penyakit yang berasal dari kegemukan:<p>
		<ul>
			<li>Diabetes</li>
			<li>Hipertensi</li>
			<li>Sakit Jantung</li>
			<li>Osteoarthritis</li>
		</ul><br>
		<p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatann
			tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih
			lanjut.</p>
		<div class="button-container">
			<a href="https://www.instagram.com/dela.agustiani/" target="_blank">Konsultasi Dokter Via Aplikasi</a>
			<a href="https://www.instagram.com/dela.agustiani/" target="_blank" id="register">Registrasi Online Sekarang</a>
		</div>
	`;
}

function clearResult() {
	document.getElementById('result').innerHTML = "<h2>Hasil</h2><p>Hasil BMI Anda akan ditampilkan di sini.</p>";
}