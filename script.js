document.addEventListener("DOMContentLoaded", function () {


    // heart icon event
    const heartIcons = document.getElementsByClassName('heart-icon');
    for (const heartIcon of heartIcons) {
        heartIcon.addEventListener('click', function () {
            const heartNumber = parseInt(document.getElementById('heart-number').innerText);
            const heartNumberAfterClick = Number(heartNumber) + Number(1);

            const updateHeartNumber = document.getElementById('heart-number');
            updateHeartNumber.innerText = heartNumberAfterClick;
        });
    }


    //call functionality
    const callButtons = document.getElementsByClassName('call-btn');
    for (const callButton of callButtons) {
        callButton.addEventListener('click', function (event) {
            event.preventDefault();
            const cardTitle = callButton.parentNode.parentNode.childNodes[3].innerText;
            const cardSubTitle = callButton.parentNode.parentNode.childNodes[5].innerText;
            const cardNumber = callButton.parentNode.parentNode.childNodes[7].innerText;
            const cardCategory = callButton.parentNode.parentNode.childNodes[9].innerText;

            const coinNumber = parseInt(document.getElementById('coin-number').innerText);

            // check 20 coin
            if (coinNumber < 20) {
                alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
                return;
            } else {
                alert(`📞 Calling ${cardSubTitle} ${cardNumber}`);
            }

            // minus 20 coin
            const CoinNumberAfterClick = Number(coinNumber) - Number(20);
            const updateCoinNumber = document.getElementById('coin-number');
            updateCoinNumber.innerText = CoinNumberAfterClick;

            // and now it update on call history.
            const SideBar = document.getElementById('historys-div');

            //  current time generate.
            const timeString = new Date().toLocaleTimeString();

            const historyList = document.createElement('div');
            historyList.innerHTML = `
                <div class="history-list bg-[#fafafa] p-3 rounded-md flex justify-between items-center mt-3">
                    <div class="w-full">
                        <h1 class="text-[15px] font-semibold">${cardTitle}</h1>
                        <p class="text-gray-400">${cardNumber}</p>
                    </div>
                    <div class="w-[56%] flex justify-end">
                        <p class="text-[15px] w-fit">${timeString}</p>
                    </div>
                </div>
        `
            SideBar.append(historyList);
            document.getElementById('clear-btn').addEventListener('click', function () {
                SideBar.innerHTML = '';
            })


        });
    }


    // copy button functionality with event delegation.
    const cardsSection = document.querySelector('.cards-section');
    cardsSection.addEventListener('click', function (e) {

        const copyBtn = e.target.closest('.copy-btn');
        const callNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;

        //copy number
        navigator.clipboard.writeText(callNumber)
            .then(() => {
                alert(`📋 নম্বর কপি হয়েছে  ${callNumber}`);

                //update copy count navbar
                const copyNumber = parseInt(document.getElementById('copy-number').innerText);
                const afterClickCopy = Number(copyNumber) + Number(1);

                const updateCopyNumber = document.getElementById('copy-number');
                updateCopyNumber.innerText = afterClickCopy;
            })
            .catch(() => {
                alert(`❌ Failed to copy number`);
            });
    });






});