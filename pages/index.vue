<script setup>
const searchJob = () => {
    console.log('sdas')
}

const goto = (id) => {
    navigateTo('/jobs/' + id);
}

// Accessing the current route and router
const route = useRoute()
const router = useRouter()
const page = ref(Number(route.query.page) || 1);
const perPage = ref(Number(route.query.per_page) || 8);

const change = (pageNum) => {
    if (pageNum < 1) return;
    page.value = pageNum;
}

const queryUrl = computed(() => {
    return `/v1/posts?page=${page.value}&per_page=${perPage.value}`;
});

const { data: cards, refresh: refreshPost, pending } = await useFetchApi(queryUrl, {
    lazy: true,
    server: false
});

// Re-fetch data when page or per_page changes
watch([page, perPage], () => {
    // refreshPost();
    router.push({ query: { ...route.query, page: page.value } });
});

</script>

<template>
    <div class="bg-orange-100 py-10 lg:py-20">
        <Container>
            <h1 class="text-[50px] font-bold text-center text-black tracking-tighter">Find Jobs</h1>
            <p class="text-center text-xl text-gray-600">Search your career opportunity through 12,800 jobs</p>

            <div class="flex items-center justify-center mt-8 lg:mt-10">
                <form method="post" @submit.prevent="searchJob">
                    <div class="flex items-center justify-between bg-white px-2 py-2 rounded-[44px]">
                        <div class="flex items-center pl-3">
                            <Icon name="bx:search" class="w-7 h-7 text-neutral-400" />
                            <input type="text" name="job_title" class="outline-none py-3 px-4 w-full"
                                placeholder="Search Job Title...">
                        </div>
                        <div class="border-r border-r-gray-300 w-[1px]">|</div>
                        <div>
                            <input type="text" name="location" class="outline-none py-3 px-4 w-full"
                                placeholder="Search Location...">
                        </div>
                        <div>
                            <Button type="submit" variant="primary" size="xl" rounded="pill">Find Jobs</Button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    </div>

    <Container class="mt-20 mb-20">
        <template v-if="pending">
            <SkeletonHomeListPostSkeleton :total="perPage" />
        </template>
        <template v-else>
            <p class="mb-10 text-xl font-medium">Showing {{ cards.pagination?.total }} jobs</p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                <template v-for="card in cards.data" :key="card.id">
                    <Card class="cursor-pointer">
                        <div class="flex items-center gap-2">
                            <div
                                class="bg-orange-50 border border-orange-100 rounded-xl p-2 w-9 h-9 flex items-center justify-center">
                                <Icon name="hugeicons:job-link" class="w-8 h-8" />
                            </div>
                            <div>{{ card.job_title?.title_name }}</div>
                        </div>

                        <div class="mt-8 mb-8">
                            <div class="font-semibold text-lg lg:text-xl hover:text-emerald-500"
                                @click="goto(`${card.id}`)">{{ card.post_title }}
                            </div>
                        </div>

                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2">
                                <Icon name="bx:world" />
                                <div>{{ card.location }}</div>
                            </div>
                            <div class="text-gray-500">{{ card.employment_type }}</div>
                        </div>

                        <div class="flex items-center justify-between gap-4 lg:gap-6 mt-8">
                            <div>
                                <p class="text-sm text-gray-500">{{ card.created_at_human }}</p>
                                <NuxtLink to="/companies/1" class="mt-2 font-medium hover:text-emerald-500">
                                    {{ card.company?.name }}
                                </NuxtLink>
                            </div>
                            <div>
                                <NuxtLink to="/companies/1">
                                    <img :src="card.company.company_profile?.photo" alt="Kopnus"
                                        class="rounded-lg lg:rounded-xl w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 object-cover" />
                                </NuxtLink>
                            </div>
                        </div>
                    </Card>
                </template>
            </div>

            <ClientOnly>
                <div class="mt-20 flex w-full items-center justify-center">
                    <Paginate :page-count="cards.pagination.last_page" @click-handler="change" :initial-page="page" />
                </div>
            </ClientOnly>
        </template>
    </Container>
</template>