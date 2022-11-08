import {DeletePhotoModal} from 'components/modal/DeletePhotoModal';
import Button from 'components/ui/Button';
import {useState} from 'react';
import {Photo} from 'types';

type PhotoItemViewProps = {data: Photo; onDelete?: () => void};

export function PhotoItemView({data, onDelete}: PhotoItemViewProps) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <figure className={`w-auto p-2 flex box-border border-b py-4`}>
                <img className="z-10 rounded-md h-48" src={data.url} alt={data.title} />

                <div className="p-4">
                    <figcaption className="w-full text-regular font-semibold ">
                        {data.title}
                    </figcaption>
                    {!!onDelete && (
                        <Button outline variant="secondary" className="mt-2" onClick={onDelete}>
                            Delete photo
                        </Button>
                    )}
                </div>
            </figure>

            {isOpen && (
                <DeletePhotoModal
                    photoId={data.id}
                    isOpen={isOpen}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}
