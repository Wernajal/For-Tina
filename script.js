/* ================= STARS ================= */

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


/* ================= OPEN LETTER ================= */

function openLetter() {

    const start = document.getElementById("start");

    const main = document.getElementById("main");

    start.style.display = "none";

    main.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    typeMessage();

    createHearts(20);
}


/* ================= TYPING EFFECT ================= */

function typeMessage() {

    const text =
        "Hey Tina... this little page is just for you. ❤️";

    const element =
        document.getElementById("typing");

    let index = 0;


    function type() {

        if (index < text.length) {

            element.innerHTML =
                text.substring(0, index + 1) +
                '<span class="cursor">|</span>';

            index++;

            setTimeout(type, 55);

        } else {

            element.innerHTML = text;
        }
    }

    type();
}


/* ================= SECRET MESSAGE ================= */

function revealSecret() {

    const secret =
        document.getElementById("secret");

    secret.style.display = "block";

    createHearts(30);

    setTimeout(() => {

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);
}


/* ================= FLOATING HEARTS ================= */

function createHearts(amount) {

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "✨",
        "🤍"
    ];


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);
    }
}
