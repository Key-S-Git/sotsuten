(() => {
	fetch("./json/exhibitor.json").then((e => e.json())).then((t => e(t))), fetch(
			"./json/lecturer.json").then((e => e.json())).then((e => n(e))), window.onload =
		() => {
			const n = document.getElementById("header-ul"),
				c = document.getElementById("menu-check");
			document.addEventListener("click", (d => {
				d.target !== n && d.target !== c && (c.checked = !1)
			}))
		};
	const e = e => {
			e.forEach((e => {
				document.getElementById(e.labo + "-labo").appendChild(t(e))
			}))
		},
		t = e => {
			const t = document.createElement("span"),
				n = document.createTextNode(e.name);
			return t.appendChild(n), t
		},
		n = e => {
			e.forEach((e => {
				document.getElementById("lecturer-profile-ul").appendChild(c(e))
			}))
		},
		c = e => {
			const t = document.createElement("img");
			t.setAttribute("class", "lecturer-profile-img"), t.setAttribute("src",
				"./img/lecturers/" + e.img_name);
			const n = document.createTextNode(e.roman),
				c = document.createElement("span");
			c.setAttribute("class", "lecturer-profile-text"), c.appendChild(n);
			const d = document.createTextNode(e.name),
				o = document.createElement("span");
			o.setAttribute("class", "lecturer-profile-name"), o.appendChild(d);
			const r = document.createElement("span");
r.setAttribute("class", "lecturer-profile-text");
// 1. 文章を改行コード(\n)で分割してリストにする
const lines = e.belongs.split('\n');
// 2. 分割した一行ずつ処理する
lines.forEach((line, index) => {
    // 文字を作成して追加
    r.appendChild(document.createTextNode(line));

    // 最後の行以外なら、<br>タグを作成して追加
    if (index < lines.length - 1) {
        r.appendChild(document.createElement('br'));
    }
});


			const a = document.createElement("div");
			a.appendChild(t), a.appendChild(c), a.appendChild(o), a.appendChild(r);
			const m = document.createTextNode(e.position + "  " + e.career),
				s = document.createElement("p");
			s.appendChild(m);
			const i = document.createElement("li");
			return i.setAttribute("class", "lecturer-profile-li"), i.appendChild(a), i.appendChild(
				s), i
		}
})();

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
