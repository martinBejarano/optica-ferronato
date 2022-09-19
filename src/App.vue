<script setup>
import { menuVisible, openMenu, closeMenu, changeSection, sections, currentSection, } from "./use/useMenu";
</script>

<template>
	<div class="mobile-menu" 
        v-if="menuVisible"
    >

		<img
			class="mobile-menu__close-menu-icon"
			@click.exact="closeMenu"
			src="./media/icons/mobile-close-menu-button.svg"
			alt="Optica Ferronato cerrar menu"
		/>

		<img
			class="mobile-menu__logo"
			v-if="currentSection > 0"
			src="./media/svg/logo.svg"
			alt="Optica Ferronato Logo Oficial"
		/>

		<ul class="mobile-menu__links-container">
			<li
				class="mobile-menu__link"
				v-for="section in sections"
				:key="section.id"
				:class="{ selected: currentSection == section.id }"
			>
				<RouterLink :to="section.path">
					{{ section.name }}
				</RouterLink>
			</li>
		</ul>
	</div>

	<div class="mobile-sections-open-menu"
		v-if="currentSection > 0 && !menuVisible"
		@click="openMenu"
	>
		<img
			class="mobile-sections-open-menu__arrow-icon"
			src="./media/icons/mobile-sections-arrow.svg"
			alt="Optica Ferronato Abrir menu"
		/>

		<p class="mobile-sections-open-menu__current-section">
			{{ sections[currentSection].name }}
		</p>
	</div>


	<RouterLink class="desktop-sections-return-home"
		v-if="currentSection > 0"
		:class="`${sections[currentSection].path}`"
		to="/"
	>
		<img
			class="desktop-sections-return-home__arrow-icon"
			src="./media/icons/desktop-back-arrow.svg"
			alt="Optica ferronato cerrar menu"
		/>

		<p class="dekstop-sections-return-home__current-section">
			{{ sections[currentSection].name }}
		</p>
	</RouterLink>




	<RouterView />
</template>

<style scoped lang="scss">
@import "./styles/main.scss";

.mobile-menu {
    $r: &;

	position: absolute;
	left: 0px;
	width: clamp(150px, 80%, 350px);

	display: flex;
	flex-direction: column;

	background: $orange-op;
	z-index: 30;

	&__close-menu-icon {
		width: clamp(15px, 5vw, 25px);
		margin: 25px 0px 20px 20px;
	}

	&__logo {
		position: absolute;
		top: 25px;
		right: 30px;
		width: clamp(150px, 40vw, 230px);

		opacity: 0.7;
	}

	&__links-container {
		#{$r}__link {
			margin: 15px 0px;
			padding: 10px 10px 10px 40px;

			a {
				display: inline-block;
				width: clamp(100px, 70%, 350px);
				border-bottom: 1px $orange solid;
			}

			&.selected {
				background: #fca960e0;

				a {
					font-weight: bold;
				}
			}
            
		}
	}
}

.mobile-sections-open-menu {
	width: 200px;
	position: absolute;
	top: 20px;
	z-index: 20;

	display: flex;
	align-items: center;

	background: $orange;
	font-stretch: condensed;

	&__arrow-icon {
		width: 10px;
		margin: 10px 15px;
	}
}

.desktop-sections-return-home {
	width: 250px;
	height: 65px;
	position: absolute;
	top: 35px;
	left: 0px;

	display: none;
	align-items: center;

	background: $orange;
	// font-size: clamp(1em, 6vw, 1.3em);
	font-stretch: condensed;
	z-index: 20;

	&__arrow-icon {
		width: 14px;
		margin: 0px 15px;
	}

	// &.collaborators {
	// 	width: 300px;
	// 	justify-content: center;
	// 	left: 20vw;
	// }

}

@media screen and (min-width: $laptop-bp) {
	.mobile-menu {
		display: none;
	}

	.mobile-sections-open-menu {
		display: none;
	}

	.desktop-sections-return-home {
		display: flex;
	}
}
</style>
