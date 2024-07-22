<script setup>
    import skills from '@/data/skills';
</script>

<template>
<section id="skils" class="pb-5">
        <div class="container pt-5">
            <p class="fs-2 text-center">Skills</p>
            <div class="mt-5 d-flex flex-wrap justify-content-center gap-5">
                <div v-for="skill in skills" class="box-dark box-large rounded d-flex align-items-center justify-content-center flex-column">
                    <i :class="skill.icon" class="icon"></i>
                    {{ skill.name }}
                </div>
            </div>
        </div>
    </section>
</template>
