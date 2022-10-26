import {useSearchParams} from 'react-router-dom';
import {Album} from 'types';

type AlbumItemViewProps = {
    data: Album;
};

export function AlbumItemView({data: {title, id}}: AlbumItemViewProps) {
    const [, setSearchParams] = useSearchParams();

    const handleSetParams = () => {
        setSearchParams({albumId: id.toString()});
    };

    return (
        <article
            className="bg-gray-300 rounded-md p-3 h-40 flex justify-center items-center text-center cursor-pointer"
            onClick={handleSetParams}
        >
            {title}
        </article>
    );
}
