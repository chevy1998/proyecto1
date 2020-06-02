<template>
	<div>
		<center>
			<h2 class="en">¿Encontraste una mascota? Publicala y que vuelva a su hogar</h2>
			<img
				src="https://s3-alpha-sig.figma.com/img/7302/7636/47f8c81657d9d18046bc63e605e2af1e?Expires=1589155200&Signature=Dq-chdwyjOtqnnszcjowghu4OADG19n8vUXCK3nCmqpVissmisvRAy7L2ItSb5ARFw~a9vT0M9v7j122bWxsWw7n-6wZL78PCUzE6r-a0ImB1n-z-HkrhXySr4rnmrIDCdkiYLCAh4n7af9xRTmY6mYUVLF9J0yr84AmY3YirXLtW9TlXPu9CC7NSJ~0mgD~7DP5PBxabTsIbJoX8xZKmcwFXlHacmB45k3Yt9S6CxuKBPnhFD3IhWGYidg5k3SvljHqrZ7wP2B9QtTv7EAmButUF7KNilDFWdlK9jxR0tWw1-vAERLrJBgVkWxBszT2kN0AlkZFXJlysq8km2Ws3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				class="fotos"
			/>
		</center>

		<form>
			<div>
				<p class="trf"></p>

				<input type="text" placeholder="Raza" class="mui" />
			</div>

			<div>
				<p class="ghj"></p>

				<input type="text" placeholder="Lugar" class="lu" />
			</div>

			<div>
				<p class="ygb"></p>

				<input type="text" placeholder="Contacto" class="cu" />
			</div>

			<div>
				<router-link to="busco_a_mi_familia">
					<input type="submit" value="Publicar" class="publimasen" />
				</router-link>
			</div>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.publimasen {
	position: absolute;
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

	position: absolute;
	width: 311px;
	height: 53px;
	left: 31px;
	top: 593px;

	background: #a65746;
	/* LIGHT */

	box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
	border-radius: 26.5px;
}

.cu {
	width: 327px;
	height: 35px;
	left: 24px;
	top: 511px;

	background: #ffffff;
	border-radius: 4px;
}

.ygb {
	width: 110px;
	height: 14px;
	left: 24px;
	top: 492px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.lu {
	width: 327px;
	height: 35px;
	left: 24px;
	top: 425px;

	background: #ffffff;
	border-radius: 4px;
}

.ghj {
	width: 201px;
	height: 14px;
	left: 24px;
	top: 406px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.mui {
	width: 327px;
	height: 35px;
	left: 26px;
	top: 345px;

	background: #ffffff;
	border-radius: 4px;
}

.trf {
	width: 67px;
	height: 11px;
	left: 26px;
	top: 326px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.fotos {
	width: 155px;
	height: 155px;
	left: 111px;
	top: 182px;
	/* LIGHT */

	box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
	border: 6px solid #a65746;
	box-sizing: border-box;
}

.en {
	width: 348px;
	height: 49px;
	left: 16px;
	top: 112px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 25px;
	line-height: 30px;

	color: #402312;

	/* txt */

	text-shadow: 0px 2px 80px #ffffff;
}
</style>
