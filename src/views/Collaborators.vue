<script setup>
import { ref, onMounted } from "vue";

import { changeSection } from "../use/useMenu"

onMounted(()=>{
	changeSection(3)
})
</script>

<template>
	<div class="collaborators">
		
		<div class="collaborators__info-container">
			<h1 class="title collaborators__title">
				Varilux Especialista
			</h1>

			<p class="collaborators__info">
				Varilux Especialista es una iniciativa de Essilor Internacional,
				lider mundial en lentes oftálmicas, cuyo objetivo es certificar
				a las mejores ópticas del mercado por su calidad de atencion en
				la venta de sus productos. <br />
				Comprando sus lentes en una óptica Varilux Especialista, usted
				tiene la seguridad y confianza de que recibirá el mejor
				asesoramiento y el mejor producto acorde a sus necesidades
				visuales.
			</p>

			<img class="collaborators__partner-photo"
				src="../media/img/varilux.jpg"
				alt="Optica Ferronato Varilux Profesional Calidad"
			/>
		</div>

		<div class="shape collaborators__shape-1"></div>

		<div class="collaborators__shape-container">
			<div class="shape collaborators__shape-2"></div>
			<div class="shape collaborators__shape-3"></div>

			<div class="shape collaborators__shape-4">
				<img class="collaborators__mobile-shape-photo"
					src="../media/img/mobile-collaborators-photo.jpg"
					alt="Optica Ferronato Foto Colaboradores Profesional Calidad"
				/>
			</div>
		</div>

	</div> 	
</template>

<style scoped lang="scss">
@import "../styles/main.scss";


.collaborators {
	$r: &;
	@include section;

	&__info-container {
		width: clamp(200px, 80%, 600px);
		text-align: center;
		margin-top: auto;
		margin-bottom: 300px;

		#{$r}__info{
			text-align: justify;
		}

		#{$r}__partner-photo {
			width: 80%;
			margin-top: 40px;
		}
	}

	&__shape-1 {
		background-color: $orange;
		clip-path: polygon(100% 0, 75% 0, 100% 10%);
	}

	&__shape-container {
		position: relative;
		width: 100%;
		margin-top: auto;

		#{$r}__shape-2 {
			background-color: $orange;
			clip-path: polygon(0 90%, 0 100%, 25% 100%);
			z-index: 10;
		}

		#{$r}__shape-3 {
			background-color: $pink;
			clip-path: polygon(0 80%, 0 100%, 25% 100%);
			z-index: -10;
		}

		#{$r}__shape-4 {
            clip-path: polygon(100% 65%, 0% 100%, 100% 100%);
			overflow: hidden;
			z-index: -30;

			#{$r}__mobile-shape-photo {
				width: 100%;
				height: 100%;
				transform: translateY(30vh) scale(1) translateX(10vw);
				object-fit: cover;
			}

			#{$r}__desktop-shape-photo{
				display: none;
			}
		}
	}
} 


@media screen and (min-width:$laptop-bp) {
    .collaborators {
	$r: &;

	justify-content: center;
	padding: 0px;
	

	&__info-container {
		width: clamp(200px, 40vw, 600px);
		margin: auto 0px 0px 0px;

		#{$r}__partner-photo {
			width: 70%;
		}
	}

	&__shape-1 {
		clip-path: polygon(80% 0, 100% 20%, 100% 0);
	}

	&__shape-container {

		#{$r}__shape-2 {
			clip-path: polygon(0 80%, 0% 100%, 15% 100%);
		}

		#{$r}__shape-3 {
			clip-path: polygon(0 40%, 0% 100%, 25% 100%);
		}

		#{$r}__shape-4 {
			display: none;
		}
	}
}
} 
</style>
