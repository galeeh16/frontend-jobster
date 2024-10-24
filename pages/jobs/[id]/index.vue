<script setup>
import CoverImg from '@/assets/images/cover.jpeg';

const route = useRoute();

const { data: job, pending } = await useFetchApi('v1/posts/' + route.params.id, {
    cache: 'no-store',
    // lazy: true,
    server: true,
});

</script>

<template>
    <Container>
        <div v-if="pending">
            <SkeletonJobDetailJobSkeleton />
        </div>
        <div v-else>
            <div class="flex gap-4 lg:gap-8">
                <!-- kiri -->
                <div class="w-[75%]">
                    <div class="relative">
                        <img :src="CoverImg" alt="Cover" class="w-full max-h-[400px] object-cover rounded-3xl" />
                        <div class="absolute bg-white p-1 rounded-2xl -bottom-[64px] left-14">
                            <img :src="job.data.company.company_profile?.photo" alt="Kopnus"
                                class="rounded-lg lg:rounded-xl w-8 h-8 md:w-20 md:h-20 lg:w-32 lg:h-32">
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-32">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <div
                                    class="bg-neutral-100  border border-neutral-100 rounded-xl p-2 w-12 h-12 flex items-center justify-center">
                                    <Icon name="hugeicons:job-link" class="w-10 h-10" />
                                </div>
                                <p class="text-3xl font-semibold">{{ job.data.post_title }}</p>
                            </div>
                            <p class="text-lg font-light">by
                                <NuxtLink class="font-semibold text-emerald-500 hover:underline"
                                    :to="`/companies/${job.data.company.id}`">{{ job.data.company.name }}
                                </NuxtLink>
                            </p>
                        </div>
                        <div class="flex items-center gap-2 md:gap-3">
                            <Button rounded="circle" variant="outline-primary"
                                class="flex items-center justify-center !p-0 w-12 h-12">
                                <Icon name="ic:outline-share" class="w-6 h-6" />
                            </Button>
                            <Button rounded="pill" size="lg">Apply Now</Button>
                        </div>
                    </div>

                    <div class="mt-14">
                        <p class="text-xl font-semibold mb-2">Overview</p>
                        <div class="text-neutral-800 font-light leading-7 mb-8" v-html="job.data.overview"></div>

                        <p class="text-xl font-semibold mb-2">Responsabilites</p>
                        <div class="list text-neutral-800 font-light leading-7 mb-8" v-html="job.data.responsablities">
                        </div>

                        <p class="text-xl font-semibold mb-2">Requirements</p>
                        <div class="list text-neutral-800 font-light leading-7 mb-8" v-html="job.data.requirements">
                        </div>

                        <p class="text-xl font-semibold mb-2">Skills</p>
                        <div class="list text-neutral-800 font-light leading-7 mb-8" v-html="job.data.skills">
                        </div>

                        <Button rounded="pill" size="lg"> Apply Now</Button>
                    </div>

                </div>

                <!-- kanan -->
                <div class="flex-1">
                    <div class="bg-neutral-100 rounded-3xl p-4 lg:p-7 mb-8">
                        <p class="text-neutral-600 text-sm font-light">Posting at</p>
                        <p class="font-medium mb-6">{{ job.data.created_at_human }}</p>

                        <p class="text-neutral-600 text-sm font-light">Experience</p>
                        <p class="font-medium mb-6">Min {{ job.data.experience_year }} year</p>

                        <p class="text-neutral-600 text-sm font-light">Work Level</p>
                        <p class="font-medium mb-6">{{ job.data.level_type }}</p>

                        <p class="text-neutral-600 text-sm font-light">Employment Type</p>
                        <p class="font-medium mb-6">{{ job.data.employment_type }}</p>

                        <p class="text-neutral-600 text-sm font-light">Salary</p>
                        <p class="font-medium">Rp {{ useFormatNumber(job.data.salary) }} / month</p>
                    </div>

                    <div class="bg-neutral-100 rounded-3xl p-4 lg:p-7">
                        <div class="flex items-start gap-3 mb-6">
                            <div>
                                <img :src="job.data.company.company_profile.photo"
                                    :alt="job.data.company.company_profile.photo"
                                    class="w-10 h-10 lg:w-14 lg:h-14 object-cover">
                            </div>
                            <div>
                                <div class="font-medium">{{ job.data.company.name }}</div>
                                <NuxtLink :to="`/companies/${job.data.company.id}`"
                                    class="text-emerald-500 hover:underline">
                                    View Profile
                                </NuxtLink>
                            </div>
                        </div>

                        <p class="text-neutral-600 text-sm font-light">Company Size</p>
                        <p class="font-medium mb-6">{{
                            useFormatNumber(job.data.company.company_profile.company_size) }} Employees</p>

                        <p class="text-neutral-600 text-sm font-light">Founded in</p>
                        <p class="font-medium mb-6">{{ job.data.company.company_profile.founded_in.substr(0, 4)
                            }}</p>

                        <p class="text-neutral-600 text-sm font-light">Address</p>
                        <p class="font-medium mb-6">{{ job.data.company.company_profile.address }}</p>

                        <p class="text-neutral-600 text-sm font-light">Website</p>
                        <p class="font-medium mb-6">{{ job.data.company.company_profile.website ?? '-' }}</p>
                    </div>
                </div>
            </div>
        </div>

    </Container>
</template>