<script setup>
definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-blue-100">
        <div class="w-[400px]">
            <h1 class="block">Login Page</h1>

            <form method="post" class="block">
                <div>
                    <label for="" class="w-full">Email</label>
                    <InputText />
                </div>
            </form>
        </div>
    </div>
</template>