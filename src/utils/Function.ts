export const getImageUrl = (url: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
};