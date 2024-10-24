module.exports = {
    apps: [
        {
            name: 'Frontend_Joster',
            port: 3380,
            exec_mode: 'cluster', // ini modenya membuat beberapa aplikasi (load balancer)
            // exec_mode: 'node_cluster',
            instances: 'max',
            script: './.output/server/index.mjs', // ini biarin aja (hasil build nuxtnya diexec)
        }
    ]
  }
  