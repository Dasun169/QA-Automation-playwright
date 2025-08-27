interface EnvConfig {
    baseUrl: string;
    username: string;
    password: string;
}

const configs: { [key: string]: EnvConfig } = {
    qa: {
        baseUrl: 'https://cog-qa-mobile.incubatelabs.com/',
        username: '',
        password: ''
    },
    stag: {
        baseUrl: 'https://cog-stg.incubatelabs.com/',
        username: '',
        password: ''
    },
    prod: {
        baseUrl: 'https://www.cloudofgoods.com/',
        username: '',
        password: ''
    }
}