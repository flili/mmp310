var slides = [
	{
		img: "cat.jpg",
		caption: "I am a cat."
	},
	{
		img: "dog.jpg",
		caption: "I'm a dog"
	},
	{
		img: "bird.jpg",
		caption: "I'm a bird."
	}
];


for (var i = 0; i < slides.length; i++) {
    var slide = slides [i];
    var slideElem = document.createElement("div");
    var img = new Image();
    var caption = document.createElement("p");


    img.src = slide.img;
    caption.textContent = slide.caption;


    slideElem.appendChild(img);
    slideElem.appendChild(caption);

    document.body.appendChild(slideElem);
}