<template>
	<div>
		<center>
			<h1 class="crearcuenta">NUEVO USUARIO</h1>

			<h2 class="creacion">Creacion de cuenta</h2>

			<img
				src="https://s3-alpha-sig.figma.com/img/e721/ec79/e9dea25426b4737255d984b628954597?Expires=1589760000&Signature=VFTGNEy4MiRU8etVWIqtqW3l46xP4dsd8xAAGdPzAi7S8KqTAkO7FZeAu1WCWHaBoTVrxyzTkTZSfgG527NvKR9XkUKCfBnUWEXvaiNXOASuhjtGyefwFoaIckZTipEEUdC-jIVTkDTqmJYU1U6NWB2HsjZHlzFKsFVNC3~v90LYDq17rINPI1n68uKxCx9NDYUsxqySa5o5ileH1jvGuYj9bvWtnzX~hNuJzc9uzp9~CSN~lHQSaankyJGM30x7RY7A9bRcnzd4Omg6Ruvarg4a9eRjXaC0W5FT~a88-CMvwcffXj5uvNIjhfDi8RH37oFzC9thF4RdMSBa7~xKBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
				class="imgusuario"
			/>
		</center>

		<form @submit.prevent="submit">
			<div>
				<p class="qwe"></p>

				<input
					id="name"
					type="text"
					name="name"
					placeholder="Nombre completo"
					class="input3"
					value
					required
					v-model="form.name"
				/>
			</div>

			<div>
				<p class="rty"></p>

				<input
					id="email"
					type="text"
					name="email"
					placeholder="Correo Electronico"
					class="input4"
					value
					required
					v-model="form.email"
				/>
			</div>

			<div>
				<p class="iop"></p>

				<input
					id="user"
					type="text"
					name="user"
					placeholder="Nombre de usuario"
					class="input5"
					value
					required
					v-model="form.user"
				/>
			</div>

			<div>
				<p class="bnm"></p>

				<input
					id="password"
					type="password"
					name="password"
					placeholder="Contraseña"
					class="input6"
					value
					required
					v-model="form.password"
				/>
			</div>

			<div>
				<input @click="regis" type="submit" value="REGISTRATE" class="buttonII" />
			</div>

			<div>
				<router-link to="/">
					<a class="cuenta2">Ya tienes cuenta? Inicia sesion</a>
				</router-link>
			</div>
		</form>
	</div>
</template>

<script>
import firebase from 'firebase';

export default {
	data() {
		return {
			form: {
				name: '',
				email: '',
				password: '',
			},
			error: null,
		};
	},
	methods: {
		regis() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.form.email, this.form.password)
				.then(data => {
					data.user
						.updateProfile({
							displayName: this.form.name,
						})
						.then(() => {});
					alert('Usuario registrado');
				})
				.catch(err => {
					this.error = err.message;
				});
		},
	},
};
</script>

<style scoped>
.cuenta2 {
	/* Ya tienes cuenta? Inicia sesion */

	position: absolute;
	width: 171px;
	height: 14px;
	left: 102px;
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

.buttonII {
	/* Button */
	position: absolute;
	width: 311px;
	height: 53px;
	left: 32px;
	top: 676px;

	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	text-align: center;

	background: #a65746;

	color: #ffffff;
}

.input6 {
	/* Background */

	width: 327px;
	height: 35px;
	left: 24px;
	top: 548px;

	background: #ffffff;
	border-radius: 4px;
}

.bnm {
	/* Contraseña */

	width: 65px;
	height: 14px;
	left: 24px;
	top: 529px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.input5 {
	/* Background */

	width: 327px;
	height: 35px;
	left: 17px;
	top: 478px;

	background: #ffffff;
	border-radius: 4px;
}

.iop {
	/* Nombre de usuario */

	width: 109px;
	height: 14px;
	left: 17px;
	top: 459px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.input4 {
	/* Background */

	width: 327px;
	height: 35px;
	left: 24px;
	top: 408px;

	background: #ffffff;
	border-radius: 4px;
}

.rty {
	/* Correo electronico */

	width: 103px;
	height: 14px;
	left: 24px;
	top: 389px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.qwe {
	/* Nombre completo */

	width: 102px;
	height: 14px;
	left: 24px;
	top: 324px;

	font-family: ABeeZee;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;

	color: #77787b;
}

.input3 {
	/* Background */

	width: 327px;
	height: 35px;
	left: 24px;
	top: 338px;

	background: #ffffff;
	border-radius: 4px;
}

.imgusuario {
	width: 182px;
	height: 170.86px;
	left: 98px;
	top: 119px;

	background: #a65746;
	border: 3px solid #a67051;
	box-sizing: border-box;
	background: #dfe0df;
}

.creacion {
	/* Creación de cuenta */

	width: 248px;
	height: 29px;
	left: 17px;
	top: 128px;

	font-family: Rubik;
	font-style: italic;
	font-weight: bold;
	font-size: 25px;
	line-height: 30px;

	color: #000000;
}

.crearcuenta {
	/* NUEVO USUARIO */

	width: 270px;
	height: 42px;
	left: 16px;
	top: 58px;

	font-family: Rubik;
	font-style: italic;
	font-weight: bold;
	font-size: 32px;
	line-height: 38px;

	color: #000000;
}
</style>
