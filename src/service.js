import { server } from 'config';
import fetch from 'isomorphic-unfetch';

const { books } = props;

export const service = {
    getData: () => {
        return new Promise((resolve, reject)=>{
            resolve({
                count: books.length,
                data: books,
            })
        });
    },
};

export default async function getServerSideProps () {
    const fetcher = await fetch(`${server}/author/store-book-list`);
    const books = await fetcher.json();
    return {
        props: {
            books,
        }
    }
};