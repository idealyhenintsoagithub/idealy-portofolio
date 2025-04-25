type ProjectType = 'webSite' | 'mobileApp';

interface Project {
    id: number;

    // titre
    title: string;

    // Description
    description?: string;

    // image
    image: Image;

    // lien
    link?: string;

    // Type
    type?: ProjectType;
}