const meteorCanvas = document.getElementById("meteorCanvas");
const mC = meteorCanvas.getContext("2d");
meteorCanvas.width = window.innerWidth;
meteorCanvas.height = window.innerHeight;

//make canvas responsive
window.addEventListener("resize", function() {
    mC.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);
    meteorCanvas.width = window.innerWidth;
    meteorCanvas.height = window.innerHeight;
    meteors = [];
    clearTimeout(meteorTimerTimeout);
    meteorTimer();
});

function Meteor(x, y, xd, yd, radius) {
    this.x = x;
    this.y = y;
    this.xd = xd;
    this.yd = yd;
    this.radius = radius;
    this.startColor = "#ff8e85";
    this.endColor = "#46364f";
    this.history = [];

    this.move = function() {
        this.history.push({ x: this.x, y: this.y });
        this.x += this.xd;
        this.y += this.yd;

        //prevent meteors from buiding up when user is not viewing the page
        if (meteors.length > 1) {
            meteors.shift();
        }

        this.draw();
    };

    this.draw = function() {
        mC.beginPath();
        mC.fillStyle = this.startColor;
        mC.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        mC.fill();

        //keep star trail under length of 25
        if (this.history.length > 65) {
            this.history.shift();
        }

        //size of trail circle's radius
        let trailRadius = this.radius;
        //number to subtract equally from each trail circle
        let radiusSub = this.radius / this.history.length;

        const colorScale = chroma
            .scale([this.endColor, this.startColor])
            .mode("lch")
            .colors(this.history.length);

        //draw each trail circle
        for (i = this.history.length - 1; i > 0; i--) {
            const shadow = chroma(colorScale[i])
                .brighten(1)
                .saturate(2);

            mC.beginPath();
            mC.fillStyle = colorScale[i];
            mC.arc(
                this.history[i].x,
                this.history[i].y,
                trailRadius,
                0,
                Math.PI * 2,
                false
            );
            mC.shadowBlur = 10;
            mC.shadowColor = shadow;
            mC.fill();

            //make radius small on each trail circle
            if (trailRadius > 0.1) {
                trailRadius -= radiusSub;
            }
        }
    };
}

let meteors = [];
function initMeteor() {
    const radius = Math.floor(Math.random() * (5 - 2) + 2);
    const x = Math.random() * (meteorCanvas.width - 0) + 0;
    const y = 0;
    let xd;
    //send meteor accross the screen depending on where it originates
    if (x < meteorCanvas.width / 2) {
        xd = Math.random() * (4 - 1) + 1;
    } else {
        xd = Math.random() * (-1 - -4) + -4;
    }
    const yd = Math.random() * (2 - 1) + 1;

    meteors.push(new Meteor(x, y, xd, yd, radius));
}

let meteorTimerTimeout;
function meteorTimer() {
    initMeteor();
    const interval = Math.floor(Math.random() * (17000 - 12000) + 12000);
    meteorTimerTimeout = setTimeout(meteorTimer, interval);
}

function animate() {
    //clear meteor canvas
    mC.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);

    for (let i = 0; i < meteors.length; i++) {
        const meteor = meteors[i];

        //remove meteor if completely off screen
        if (
            meteor.x < -200 ||
            meteor.y > meteorCanvas.height + 200 ||
            meteor.x > meteorCanvas.width + 200
        ) {
            meteors.splice(i, 1);
        }
        meteor.move();
    }

    //cycle frames
    requestAnimationFrame(animate);
}

//start meteors
setTimeout(meteorTimer, 2000);

//start animation
animate();
