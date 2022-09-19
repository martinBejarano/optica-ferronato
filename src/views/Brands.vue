<script setup>
import { ref, onMounted } from "vue";
import { changeSection } from "../use/useMenu";

let activeBrand = ref(0);

const brands = [
	{
		name: "versace",
		title: "Versace",
		description:
			"Líderes en el mundo de la visión Rodenstock es el fabricante de lentes y monturas más importante de Alemania. La empresa, fundada en 1877 y con sede en Múnich, da trabajo a 4600 empleados en todo el mundo y sus filiales de venta y socios de distribuciónestán presentes en más de 80 países. Dispone de talleres de producción de lentes enun total de 11 lugares en 10 países",
		key: 0,
	},
	{
		name: "rayban",
		title: "Rayban",
		description:
			"El nombre Ray-Ban significa “Barrera contra los rayos” (Ray-Banner), que al estar reducido en dos palabras cortas y llamativas establecieron todo un paradigma alrededor de su marca con el transcurso de los años. Fue escogido al resultar más atractivo que “Anti-Glare” ó “Anti Brillo”. Ray-Ban es considerado como el primer fabricante moderno de gafas de sol y es responsable de la creación de dos de las gafas de sol más imitadas en el mundo: Ray-Ban Aviator y Ray-Ban Wayfarer.",
		key: 1,
	},
	{
		name: "bvlgari",
		title: "Bvlgari",
		description:
			"Bulgari (BIT: BUL) es una marca italiana de joyas y artículos de lujo. El nombre es escrito a menudo ''Bvlgari'' con un estilo romano antiguo, y proviene de su fundador, el griego Sotirios Boulgaris (1857-1932). Iniciada en 1884 en Roma, Italia, la empresa ganó prestigio como joyería, aunque su gama de productos ha crecido con el tiempo hasta abarcar relojes, bolsos, fragancias, accesorios, anteojos y hasta hoteles. La Italiana Luxottica Group SpA líder mundial en el sector de gafas, es desde hace varios años la licenciada para el diseño, producción y distribución a nivel mundial de marcos de prescripción y gafas de sol de BVULGARI.",
		key: 2,
	},
	{
		name: "dolce",
		title: "Dolce & Gabanna",
		description:
			"Dolce & Gabbana es una firma de moda italiana. Fue fundada por Domenico Dolce y Stefano Gabbana. Aunque inicialmente comenzaron diseñando ropa, actualmente la empresa ha diversificado su oferta diseñando gafas, relojes, anillos hasta perfumes, móviles (V3 de Dolce & Gabbana ) o incluso restaurantes. Dolce & Gabbana es muy popular por sus diseños entre los artistas de Hollywood; han diseñado ropa para Madonna, Gisele Bündchen, Monica Bellucci, Ayumi Hamasaki, Isabella Rossellini y Kylie Minogue entre otros.",
		key: 3,
	},
];

let changeBrand = (key) => {
	activeBrand.value = key;
};

onMounted(() => {
	changeSection(1);
});
</script>

<template>
	<div class="brands">

		<div class="brands__inner-container">

			<div class="brands__brand-selector">
				<div
					v-for="brand in brands"
					:key="brand.key"
					class="brands__brand"
					:class="{ active: brand.key == activeBrand }"
					@click="changeBrand(brand.key)"
				>
					<img
						class="brands__brand-image"
						:src="`'../../src/media/img/${brand.name}.png`"
						title="Versace Rayban Bvlgari Dolce Gabbana"
						alt="Versace Rayban Bvlgari Dolce Gabbana"
					/>
				</div>
			</div>

			<div class="brands__brand-info-container">
				<div
					class="brands__brand-info"
					v-for="brand in brands"
					:key="brand.key"
					:class="{ active: brand.key == activeBrand }"
				>

					<div>
						<h1 class="title brands__brand-title">
							{{ brand.title }}
						</h1>
						<p class="brands__brand-description">
							{{ brand.description }}
						</p>

					</div>

				</div>
			</div>

			<div class="shape brands__shape-1"></div>

			<div class="brands__shape-container">
				<div class="shape brands__shape-2">
					<img
						class="brands__shape-2-photo"
						:src="`../../src/media/img/brand-${activeBrand}-image.jpg`"
						:class="`${brands[activeBrand].name}`"
						title="Versace Rayban Bvlgari Dolce Gabbana"
						alt="Optica Ferronato foto Versace Rayban Bvlgari Dolce Gabbana"
					/>
				</div>
			</div>

		</div>

	</div>
</template>

<style scoped lang="scss">
@import "../styles/main.scss";


.brands {
	$r: &;

	&__inner-container {


		@include section;
		gap: 50px;

		#{$r}__brand-selector {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;


			#{$r}__brand {
				width: clamp(100px, 37vw, 215px);
				height: clamp(100px, 37vw, 215px);
				padding: 10px;
				
				@include flexCenter(row);

				background: $orange-op;
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.384);
				transition: 0.3s background-color, 0.3s box-shadow;

				#{$r}__brand-image {
					width: 100%;
				}

				&.active {
					background-color: #fc8938d5;
					box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.658);
				}
			}
		} 

		#{$r}__brand-info-container {
			width: clamp(0px, 80%, 500px);
			text-align: justify;
			margin-top: auto;
			margin-bottom: 25vh;

			
			#{$r}__brand-info {
				display: none;	

				&.active {
					display: block;
				}
			}
		}

		#{$r}__shape-1{
			display: none;
			
			clip-path: polygon(0 0, 0 45%, 45% 0);
            background-color: $pink;
            z-index: -20;
		}

		#{$r}__shape-container {
			position: relative;
			width: 100%;
			margin-top: auto;

			#{$r}__shape-2 {
				overflow: hidden;
				clip-path: polygon(0 85%, 100% 70%, 100% 100%, 0% 100%);

				#{$r}__shape-2-photo {
					position: absolute;
					width: 100%;
					object-fit: cover;
					
					&.versace {
						transform: translateY(80vh) rotateZ(-15deg) translateX(10vw) scale(1.3);
					}

					&.rayban {
						transform: translateY(80vh) scale(1.3) translateX(10vw) rotateZ(-15deg);
					}

					&.bvlgari {
						transform: translateY(73vh) scale(1.3) translateX(2vw) rotateZ(-15deg);
					}

					&.dolce {
						transform: translateY(79vh) scale(1.3) translateX(5vw) rotateZ(-15deg);
					}

					
				}
			}

		}
	}
} 


@media screen and (min-width: $laptop-bp) {
	.brands {
		$r: &;

		@include section;
		padding: 0px;
		justify-content: center;

		&__inner-container {
			min-height: 100%;
			width: clamp(675px, 90vw, 1150px);
			height: clamp(100px, 32vw, 450px);
			padding: 0px;
			
			flex-direction: row;
			justify-content: space-around;
			

			#{$r}__brand-selector {			

				#{$r}__brand {
					width: clamp(100px, 15vw, 215px);
					height: clamp(100px, 15vw, 215px);
				}
			}

			#{$r}__brand-info-container {
				width: clamp(0px, 70%, 500px);
				margin: 0px;
				margin-bottom: auto;
			}

			#{$r}__shape-1{
				display: block;
			}

			#{$r}__shape-container {
				display: none;
			}
		}

	}
} 


</style>
