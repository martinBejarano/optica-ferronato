<script setup>
import { ref, onMounted } from "vue";
import { changeSection, sections, currentSection, menuVisible, openMenu, } from "../use/useMenu";

onMounted(() => {
	changeSection(0);
});
</script>

<template>

	<div class="home">

		<header class="home__header">
			<img class="home__mobile-open-menu"
				v-if="!menuVisible"
				@click="openMenu"
				src="../media/icons/mobile-open-menu.svg"
				alt="Optica Ferronato Cerrar Menu"
			/>

			<img class="home__logo" 
			src="../media/svg/logo.svg" alt="Optica Ferronato Logo Oficial Profesional" 
			/>
		</header>



		<div class="home__image-container">
			<img class="home__mobile-photo"
				src="../media/img/mobile-home-photo.png"
				alt="Optica Ferronato Foto Celular Inicio"
			/>

			<img class="home__desktop-photo"
				src="../media/img/desktop-home-photo.png"
				alt="Optica Ferronato Foto Escritorio Inicio"
			/>
		</div>



		<div class="home__desktop-links-container">
			<RouterLink class="home__desktop-link"
				v-for="section in sections"
				:key="section.id"
				:class="{ hidden: section.id == 0 }"
				:to="section.path"
				
			>
				{{ section.name }}
			</RouterLink>
		</div>

		<div class="shape home__shape-1"></div>
		<div class="shape home__shape-2"></div>
		<div class="shape home__shape-3"></div>

		<img class="home__fiscal-data" src="../media/img/data-fiscal.jpg" alt="Optica Ferronato Data Fiscal" title="Optica Ferronato Data Fiscal">
	</div> 

</template>

<style scoped lang="scss">
@import "../styles/main.scss";

.home {
	$r: &;
	
	@include section;
	position: relative;

	padding-top: 80px;
	overflow: hidden;

	&__header {
		width: 100%;
		text-align: center;

		#{$r}__mobile-open-menu {
			position: absolute;
			width: clamp(25px, 10vw, 45px);
			left: 15px;
			top: 20px;
		}

		#{$r}__logo {
			width: clamp(150px, 80%, 500px);
		}
	}

	&__image-container {
		width: 100%;
		margin-top: 35vh;
		text-align: center;

		#{$r}__mobile-photo {
			width: 100%;
			transform: scale(1.4);
		}

		#{$r}__desktop-photo {
			display: none;
		}
	}

	& .shape{
		height: 100%;
	}

	&__shape-1 {
		clip-path: polygon(0 65%, 100% 20%, 100% 100%, 0% 100%);
		background-color: $pink;
		z-index: -10;
	}

	&__shape-2 {
		clip-path: polygon(0 25%, 100% 50%, 100% 100%, 0% 100%);
		background-color: $orange;
		z-index: -20;
	}

	&__shape-3 {
		display: none;

		clip-path: polygon(98% 0, 100% 0, 100% 100%, 30% 100%);
		background-color: $orange;
		z-index: -30;
	}

	&__desktop-links-container {
		display: none;
	}

	&__fiscal-data{
		width: 80px;
		position: fixed;
		bottom: 50px;
		right: 50px;
	}
}

@media screen and (min-width: $laptop-bp) {
	
	.home {
		$r: &;
		justify-content: space-around;
		padding: 0px 0px 15vh 0px;

		&__header {
			#{$r}__mobile-open-menu {
				display: none;
			}
		} 

		&__image-container {
			margin: 0px;

			#{$r}__mobile-photo {
				display: none;
			}

			#{$r}__desktop-photo {
				display: inline-block;
				width: clamp(400px, 50%, 600px);
			} 
		}

		&__shape-1 {
			clip-path: polygon(50% 35%, 100% 65%, 100% 100%, 0 100%, 0 65%);
		}

		&__shape-2 {
			clip-path: polygon(0 0, 2% 0, 70% 100%, 0 100%);
		}

		&__shape-3 {
			display: block;
		}

		&__desktop-links-container {
			width: clamp(700px, 80%, 1400px);
			display: flex;
			justify-content: space-evenly;
		}
	}

}
</style>
