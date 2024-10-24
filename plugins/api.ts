export default defineNuxtPlugin((nuxtApp) => {
    let token = useCookie('x-token');

    const api = $fetch.create({
        baseURL: 'http://localhost:7700/api',
        onRequest({ request, options, error }) {
            // if (session.value?.token) {
            // note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
            options.headers.set('Authorization', `Bearer ${token.value}`);
            // }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})