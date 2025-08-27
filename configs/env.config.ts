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
};

const targetEnv = (process.env.ENV || 'stag').trim();

console.log(`TARGET ENV: ${targetEnv}`);
console.log("Available configs = ", Object.keys(configs));

if(!configs[targetEnv]){
    throw new Error(`Invalid target environment: ${targetEnv}`);
}

export const envConfig = configs[targetEnv];