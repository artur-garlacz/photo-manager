type NameToType = {
    readonly REACT_APP_BASE_URL: string;
    readonly REACT_APP_USER_ID: number;
};

// export function getEnv<Env extends keyof NameToType>(name: Env): NameToType[Env];
// export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
//     const val = process.env[name];

//     if (!val) {
//         throw new Error(`Cannot find environmental variable: ${name}`);
//     }

//     return val;
// }
export function getEnv<Env extends keyof NameToType, OV extends string | number>(
    name: Env,
    optionalValue: OV
): NameToType[Env] | OV;
export function getEnv(
    name: keyof NameToType,
    optionalValue: string | number
): NameToType[keyof NameToType] {
    const val = process.env[name];

    if (!val) {
        return optionalValue;
    }

    return val;
}
