export type Image = {
    id: string;
    name: string;
    url: string;
};

export type Post = {
    id: string;
    title: string;
    content: string;
    mainImage: Image;
};
