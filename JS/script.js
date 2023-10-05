var typed = new Typed('.text-hero', {
    strings : ["Hi, I'm I Gede Yoga Pramana"],
    typeSpeed : 50,
    backSpeed : 0,
    onComplete: function() {
        var subtyped = new Typed('.subtext-hero', {
            strings : ["Web Developer","Bot Telegram Developer","Web Design"],
            typeSpeed : 50,
            backSpeed : 0,
            loop : true,
        });
    },
});

