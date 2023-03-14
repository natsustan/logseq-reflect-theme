// Auto fold Recents
const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
					if (mutation.attributeName === "class" &&
									mutation.target.classList.contains("is-open")) {
									document.querySelector(".nav-content-item + .recent")
													.classList.remove("is-expand");
					}
	}
});
observer.observe(document.querySelector("#left-sidebar"), { attributes: true });
document.querySelector(".nav-content-item + .recent").classList.remove("is-expand");


// 获取FAVORITEO元素
const favoriteElement = document.querySelector('.nav-content-item.favorites a span.flex-1');

// 更改文本内容
favoriteElement.innerText = "Pin notes";

// // FAVORITE改为Pin Notes
// // document.querySelector('flex-1 ml-2').firstChild.textContent = 'Pin notes';

// // 找到要替换文本的元素，例如一个 span 元素
// const span = document.querySelector('.flex-1 ml-2');

// // 使用 textContent 属性替换文本内容
// span.textContent = 'PIN NOTES';
