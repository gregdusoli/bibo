import api from '../../config/api';

const Bible = {
    getVersions: async (): Promise<any> => {
        try {
            const response = await fetch(`${api}/versions`);
            return response.json();
        } catch (error) {
            throw new Error();
        }
    },

    getBooks: async (book?: string): Promise<any> => {
        try {
            const uri = book ? `${api}/books/${book}` : `${api}/books`;
            const response = await fetch(uri);
            return response.json();
        } catch (error) {
            throw new Error();
        }
    },

    getChapter: async (version: string, book: string, chapter?: number): Promise<any> => {
        try {
            const cpt = !chapter ? 1 : chapter;
            const response = await fetch(`${api}/verses/${version}/${book}/${cpt}`);
            return response.json();
        } catch (error) {
            throw new Error();
        }
    },
};

export default Bible;
