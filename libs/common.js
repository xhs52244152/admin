
// 侧边导航交互效果
$('a + ul').prev().on('click', function () {
	$(this).next().slideToggle();
});