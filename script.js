
        const sqmeterInput = document.getElementById('sqmeter');
        const resultCard = document.getElementById('resultCard');
        const raiElement = document.getElementById('rai');
        const nganElement = document.getElementById('ngan');
        const wahElement = document.getElementById('wah');
        const combinedElement = document.getElementById('combined');

        // ฟังก์ชันแปลงค่า
        function convertArea() {
            const sqmeter = parseFloat(sqmeterInput.value);
            
            if (isNaN(sqmeter) || sqmeter < 0) {
                resultCard.style.display = 'none';
                return;
            }

            // การแปลง
            const totalWah = sqmeter / 4; // 1 ตารางวา = 4 ตารางเมตร
            const totalNgan = sqmeter / 400; // 1 งาน = 400 ตารางเมตร
            const totalRai = sqmeter / 1600; // 1 ไร่ = 1600 ตารางเมตร

            // คำนวณไร่-งาน-ตารางวา
            const rai = Math.floor(totalRai);
            const remainingAfterRai = sqmeter - (rai * 1600);
            const ngan = Math.floor(remainingAfterRai / 400);
            const remainingAfterNgan = remainingAfterRai - (ngan * 400);
            const wah = Math.floor(remainingAfterNgan / 4);

            // แสดงผล
            raiElement.textContent = totalRai.toFixed(4) + ' ไร่';
            nganElement.textContent = totalNgan.toFixed(4) + ' งาน';
            wahElement.textContent = totalWah.toFixed(2) + ' ตารางวา';
            combinedElement.textContent = `${rai}-${ngan}-${wah}`;

            // แสดงการ์ดผลลัพธ์
            resultCard.style.display = 'block';
            setTimeout(() => {
                resultCard.classList.add('show');
            }, 100);
        }

        // ฟังก์ชันล้างข้อมูล
        function clearAll() {
            sqmeterInput.value = '';
            resultCard.style.display = 'none';
            resultCard.classList.remove('show');
            sqmeterInput.focus();
        }

        // Event listeners
        sqmeterInput.addEventListener('input', convertArea);
        sqmeterInput.addEventListener('keyup', convertArea);

        // โฟกัสที่ input เมื่อโหลดหน้า
        window.addEventListener('load', () => {
            sqmeterInput.focus();
        });
