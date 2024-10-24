<template>
    <div class="">
        <Container class="py-2.5 md:py-3 lg:py-4">
            <div class="flex items-center justify-between">
                <!-- app logo -->
                <div>
                    <NuxtLink to="/">
                        <span class="text-emerald-500 font-bold text-3xl tracking-tighter">J</span>
                        <span class="text-black font-bold text-3xl tracking-tighter">obFinder</span>
                    </NuxtLink>
                </div>

                <div class="flex items-center gap-4">
                    <div>
                        <Button type="button" variant="outline-primary" rounded="pill">
                            <NuxtLink to="/login">Login</NuxtLink>
                        </Button>
                    </div>
                    <div>
                        <Button type="button" variant="primary" rounded="pill">
                            <NuxtLink to="/register">Register</NuxtLink>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>