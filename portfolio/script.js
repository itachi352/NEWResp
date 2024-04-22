var circleProgressBar = new ProgressBar.Circle('#htmlporg', {
    color: 'orange',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {
        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }
});
circleProgressBar.animate(0.8);

var circleProgressBar2 = new ProgressBar.Circle('#cssprog', {
    color: 'blue',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {
        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }
});

circleProgressBar2.animate(0.6);

var circleProgressBar3 = new ProgressBar.Circle('#jsprog', {
    color: 'gold',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {
        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }
});

circleProgressBar3.animate(0.4);

var circleProgressBar4 = new ProgressBar.Circle('#phpprog', {
    color: '#8993be',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {
        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }
});

circleProgressBar4.animate(0.2);

var circleProgressBar5 = new ProgressBar.Circle('#cppprog', {
    color: '#01426A',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {
        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }

});

circleProgressBar5.animate(0.7);

var circleProgressBar6 = new ProgressBar.Circle('#javaprog', {
    color: 'red',
    strokeWidth: 6,
    trailWidth: 1,
    duration: 2000,
    text: {

        value: '0'
    },
    step: function (state, circle) {
        circle.setText((circle.value() * 100).toFixed(0));
    }

});

circleProgressBar6.animate(0.6);

window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 100) {
        scrollButton.classList.add('visible');
        scrollButton.classList.remove('hidden');
    } else {
        scrollButton.classList.remove('visible');
        scrollButton.classList.add('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".preloader").classList.add("hidden");
        document.querySelector(".main-content").classList.add("show");
    }, 4000);
});
