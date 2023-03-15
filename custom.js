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
favoriteElement.innerText = "Pinned notes";