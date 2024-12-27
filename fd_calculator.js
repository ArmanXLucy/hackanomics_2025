let investInput = document.querySelector('.invest');
let interestInput = document.querySelector('.interest');
let timeInput = document.querySelector('.time');
let calculateButton = document.querySelector('.button');

let investedamountInput = document.querySelector('.investedamt');
let estimatedamountInput = document.querySelector('.estdrnt');
let totalamountInput = document.querySelector('.totval');

const ctx = document.getElementById('investmentChart').getContext('2d');
let chart;

calculateButton.addEventListener('click', () => {
    let investedamount = parseFloat(investInput.value);
    let interestamount = parseFloat(interestInput.value);
    let timeperiod = parseFloat(timeInput.value);

    if (!isNaN(investedamount) && !isNaN(interestamount) && !isNaN(timeperiod)) {
        let estimatedreturn = (investedamount * interestamount * timeperiod) / 100;
        let totalvalue = investedamount + estimatedreturn;
        investedamountInput.value = investedamount.toFixed(2);
        estimatedamountInput.value = estimatedreturn.toFixed(2);
        totalamountInput.value = totalvalue.toFixed(2);

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Invested Amount', 'Estimated Return'],
                datasets: [{
                    label: 'Investment Breakdown',
                    data: [investedamount, estimatedreturn],
                    backgroundColor: ['#6320af', '#ff6a00'],
                    borderColor: ['#5a189a', '#e65100'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                            }
                        }
                    }
                }
            }
        });
    } else {
        alert("Please enter a valid number in all boxes!");
    }
});

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;
const timeInterval = 4000;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.scrollTo({
        left: currentIndex * slider.clientWidth,
        behavior: 'smooth'
    });
}

setInterval(nextImage, timeInterval);
