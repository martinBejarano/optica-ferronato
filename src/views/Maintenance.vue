<script setup>
import { ref, onMounted } from "vue";
import { changeSection } from "../use/useMenu";

const tips = [
	{
		title: "Mantener sus lentes limpios",
		info: "Es conveniente que usted mantenga regularmente limpios sus lentes, utilizando un paño especial para limpieza de lentes.",
	},
	{
		title: "Lavar las lentes",
		info: "Puede lavar sus lentes humedeciendo primero con auga y jabón neutro (semi-hidratante). Enguaje con agua corriente y limpie con cuidado utilizando un paño especial para la limpieza de lentes o un papel secante.",
	},
	{
		title: "Humedecer sus lentes",
		info: "Al limpiar sus lentes, tiene que humedecerlas, esto ayuda a prevenir raspaduras en la superficie de las lentes causadas por polvo e impurezas.",
	},
	{
		title: "Colocar sus lentes hacia arriba",
		info: "De esta forma usted evita que sus lentes estén expuestos a objetos o superficies que puedan dañarlos o rayarlos.",
	},
	{
		title: "Mantener en un estuche",
		info: "Cuando no esté utilizando sus lentes, es recomendable que los guarde en su estuche para reducir las posibilidades de romperlos o rayarlos.",
	},
	{
		title: "No exponer sus lentes al calor",
		info: "La superficie superior de las lentes oftálmicas sufren daño al quedar expuestas al calor, sobre todo aquellas que tienen tratamiento anti-reflejo. Por lo  tanto evite dejar sus lentes dentro de la guantera del auto.",
	},
];

onMounted(() => {
	changeSection(2);
});
</script>

<template>
	<div class="maintenance">
		
		<div class="maintenance__info-container">
			<h1 class="title maintenance__title">
				¿Cómo puedo cuidar mis lentes?
			</h1>
			
			<p class="maintenance__subtitle">
				Le brindamos algunos consejos prácticos a tener en cuenta para
				el correcto cuidado de sus lentes. Es conveniente que usted
				mantenga en condiciones los mismos por salud visual y para
				evitar el deterioro de los cristales y tambien su armazon
			</p>

			<div class="maintenance__tips-container">
				<div class="maintenance__tip" v-for="tip in tips" :key="tip">
					<h2 class="subtitle maintenance__tip-title">
						{{ tip.title }}
					</h2>
					<p class="maintenance__tip-description">{{ tip.info }}</p>
				</div>
			</div>
		</div>

		<div class="shape maintenance__shape-1"></div>

		<div class="maintenance__shape-container">
			<div class="shape maintenance__shape-2">
				<img
					class="maintenance__shape-photo-2"
					src="../media/img/maintenance-photo.jpg"
					alt="Optica Ferronato Foto Cuidados Profesional"
				/>
			</div>

			<div class="shape maintenance__shape-3"></div>
		</div>

	</div> 
	
</template>

<style scoped lang="scss">
@import "../styles/main.scss";


.maintenance {
	$r: &;
	@include section;

	&__info-container {
		width: clamp(200px, 80%, 800px);
		text-align: justify;
		margin-top: auto;
		margin-bottom: 315px;

		#{$r}__tips-container {
			margin-top: 20px;

			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}

	&__shape-1 {
		background-color: $orange;
		clip-path: polygon(100% 0, 80% 0, 100% 15%);
	}

	&__shape-container {
		position: relative;
		width: 100%;
		margin-top: auto;

		#{$r}__shape-2 {
			overflow: hidden;
			clip-path: polygon(100% 65%, 0% 100%, 100% 100%);

			#{$r}__shape-photo-2 {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transform: translateY(29vh) scale(0.9) translateX(10vw);
			}
		}

		#{$r}__shape-3 {
			background-color: $orange;
			clip-path: polygon(0 80%, 0% 100%, 30% 100%);
		}
	}
} 




@media screen and (min-width: $laptop-bp) {
	.maintenance {
		$r: &;

		&__info-container {
			max-width: 900px;
			margin-bottom: 200px;

			#{$r}__tips-container {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 30px;
			}
		}

		&__shape-container {
			#{$r}__shape-2 {
				display: none;
			}
		}
	} 
} 
</style>
