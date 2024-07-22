<script setup>
    import projects from '@/data/projects';
</script>

<template>
    <section class="pt-5 pb-5" id="projects">
        <div class="container pt-5">
            <p class="fs-2 text-center mb-5">Projects</p>
            <div class="mt-2 d-flex flex-column gap-4 justify-content-center">
                <div class="my-card my-card-dark" v-for="project in projects">
                    <div class="header d-flex flex-wrap justify-content-between px-3 pt-3">
                        <p class="fs-4 fw-bold">{{ project.name }}</p>
                        <p class="fw-bold"></p>
                    </div>
                    <p class="px-3">{{ project.description }}</p>
                    <div class="mt-2 ms-2 d-flex gap-3">
                        <p class="btn btn-dark" v-for="tool in project.tools"><i :class="tool.icon"></i> {{ tool.name }} </p>
                    </div>
                </div>
            </div>
        </div>
     </section>
</template>