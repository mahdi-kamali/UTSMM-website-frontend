import { Icon } from '@iconify/react';
const PagesLoaders = () => {
    return (
        <div className='pages-loaders'>
            <h1>
                <Icon icon="line-md:uploading-loop" />
                <span>
                    Loading...
                </span>
            </h1>
        </div>
    )
}

export default PagesLoaders