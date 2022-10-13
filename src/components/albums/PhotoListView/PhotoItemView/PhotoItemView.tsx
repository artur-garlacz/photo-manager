import {Photo} from 'types';

type PhotoItemViewProps = {
    data: Photo;
};

export function PhotoItemView({data}: PhotoItemViewProps) {
    return (
        <figure className="relative w-auto h-auto overflow-hidden">
            <img className="z-10 rounded-md" src={data.url} alt={data.title} />
            <div className="absolute h-16 opacity-60 bg-white w-full left-0 bottom-0 z-40"></div>
            <figcaption className="absolute h-16 w-full left-0 bottom-0 z-40 text-xs font-semibold p-4">
                {data.title}
            </figcaption>
        </figure>
    );
}
