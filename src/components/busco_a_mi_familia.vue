<template>
	<div>
		<center>
			<h1>BUSCO A MI FAMILIA</h1>

			<img
				src="https://s3-alpha-sig.figma.com/img/7302/7636/47f8c81657d9d18046bc63e605e2af1e?Expires=1589155200&Signature=Dq-chdwyjOtqnnszcjowghu4OADG19n8vUXCK3nCmqpVissmisvRAy7L2ItSb5ARFw~a9vT0M9v7j122bWxsWw7n-6wZL78PCUzE6r-a0ImB1n-z-HkrhXySr4rnmrIDCdkiYLCAh4n7af9xRTmY6mYUVLF9J0yr84AmY3YirXLtW9TlXPu9CC7NSJ~0mgD~7DP5PBxabTsIbJoX8xZKmcwFXlHacmB45k3Yt9S6CxuKBPnhFD3IhWGYidg5k3SvljHqrZ7wP2B9QtTv7EAmButUF7KNilDFWdlK9jxR0tWw1-vAERLrJBgVkWxBszT2kN0AlkZFXJlysq8km2Ws3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				class="fotos2"
			/>

			<router-link to="menu_encontre_mas">
				<input type="submit" value="Examinar" class="examinarmas" />
			</router-link>
		</center>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.examinarmas {
	width: 143px;
	height: 28px;
	left: 116px;
	top: 682px;

	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-align: center;

	color: #ffffff;

	width: 311px;
	height: 53px;
	left: 31px;
	top: 593px;

	background: #a65746;
	/* LIGHT */

	box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
	border-radius: 26.5px;
}

.fotos2 {
	width: 155px;
	height: 155px;
	left: 111px;
	top: 182px;
	/* LIGHT */

	box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
	border: 6px solid #a65746;
	box-sizing: border-box;
}
</style>
