<script setup>
import IconDocumentation from './icons/IconDocumentation.vue';
import IconCommunity from './icons/IconCommunity.vue';
import IconTooling from './icons/IconTooling.vue';
import IconSupport from './icons/IconSupport.vue';
import IconEcosystem from './icons/IconEcosystem.vue';
import IconHamburger from './icons/IconHamburger.vue';
</script>

<template>
    <header>
        <ul>
            <li>
                <RouterLink to="/profile">
                    <div class="nav-item">
                        <IconDocumentation />
                        <span class="nav-label">Profile</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <div class="nav-item">
                        <IconCommunity />
                        <span class="nav-label">Explore</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <div class="nav-item">
                        <IconTooling />
                        <span class="nav-label">Guides</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <div class="nav-item">
                        <IconSupport />
                        <span class="nav-label">Forum</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <div class="nav-item">
                        <IconEcosystem />
                        <span class="nav-label">About</span>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.73);
}

h1{
    background-color: var(--semiforeground);
    padding: 0.25rem 1rem;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.73);
}

@media (max-width: 700px) {
    .nav-label {
        display: none;
    }
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 18px;
    padding: 1rem;
    min-height: 64px;
    transition: background-color 0.25s ease-in-out;
}

.nav-item:hover {
    background-color: var(--soft-highlight);
}
</style>