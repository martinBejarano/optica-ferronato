<script setup>
import { ref, onMounted } from "vue";

import { changeSection } from "../use/useMenu";

onMounted(() => {
	changeSection(4);
});
</script>

<template>
	<div class="contact">

		<div class="contact__info-container">
			<h1 class="title contact__title">Optica Ferronato</h1>

			<a class="contact__link" 
				href="https://goo.gl/maps/g8bavEUCQmniSAs86"
				title="Ubicacion de Optica Ferronato"
			>
				<img class="contact__link-icon"
					src="../media/icons/gps.svg"
					alt="Optica Ferronato Ubicacion"
				/>
				<p> 
					Av. Gral. San Martín 2123 <br />
					Florida <br />
					B1602BWG <br />
					Argentina
				</p>
			</a>

			<h2 class="subtitle contact__subtitle">
				Horario de atención
			</h2>

			<p class="contact__schedule">
				Lunes a Viernes de 9:00 a 12:30 hs y de 15:30 a 19:00hs. <br />
				Sábados de 9:00 a 13:00 hs
			</p>

			<a class="contact__link" 
			href="mailto:info@opticaferronato.com" 
			title="Correo electronica de Optica Ferronato"
			>
				<img
					class="contact__link-icon"
					src="../media/icons/mail.svg"
					alt="Optica Ferronato Correo Electronico"
				/>
				<p>info@opticaferronato.com</p>
			</a>

			<a class="contact__link" 
			href="#"
			title="Telefono de Optica Ferronato"
			>
				<img
					class="contact__link-icon"
					src="../media/icons/celphone.svg"
					alt="Optica Ferronato Telefono Celular"
				/>
				<p>+54 11 4795-3185</p>
			</a>

			<a class="contact__link" 
			href="https://www.instagram.com/opticaferronato/"
			title="Instagram de Optica Ferronato"
			>
				<img
					class="contact__link-icon"
					src="../media/icons/instagram.svg"
					alt="Optica Ferronato Redes Sociales Instagram"
				/>
				<p>opticaferronato</p>
			</a>
		</div>



		<div class="contact__alert-container">

			<div class="contact__alert">
				<img class="contact__alert-icon"
					src="../media/icons/instagram.svg"
					alt="Optica Ferronato Icono de Alerta Instagram"
				/>
				<a class="contact__alert-info" 
				href="https://www.instagram.com/opticaferronato/"
				title="Instagram de Optica Ferronato"
				>
					Novedades <br> en <br> instagram!
				</a>

				<div class="shape contact__shape-1"></div>
				<div class="shape contact__shape-2"></div>
			</div>

		</div>

	</div>
</template>

<style scoped lang="scss">
@import "../styles/main.scss";

.contact {
	$r: &;
	@include section;

	&__info-container {
		
		width: clamp(150px, 80%, 650px);
		margin-bottom: 10vh;

		@include flexCenter(column);
		gap: 25px;
		
		text-align: center;

		#{$r}__link {
			margin-right: 40px;
			
			display: flex;
			align-items: flex-start;
			gap: 10px;

			#{$r}__link-icon {
				width: 25px;
			}
		}
	}

	&__alert-container {
		position: relative;
		width: 100%;
		height: 60vh;
		margin-top: auto;
		
		@include flexCenter(row);
		

		#{$r}__alert {
			@include flexCenter(column);

			#{$r}__alert-icon {
				position: absolute;
				width: clamp(150px, 70%, 175px);

				opacity: 0.4;

				z-index: -10;

				@include desktop{
					width: clamp(150px, 70%, 275px);
					position: absolute;
				}
			}

			#{$r}__alert-info {
				width: max-content;
				padding: 0px 50px;
				
				font-size: 3.2em;
				font-family: 'Freestyle Script';
				text-align: center;

				pointer-events: all;
				z-index: 20;
			}
		}

		#{$r}__shape-1 {
			background-color: $orange;
			clip-path: polygon(0 35%, 100% 70%, 100% 100%, 0% 100%);
			z-index: -20;
		}

		#{$r}__shape-2 {
			background-color: $pink;
			clip-path: polygon(0 55%, 100% 25%, 100% 100%, 0% 100%);
			z-index: -20;
		}
	}
} 

@media screen and (min-width: $laptop-bp) {
	.contact {
		$r: &;
		align-items: flex-start;
		padding: 0px;


		&__info-container {
			margin: 20vh 0px 0px 8vw;
			align-items: flex-start;
			text-align: left;
		}

		&__alert-container {
			height: 35vh;

			#{$r}__alert {
				margin-bottom: 20vh;
				margin-left: 60vw;

				#{$r}__alert-info {
					transform: rotate(-30deg);
				}
			}

			#{$r}__shape-1 {
				display: none
			}

			#{$r}__shape-2 {
				clip-path: polygon(100% 0, 35% 100%, 100% 100%);
			}
		}
	}
} 
</style>
