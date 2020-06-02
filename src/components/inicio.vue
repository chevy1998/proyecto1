<template>
	<div class="inicio">
		<center>
			<img
				src="https://s3-alpha-sig.figma.com/img/1a8b/7045/2e40edb562b3c43000efbc531c70916d?Expires=1589155200&Signature=CmTdyJNp-h0OFwSQzb~Tsd2Lz9G5OKkG0rbAWJ~c~ysvl-BGmZfNrlFcj7K25oiGXneHI6waXNDpN~IVGQgzTi5kMGgsEwRZ1Ok5-nHjivSB~jLvVJw8BvUhShC3-PU2ZUu~58LI5rLC4z7eljLpYd9ZSuZQaStlaKjOalJp15yrEyxM7fkjWPEA6~pSs1z5NtYy8Dqw6pcDJP3ujLCAfprGtlqXSKPeGBbne0PDyJPOU~xy18FxiDk1Z3V0dQsVQy2J0LQ0OZbYhwpFtfrvXqXVz7GADB59Pg7CJIgUof1ky3i~QvrSKg50yvtBj--NckXmcu419SZf0Ayad2O-SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				class="titulo"
			/>

			<form @submit.prevent="submit">
				<div>
					<p class="iee"></p>

					<input
						id="email"
						type="email"
						name="email"
						placeholder="Correo electronico"
						class="input"
						value
						required
						v-model="form.email"
					/>
				</div>

				<div>
					<p class="iee2"></p>

					<input
						id="password"
						type="password"
						name="password"
						placeholder="Contraseña"
						class="input2"
						required
						v-model="form.password"
					/>
				</div>

				<div>
					<input @click="sesion" type="submit" value="INICIAR SESION" class="buttonI" />
				</div>

				<div>
					<p class="parrafo">
						Pet Return Home es una aplicación diseñada para ayudar a las mascotas extraviadas a
						encontrar su hogar y que puedan volver con sus familias muy pronto.
					</p>
				</div>

				<div>
					<router-link to="/registrar">
						<a class="cuenta">No tienes cuenta? Create una</a>
					</router-link>
				</div>
			</form>
		</center>
	</div>
</template>

<script>
import firebase from 'firebase';

export default {
	data() {
		return {
			form: {
				email: '',
				password: '',
			},
			error: null,
		};
	},
	methods: {
		sesion() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.form.email, this.form.password)
				.then(data => {
					data.user;
					this.$router.replace('menu_buscar_mas');
				})
				.catch(err => {
					this.error = err.message;
				});
		},

		socialLogin() {
			const provider = new firebase.auth.GoogleAuthProvider();

			firebase
				.auth()
				.signInWithPopup(provider)
				.then(result => {
					result.user;
					this.$router.replace('menu_buscar_mas');
				})
				.catch(err => {
					alert('Oops. ' + err.message);
				});
		},
	},
};
</script>

<style scoped>
.titulo {
	width: 293px;
	height: 179px;
	left: 50px;
	top: 75px;
}

.body {
	width: 375px;
	height: 812px;
	background: #f0f0f0;
}

.input {
	width: 313.5px;
	height: 32.12px;
	left: 25px;
	top: 298px;

	background: #ffffff;
	border-radius: 17px;
	width: 248px;
	height: 20px;
	left: 40px;
	top: 304px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	color: #a67051;
	width: 313.5px;
	height: 32.12px;
	left: 25px;
	top: 298px;

	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
}

.input2 {
	width: 313.5px;
	height: 32.12px;
	left: 25px;
	top: 358px;

	background: #ffffff;
	border-radius: 17px;

	width: 149px;
	height: 17px;
	left: 40px;
	top: 366px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	color: #a67051;
	width: 313.5px;
	height: 32.12px;
	left: 25px;
	top: 298px;

	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
}

.container {
	width: 327px;
	height: 54px;
	left: 24px;
	top: 379px;
}
.container2 {
	width: 327px;
	height: 54px;
	left: 24px;
	top: 379px;
}
.iee {
	width: 109px;
	height: 14px;
	left: 24px;
	top: 379px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	color: #77787b;
}
.iee2 {
	width: 65px;
	height: 14px;
	left: 22px;
	top: 454px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	color: #77787b;
}
.buttonI {
	/* Component 1 */

	position: absolute;
	width: 247px;
	height: 40px;
	left: 56px;
	top: 426px;

	/* INICIO DE SESION */

	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	text-align: center;

	background: #a65746;

	color: #ffffff;
}

.parrafo {
	position: absolute;
	width: 313px;
	height: 133px;
	left: 30px;
	top: 553px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 180.5%;
	/* or 23px */

	letter-spacing: 0.5px;

	color: #402312;

	/* txt */

	text-shadow: 0px 2px 80px #ffffff;
	position: absolute;
	width: 344px;
	height: 190px;
	left: 15px;
	top: 525px;

	background: #f0f0f0;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
	border-radius: 38px;
}

.cuenta {
	position: absolute;
	width: 270px;
	height: 16px;
	left: 56px;
	top: 761px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	text-align: center;

	color: #402312;

	/* txt */

	text-shadow: 0px 2px 80px #ffffff;
}
</style>
