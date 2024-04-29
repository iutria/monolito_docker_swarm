export const getBackground = (str: string) : string =>{
    return str.includes("http") ? `url(${str})` : str;
}