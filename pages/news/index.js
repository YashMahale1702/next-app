import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
    return (
        <Fragment>
            <h1 className='NewsPage Original'>News Page</h1>
            <ul>
                <li>
                    <Link href='/news/first'>First news Item</Link>
                </li>
                <li>
                    <Link href='/news/second'>Second news Item</Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
